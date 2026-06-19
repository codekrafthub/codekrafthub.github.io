import styles from './About.module.css';
import { Laptop, Compass, Milestone, Info } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Laptop size={28} strokeWidth={1.5} />,
      title: 'Practical Coding',
      desc: 'Ditching boring lectures. Students learn by writing production-grade code, building apps, and implementing databases.',
    },
    {
      icon: <Milestone size={28} strokeWidth={1.5} />,
      title: 'Placement Readiness',
      desc: 'Comprehensive placement grooming: mock interviews, Resume & LinkedIn optimization, soft skills, and direct placement drives.',
    },
    {
      icon: <Compass size={28} strokeWidth={1.5} />,
      title: 'Industry Mentors',
      desc: 'Direct interaction and guidance from software engineers and data scientists working in top-tier tech companies.',
    },
  ];

  return (
    <section id="caet-about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Who We Are</div>
        
        <h2 className={styles.headline}>
          Bridging the gap between <br />
          <span className={styles.gradient}>classroom learning</span> and <br />
          industry demands.
        </h2>

        <p className={styles.body}>
          The <strong>CodeKraft Centre for AI &amp; Emerging Technologies (CK-CAET)</strong> is dedicated to delivering industry-ready training, live project exposure, and structured internship opportunities to students and fresh graduates in India. We construct a rigorous learning sandbox that simulates a real software job, ensuring our students are prepared to hit the ground running.
        </p>

        {/* Foundation Box */}
        <div className={styles.foundationCard}>
          <div className={styles.foundationHeader}>
            <Info size={24} className={styles.infoIcon} />
            <h3>Institutional Framework</h3>
          </div>
          <p className={styles.foundationBody}>
            CK-CAET is established within the Education and Skill Development Framework of the <strong>H.D. Schaefer Memorial Foundation</strong>, a Section 8 non-profit company registered under the Companies Act, 2013 (Govt. of India). This alliance guarantees that our training meets high corporate standards while remaining socially inclusive and accessible.
          </p>
          <a
            href="https://hdschaefer-foundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.foundationLink}
          >
            Visit Foundation Portal &rarr;
          </a>
        </div>

        <div className={styles.pillars}>
          {pillars.map(({ icon, title, desc }) => (
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
