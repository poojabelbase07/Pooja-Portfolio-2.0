'use client';

import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo, navItems } from '@/app/data/portfolioData';
import styles from './Navbar.module.css';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

export default function Navbar({ activeSection, isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button 
          onClick={() => scrollToSection('hero')}
          className={styles.logo}
          aria-label="Go to top"
        >
          Portfolio
        </button>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ''
              }`}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.mobileNavLink} ${
                activeSection === item.id ? styles.active : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}