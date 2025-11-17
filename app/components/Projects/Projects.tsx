import React from 'react';
import Section from '../Common/Section';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section 
      id="projects" 
      title="Projects"
      subtitle="Things that I built as side projects..."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}