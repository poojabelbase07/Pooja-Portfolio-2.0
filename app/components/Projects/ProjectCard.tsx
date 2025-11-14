'use client';

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image'; // Use Next.js Image!
import SkillBadge from '../Common/SkillBadge';
import { Project } from '@/app/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={project.image} 
          alt={project.title}
          width={800}
          height={450}
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Rest of card JSX */}
      </div>
    </article>
  );
}