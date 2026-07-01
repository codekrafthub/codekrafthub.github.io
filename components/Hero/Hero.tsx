'use client';

import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

interface HeroProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onServicesClick, onContactClick }: HeroProps) {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Media */}
      <div className={styles.heroMediaWrap} aria-hidden="true">
        <video
          src="/hero-bg.mp4"
          poster="/codekraft_logo.png"
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        />
        <div className={styles.heroFade} />
        <div className={styles.heroVignette} />
      </div>

      {/* Central Glow */}
      <div className={styles.centralGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.accentLine} aria-hidden="true" />
          <h1 className={styles.title}>
            Building Intelligent<br />
            <span className={styles.titleLine2}>
              Systems<span className={styles.accent}>.</span>
            </span>
          </h1>

          <p className={styles.description}>
            We deliver cutting-edge AI automation, intelligent chatbots, and robust software solutions to scale businesses and drive digital transformation.
          </p>

          <div className={styles.ctas}>
            <button className={styles.btnPrimary} onClick={onServicesClick}>
              Explore Services
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button className={styles.btnOutline} onClick={onContactClick}>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Liquid Glass Card (Stats & Info) */}
        <div className={styles.liquidCard}>
          <div className={styles.cardTag}>[ Enterprise Solutions ]</div>
          <p className={styles.cardDesc}>Robust software architecture for modern businesses.</p>
          
          <div className={styles.statList}>
            {[
              { value: '20+', label: 'AI Projects' },
              { value: '99%', label: 'Automation Gain' },
              { value: '12+', label: 'Years Experience' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.statItem}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
