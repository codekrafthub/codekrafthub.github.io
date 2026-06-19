'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  onProgramsClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onProgramsClick, onContactClick }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>
      {/* Circuit background details */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.content}>
        <div className={styles.foundationBadge}>
          In Association with H.D. Schaefer Memorial Foundation
        </div>

        <Image
          src="/ck_caet_logo.jpg"
          alt="CK-CAET Logo"
          width={130}
          height={130}
          className={styles.logo}
          priority
        />

        <h1 className={styles.title}>
          CodeKraft <br />
          <span className={styles.accent}>Centre for AI &amp; Emerging Technologies</span>
        </h1>

        <p className={styles.affiliation}>
          Established within the Education and Skill Development Framework of H.D. Schaefer Memorial Foundation  
          <span className={styles.block}>(A Registered Section 8 Company under the Companies Act, 2013)</span>
        </p>

        <p className={styles.tagline}>
          Empowering the next generation of engineers with placement-focused training, hands-on internships, and live industrial software projects.
        </p>

        <div className={styles.ctas}>
          <button className={styles.btnPrimary} onClick={onProgramsClick}>
            Explore Programs
          </button>
          <button className={styles.btnOutline} onClick={onContactClick}>
            Apply for Internship
          </button>
        </div>

        <div className={styles.stats}>
          {[
            { value: '500+', label: 'Students Trained' },
            { value: '20+', label: 'Live Projects' },
            { value: '100%', label: 'Practical Learning' },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  );
}
