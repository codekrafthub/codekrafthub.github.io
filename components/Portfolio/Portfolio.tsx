'use client';

import { useState } from 'react';
import { LineChart, Cog, MessageSquare, HeartPulse, Globe2 } from 'lucide-react';
import styles from './Portfolio.module.css';

export interface Project {
  title: string;
  description: string;
  link: string;
  intro: string;
  icon: React.ReactNode;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'AI & Data Science Solutions',
    description: 'We turn raw data into actionable insights that fuel growth and smarter decisions.',
    link: '#contact',
    intro: 'Dive into our UK energy trading case study. Explore real market auction data and see how AI-driven trading strategies can help maximize profits from financial energy trades.',
    icon: <LineChart size={32} strokeWidth={1.5} />,
    tags: ['Python', 'ML', 'Data Science'],
  },
  {
    title: 'Business Process Automation',
    description: 'We automate repetitive tasks to save time, reduce costs, and increase efficiency.',
    link: '#contact',
    intro: 'Try our AI tool for instant machine part defect detection: upload a photo of a Fender Apron, and the deep learning model will tell if it\'s defective or not.',
    icon: <Cog size={32} strokeWidth={1.5} />,
    tags: ['Deep Learning', 'Computer Vision', 'Automation'],
  },
  {
    title: 'Conversational AI & Chatbots',
    description: 'We design intelligent chatbots that simplify communication and enhance engagement.',
    link: '#contact',
    intro: 'Experience our automated sentiment analysis tool: upload a CSV of reviews and instantly filter, correct, and rate user sentiments using advanced NLP.',
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    tags: ['NLP', 'Sentiment Analysis', 'AI'],
  },
  {
    title: 'Smart Healthcare & Education',
    description: 'We build digital-first healthcare and education tools that improve accessibility and outcomes.',
    link: '#contact',
    intro: 'See applied data science in action for healthcare risk detection. This project analyzes blood pressure data with Python and ML to classify hypertension vs hypotension.',
    icon: <HeartPulse size={32} strokeWidth={1.5} />,
    tags: ['Healthcare', 'ML', 'Data Science'],
  },
  {
    title: 'Governance & Social Impact',
    description: 'We create community-driven platforms that bridge gaps between citizens, services, and opportunities.',
    link: '#contact',
    intro: 'We are building governance and social impact platforms. Contact us to learn more about our upcoming initiatives.',
    icon: <Globe2 size={32} strokeWidth={1.5} />,
    tags: ['GovTech', 'Social Impact', 'Platform'],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isExternal = project.link.startsWith('http');
  
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.link === '#contact') {
      e.preventDefault();
      onClose();
      // Smooth scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal aria-label={project.title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">×</button>
        <div className={styles.modalIcon}>{project.icon}</div>
        <h3 className={styles.modalTitle}>{project.title}</h3>
        <p className={styles.modalIntro}>{project.intro}</p>
        <a
          href={project.link}
          onClick={handleCtaClick}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={styles.modalCta}
        >
          Request Demo
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Our Work</div>
        <h2 className={styles.heading}>Project Portfolio</h2>
        <p className={styles.sub}>Low-Cost · High-Impact · AI-Driven</p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <button
              key={project.title}
              className={styles.card}
              onClick={() => setActive(project)}
              aria-label={`View ${project.title}`}
            >
              <div className={styles.cardIcon}>{project.icon}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <span className={styles.cardArrow}>↗</span>
            </button>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
