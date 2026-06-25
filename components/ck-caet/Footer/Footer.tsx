import Link from 'next/link';
import styles from './Footer.module.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const NAV_LINKS = [
  { href: '#caet-about',    label: 'About CAET' },
  { href: '#caet-programs', label: 'Programs' },
  { href: '#caet-contact',  label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/company/codekrafthub/', label: 'LinkedIn', icon: <LinkedinIcon /> },
  { href: 'https://instagram.com/codekrafthub', label: 'Instagram', icon: <InstagramIcon /> },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandName}>CK-CAET</div>
            <div className={styles.brandSub}>Centre for AI &amp; Emerging Technologies</div>
            <p className={styles.brandDesc}>
              Established within the Education and Skill Development Framework of the{' '}
              <a
                href="https://hdschaefer-foundation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.foundationLink}
              >
                H.D. Schaefer Memorial Foundation
              </a>
              , a Section&nbsp;8 Company under the Companies Act, 2013, Govt. of India.
            </p>
          </div>

          {/* Quick nav */}
          <div className={styles.navCol}>
            <div className={styles.colHeading}>Quick Links</div>
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
              <li>
                <Link href="/" className={styles.navLink}>
                  ← Back to IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.socialCol}>
            <div className={styles.colHeading}>Connect</div>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
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

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} CK-CAET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
