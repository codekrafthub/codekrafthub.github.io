'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home',      label: 'CAET Home' },
  { href: '#caet-about',     label: 'About CAET' },
  { href: '#caet-programs',  label: 'Programs' },
  { href: '#caet-contact',   label: 'Contact' },
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
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      
      const targetId = href === '#home' ? 'home' : href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="CAET navigation">
      <a href="#home" className={styles.logo} onClick={(e) => smoothScroll(e, '#home')}>
        <div className={styles.logoWrapper}>
          <Image src="/ck_caet_logo.jpg" alt="CK-CAET Logo" width={38} height={38} className={styles.logoImg} />
        </div>
        <div className={styles.logoText}>
          <span className={styles.brandName}>CK-CAET</span>
          <span className={styles.brandSubName}>Centre for AI &amp; Emerging Tech</span>
        </div>
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
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => smoothScroll(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <Link href="/" className={styles.ctaLink}>
            IT Services &rarr;
          </Link>
        </li>
      </ul>
    </nav>
  );
}
