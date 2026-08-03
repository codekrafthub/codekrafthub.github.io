'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#caet-about',        label: 'About CAET' },
  { href: '/ck-caet/courses',   label: 'Courses' },
  { href: '/ck-caet/internships', label: 'Internships' },
  { href: '#caet-programs',     label: 'Programs' },
  { href: '/youthx',            label: 'YouthX' },
  { href: '#caet-contact',      label: 'Contact' },
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
      } else {
        // If element not found on current page, redirect to home with hash
        window.location.href = `/ck-caet${href}`;
      }
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="CAET navigation">
      <Link href="/ck-caet" className={styles.logo} onClick={() => setMenuOpen(false)}>
        <div className={styles.logoText}>
          <span className={styles.brandName}>CK-CAET</span>
          <span className={styles.brandSubName}>Centre for AI &amp; Emerging Tech</span>
        </div>
      </Link>

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
            {href.startsWith('#') ? (
              <a
                href={href}
                onClick={(e) => smoothScroll(e, href)}
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )}
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
