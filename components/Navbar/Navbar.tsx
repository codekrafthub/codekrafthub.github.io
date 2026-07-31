'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about',     label: 'About' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '/ck-caet',   label: 'CAET Academy' },
  { href: '#contact',   label: 'Contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const isNavDark = scrolled || !isHomepage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `/${href}`;
      }
    } else {
      setMenuOpen(false);
    }
  }

  return (
    <nav className={`${styles.navbar} ${isNavDark ? styles.scrolled : ''}`} aria-label="Primary navigation">
      <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        <Image src="/codekraft_logo_white.png" alt="" aria-hidden width={36} height={36} />
        <span>CodeKraft</span>
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
        {navLinks.map(({ href, label, cta }) => (
          <li key={href}>
            {href.startsWith('#') ? (
              <a
                href={href}
                className={cta ? styles.ctaLink : ''}
                onClick={(e) => smoothScroll(e, href)}
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                className={cta ? styles.ctaLink : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
