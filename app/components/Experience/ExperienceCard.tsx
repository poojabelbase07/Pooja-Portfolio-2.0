import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import SkillBadge from '../Common/SkillBadge';
import { Experience } from '@/app/types';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export default function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  const { period, title, company, description, skills, link } = experience;

  return (
    <div className={`${styles.card} ${!isLast ? styles.withLine : ''}`}>
      <div className={styles.marker}></div>
      
      <div className={styles.content}>
        <p className={styles.period}>{period}</p>
        
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.companyWrapper}>
          <p className={styles.company}>{company}</p>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`Visit ${company} website`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        
        <ul className={styles.descriptionList}>
          {description.map((desc, index) => (
            <li key={index} className={styles.descriptionItem}>
              <ChevronRight size={16} className={styles.bullet} />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        
        <div className={styles.skills}>
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}