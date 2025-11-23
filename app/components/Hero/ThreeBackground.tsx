'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  isHovering: boolean;
}

export default function ThreeBackground({ isHovering }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | null>(null);


  useEffect(() => {
    // Check if we're in browser
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Fully transparent
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create MORE visible particles with better distribution
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Better spread distribution
      const radius = Math.random() * 5 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Better particle material - more visible
    const material = new THREE.PointsMaterial({
      color: 0x60a5fa, // Brighter blue
      size: 0.05, // Bigger particles
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        // Continuous rotation
        particlesRef.current.rotation.y += 0.0015;
        particlesRef.current.rotation.x += 0.0008;

        // Smooth mouse interaction
        const targetRotationX = mouseRef.current.y * 0.5;
        const targetRotationY = mouseRef.current.x * 0.5;
        
        particlesRef.current.rotation.x += (targetRotationX - particlesRef.current.rotation.x) * 0.05;
        particlesRef.current.rotation.y += (targetRotationY - particlesRef.current.rotation.y) * 0.05;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current && rendererRef.current.domElement.parentNode) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          // Element already removed
        }
      }
      
      geometry.dispose();
      material.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  // Update particle size based on hover - with smooth transition
  useEffect(() => {
    if (particlesRef.current) {
      const material = particlesRef.current.material as THREE.PointsMaterial;
      const targetSize = isHovering ? 0.12 : 0.05; // Much bigger on hover
      const targetOpacity = isHovering ? 1.0 : 0.8;
      
      // Smooth transition
      const animate = () => {
        const currentSize = material.size;
        const currentOpacity = material.opacity;
        
        material.size += (targetSize - currentSize) * 0.1;
        material.opacity += (targetOpacity - currentOpacity) * 0.1;
        
        if (Math.abs(targetSize - currentSize) > 0.001) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [isHovering]);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
}