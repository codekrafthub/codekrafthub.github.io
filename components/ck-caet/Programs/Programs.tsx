'use client';

import { Laptop, GraduationCap, Compass } from 'lucide-react';
import styles from './Programs.module.css';

interface ProgramItem {
  title: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  tags: string[];
  featured?: boolean;
}

const PROGRAMS: ProgramItem[] = [
  {
    title: 'Vocational & Tech Training',
    duration: 'Duration: 1 to 6 Months',
    icon: <Laptop size={30} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Master core job-oriented coding languages and systems architecture through hands-on practical lab sessions and direct exercises.',
    items: [
      'Python, C, C++ and Systems Coding',
      'Data Science and Predictive Analytics',
      'Full-Stack Web Development',
      'Automated Scripting and Office Tools',
    ],
    tags: ['Python', 'Data Science', 'AI Basics', 'SQL'],
  },
  {
    title: 'Corporate Internships',
    duration: 'Duration: 1 to 6 Months',
    icon: <Compass size={30} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Gain real-world experience. Build industrial software on production codebases, write clean pull-requests, and deploy live applications.',
    items: [
      'Live Enterprise Client Projects',
      'Collaborative Git and Agile Workflows',
      'Daily Mentoring from Tech Leads',
      'Code Reviews and QA Practices',
    ],
    tags: ['Machine Learning', 'NLP', 'Computer Vision', 'Git'],
    featured: true,
  },
  {
    title: 'Placement & Career Prep',
    duration: 'Duration: Ongoing',
    icon: <GraduationCap size={30} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'We structure your path to top tech companies. From mock interviews to communication skills, we prepare you for corporate hires.',
    items: [
      'Mock Technical and HR Panels',
      'Resume and LinkedIn Professional Styling',
      'Corporate Soft Skills and Communication',
      'Direct Recruitment Opportunities',
    ],
    tags: ['Interview Prep', 'LinkedIn', 'Aptitude', 'DSA'],
  },
];

export default function Programs() {
  return (
    <section id="caet-programs" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.labelRow}>
          <span className={styles.labelBar} aria-hidden />
          <span className={styles.label}>Academic Paths</span>
        </div>
        <h2 className={styles.heading}>Our Program Matrix</h2>
        <p className={styles.sub}>
          Rigorous curricula, live project experience, and placement assistance designed to launch
          your tech career from day one.
        </p>

        <div className={styles.grid}>
          {PROGRAMS.map((prog) => (
            <div
              key={prog.title}
              className={`${styles.cardOuter} ${prog.featured ? styles.featuredOuter : ''}`}
            >
              <div className={`${styles.card} ${prog.featured ? styles.featured : ''}`}>
                <div className={styles.cardIconWrapper}>{prog.icon}</div>

                <h3 className={styles.cardTitle}>{prog.title}</h3>

                <div className={styles.durationBadge}>{prog.duration}</div>

                <p className={styles.cardDesc}>{prog.description}</p>

                <ul className={styles.cardList}>
                  {prog.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <span className={styles.checkMark}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={styles.tagRow}>
                  {prog.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
