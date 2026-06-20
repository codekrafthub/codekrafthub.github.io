'use client';

import { Laptop, GraduationCap, Compass } from 'lucide-react';
import styles from './Programs.module.css';

interface ProgramItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const PROGRAMS: ProgramItem[] = [
  {
    title: 'Vocational & Tech Training',
    icon: <Laptop size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Master core job-oriented coding languages and systems architecture through hands-on practical lab sessions and direct exercises.',
    items: [
      'Python, C, C++, & Systems Coding',
      'Data Science & Predictive Analytics',
      'Full-Stack Web Development',
      'Automated Scripting & Office Tools',
    ],
  },
  {
    title: 'Corporate Internships',
    icon: <Compass size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Gain real-world experience. Build industrial software on production codebases, write clean pull-requests, and deploy live apps.',
    items: [
      '3-6 Months Structured Internships',
      'Collaborative Git & Agile Workflows',
      'Live Enterprise Client Projects',
      'Daily Mentoring from Tech Leads',
    ],
  },
  {
    title: 'Placement & Career Prep',
    icon: <GraduationCap size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'We structure your path to top tech companies. From mock interviews to communication skills, we prepare you for corporate hires.',
    items: [
      'Mock Technical & HR Panels',
      'Resume & LinkedIn Professional Styling',
      'Corporate Soft Skills & Communication',
      'Direct Recruitment Opportunities',
    ],
  },
];

export default function Programs() {
  return (
    <section id="caet-programs" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Academic Paths</div>
        <h2 className={styles.heading}>Our Academic Programs</h2>
        <p className={styles.sub}>
          Rigorous curricula, practical live projects, and placement assistance designed to launch your tech career.
        </p>

        <div className={styles.grid}>
          {PROGRAMS.map((prog) => (
            <div key={prog.title} className={styles.card}>
              <div className={styles.cardIconWrapper}>{prog.icon}</div>
              <h3 className={styles.cardTitle}>{prog.title}</h3>
              <p className={styles.cardDesc}>{prog.description}</p>
              <ul className={styles.cardList}>
                {prog.items.map((item) => (
                  <li key={item} className={styles.cardListItem}>
                    <span className={styles.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
