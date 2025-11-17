import React from 'react';
import Section from '../Common/Section';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/app/data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}