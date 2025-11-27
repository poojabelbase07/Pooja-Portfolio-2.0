import React from 'react';
import Section from '../Common/Section';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className={styles.content}>
        {/* Add your short 2-3 line bio here */}
        <p className={styles.text}>
        Hello Pooja belbase here whats up!!
        </p>
      </div>
    </Section>
  );
}