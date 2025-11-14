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
      {/* Rest of your Navbar JSX - same as React version */}
    </nav>
  );
}