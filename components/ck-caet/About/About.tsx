import styles from './About.module.css';
import { Laptop, Compass, Milestone, Building2, ShieldCheck, Users } from 'lucide-react';

const CREDENTIALS = [
  {
    icon: <Building2 size={20} strokeWidth={1.5} />,
    label: 'Established Under',
    value: 'H.D. Schaefer Memorial Foundation',
    detail: 'Education and Skill Development Framework',
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    label: 'ISO Certified',
    value: 'IAF 9001:2015 and 21001:2025',
    detail: 'Quality and Education Management Systems',
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    label: 'Governance',
    value: 'Advisory Board',
    detail: 'Industry Experts and Academic Leaders',
  },
];

const PILLARS = [
  {
    icon: <Laptop size={24} strokeWidth={1.5} />,
    title: 'Practical Learning',
    desc: 'No boring lectures. Students learn by writing production-grade code, building apps, and implementing real databases on live projects.',
  },
  {
    icon: <Milestone size={24} strokeWidth={1.5} />,
    title: 'Placement Readiness',
    desc: 'Comprehensive placement grooming: mock interviews, Resume and LinkedIn optimization, soft skills, and direct placement drives.',
  },
  {
    icon: <Compass size={24} strokeWidth={1.5} />,
    title: 'Industry Mentors',
    desc: 'Direct interaction and guidance from software engineers and data scientists working in top-tier tech companies.',
  },
];

export default function About() {
  return (
    <section id="caet-about" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.labelRow}>
          <span className={styles.labelBar} aria-hidden />
          <span className={styles.label}>Who We Are</span>
        </div>

        <h2 className={styles.headline}>
          Bridging the gap between{' '}
          <span className={styles.gradient}>classroom learning</span>
          {' '}and industry demands.
        </h2>

        <p className={styles.body}>
          The <strong>CodeKraft Centre for AI &amp; Emerging Technologies (CK-CAET)</strong> delivers
          industry-ready training, live project exposure, and structured internship opportunities to
          students and fresh graduates across India. We construct a rigorous learning environment
          that simulates a real software job, ensuring our students hit the ground running.
        </p>

        {/* Credential Grid */}
        <div className={styles.credGrid}>
          {CREDENTIALS.map(({ icon, label, value, detail }) => (
            <div key={label} className={styles.credOuter}>
              <div className={styles.credCard}>
                <span className={styles.credIcon}>{icon}</span>
                <div>
                  <div className={styles.credLabel}>{label}</div>
                  <div className={styles.credValue}>{value}</div>
                  <div className={styles.credDetail}>{detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foundation link */}
        <div className={styles.foundationLinkRow}>
          <a
            href="https://hdschaefer-foundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.foundationLink}
          >
            Visit H.D. Schaefer Memorial Foundation Portal &rarr;
          </a>
        </div>

        {/* Pillars */}
        <div className={styles.pillarsHeading}>
          <span className={styles.labelBar} aria-hidden />
          <span className={styles.label}>Three Core Pillars</span>
        </div>

        <div className={styles.pillars}>
          {PILLARS.map(({ icon, title, desc }) => (
            <div key={title} className={styles.pillar}>
              <span className={styles.pillarIcon}>{icon}</span>
              <strong className={styles.pillarTitle}>{title}</strong>
              <span className={styles.pillarDesc}>{desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
