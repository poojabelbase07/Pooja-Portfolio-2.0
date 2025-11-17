import React from 'react';
import Section from '../Common/Section';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className={styles.content}>
        {/* Add your short 2-3 line bio here */}
        <p className={styles.text}>
          Your short bio goes here. Keep it minimal and professional like Suhaan's portfolio.
        </p>
      </div>
    </Section>
  );
}