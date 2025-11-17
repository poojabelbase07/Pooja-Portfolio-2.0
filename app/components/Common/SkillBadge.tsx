import React from 'react';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  skill: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export default function SkillBadge({ skill, variant = 'default' }: SkillBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {skill}
    </span>
  );
}