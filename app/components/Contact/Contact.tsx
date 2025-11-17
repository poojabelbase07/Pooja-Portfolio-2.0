import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/app/data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <MessageCircle size={48} className={styles.icon} />
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.description}>
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className={styles.button}
        >
          <Mail size={20} />
          Get in Touch
        </a>
      </div>
    </section>
  );
}