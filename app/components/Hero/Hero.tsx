'use client';

import { useState, Suspense } from 'react';
import { ExternalLink, ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { personalInfo } from '@/app/data/portfolioData';
import styles from './Hero.module.css';

// Dynamically import Three.js component (client-side only)
const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
  ssr: false,
  loading: () => null
});

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Three.js Background - Only on desktop */}
      <div className={styles.threeContainer}>
        <Suspense fallback={null}>
          <ThreeBackground isHovering={isHovering} />
        </Suspense>
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>Hello there, I'm</p>
        
        <h1 className={styles.name}>{personalInfo.name}</h1>
        
        <h2 
          className={styles.role}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {personalInfo.role}
        </h2>
        
        <h3 className={styles.tagline}>{personalInfo.tagline}</h3>
        
        <p className={styles.description}>{personalInfo.description}</p>
        
        <div className={styles.actions}>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Check out my resume!
            <ExternalLink size={18} />
          </a>
          
          <button onClick={scrollToAbout} className={styles.secondaryBtn}>
            Learn More
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}