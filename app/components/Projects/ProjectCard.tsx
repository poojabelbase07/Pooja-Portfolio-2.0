'use client';

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import SkillBadge from '../Common/SkillBadge';
import { Project } from '@/app/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { period, title, description, skills, image, githubLink, liveLink } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          width={800}
          height={450}
          className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <div className={styles.imageSkeleton}></div>}
        
        <div className={styles.overlay}>
          <div className={styles.links}>
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <p className={styles.period}>{period}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.skills}>
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </article>
  );
}