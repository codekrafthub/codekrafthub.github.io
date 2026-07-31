import Link from 'next/link';
import styles from './Footer.module.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const PROJECTS = [
  { href: '/case-studies', label: 'Case Study Library' },
  { href: '/ck-caet', label: 'CK-CAET' },
  { href: '/youthx', label: 'YouthX Summit' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandName}>CodeKraft</div>
            <div className={styles.brandSub}>Innovate · Automate · Scale</div>
            <p className={styles.brandDesc}>
              Delivering high-performance software solutions, AI-driven automation, and 
              immersive digital experiences for modern enterprises.
            </p>
          </div>

          {/* Quick nav */}
          <div className={styles.navCol}>
            <div className={styles.colHeading}>Navigation</div>
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className={styles.navCol}>
            <div className={styles.colHeading}>Platforms</div>
            <ul className={styles.navList}>
              {PROJECTS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.navLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className={styles.socialCol}>
            <div className={styles.colHeading}>Connect</div>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/company/codekrafthub/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
            <div className={styles.contactLine}>
              <a href="mailto:codekraft.hub@gmail.com" className={styles.contactLink}>
                codekraft.hub@gmail.com
              </a>
            </div>
            <div className={styles.contactLine}>
              <a href="tel:+917898378933" className={styles.contactLink}>
                +91 78983 78933
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} CodeKraft. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
