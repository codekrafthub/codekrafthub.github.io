import React from 'react';
import { ClipboardCheck, Laptop, GraduationCap } from 'lucide-react';
import styles from './Roadmap.module.css';

const STEPS = [
  {
    title: 'Consultation & Assessment',
    desc: 'Speak with our tech leads to align your goals. We assess your current skill level to recommend the right entry point.',
    icon: <ClipboardCheck size={32} />,
  },
  {
    title: 'Industrial Training',
    desc: 'Immerse yourself in live labs. Write production code, handle real sprints, and master the AI-first tech stack.',
    icon: <Laptop size={32} />,
  },
  {
    title: 'Career Deployment',
    desc: 'Transition into the industry with a verified portfolio. We connect you directly with our network of hiring partners.',
    icon: <GraduationCap size={32} />,
  },
];

export default function Roadmap() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.labelRow}>
          <span className={styles.labelBar} aria-hidden />
          <span className={styles.label}>Process</span>
        </div>
        <h2 className={styles.heading}>Your Journey to Tech Mastery</h2>
        
        <div className={styles.grid}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                {step.icon}
                <div className={styles.number}>{index + 1}</div>
              </div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
              {index < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
