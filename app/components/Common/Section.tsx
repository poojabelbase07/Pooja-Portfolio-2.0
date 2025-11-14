import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}