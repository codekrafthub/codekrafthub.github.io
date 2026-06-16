'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'Who We Are' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact',   label: 'Contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary navigation">
      <a href="#home" className={styles.logo} onClick={(e) => smoothScroll(e, '#home')}>
        <Image src="/codekraft_logo_white.png" alt="" aria-hidden width={36} height={36} />
        <span>CodeKraft</span>
      </a>

      <button
        className={`${styles.toggle} ${menuOpen ? styles.open : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <ul ref={menuRef} className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
        {navLinks.map(({ href, label, cta }) => (
          <li key={href}>
            <a
              href={href}
              className={cta ? styles.ctaLink : ''}
              onClick={(e) => smoothScroll(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
