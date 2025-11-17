import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/app/data/portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.name}>{personalInfo.name}</h3>
            <p className={styles.tagline}>Building the future, one line at a time.</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with <Heart size={14} className={styles.heart} /> using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}