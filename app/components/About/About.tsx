import React from 'react';
import { User } from 'lucide-react';
import Section from '../Common/Section';
import { aboutMe } from '../../data/portfolioData';
import styles from './About.module.css';

const About = () => {
  return (
    <Section 
      id="about" 
      icon={<User size={24} />} 
      title="About Me"
    >
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.description}>
            {aboutMe.description}
          </p>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <User size={80} className={styles.icon} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;