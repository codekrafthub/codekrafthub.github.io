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
    title: 'Technical Training',
    icon: <Laptop size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Master core coding languages and analytical methodologies through hands-on lab sessions and building practical applications.',
    items: [
      'Python, C, C++, & Advanced Excel',
      'Data Science & Visualization',
      'Backend & Task Automation',
      'Responsive Web Development',
    ],
  },
  {
    title: 'Career Readiness',
    icon: <GraduationCap size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'We structure individual career pipelines. From technical review to communication skills, we prepare you for corporate placement.',
    items: [
      'Mock Technical & HR Interviews',
      'Resume & LinkedIn Optimization',
      'Corporate Soft Skills & Grooming',
      'Higher Education & Study Abroad Help',
    ],
  },
  {
    title: 'Industry Exposure',
    icon: <Compass size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Bridging the university-industry divide with active collaborative programs and real enterprise coding sandbox environments.',
    items: [
      'Live Industry Coding Sandbox',
      'Corporate Internship Opportunities',
      'Hackathons & Deep-Dive Bootcamps',
      'Expert Seminars & Tech Talks',
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
