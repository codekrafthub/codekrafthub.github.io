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
  industry: string;
  functionTag: string;
  valueDriver: string;
  technology: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'AI-Driven Revenue Optimization in Energy Trading',
    description: 'Analyzed UK energy trading data to deploy machine learning strategies that maximize trade profits.',
    link: '#contact',
    intro: 'Dive into our UK energy trading case study. Explore real market auction data and see how AI-driven trading strategies can help maximize profits from financial energy trades.',
    icon: <LineChart size={32} strokeWidth={1.5} />,
    industry: 'Energy & Trading',
    functionTag: 'Revenue Optimization',
    valueDriver: 'Maximize Profits',
    technology: ['Python', 'ML', 'Time Series', 'Predictive Analytics'],
  },
  {
    title: 'Computer Vision Quality Inspection',
    description: 'Built a deep learning system for instant machine part defect detection in manufacturing.',
    link: '#contact',
    intro: 'Try our AI tool for instant machine part defect detection: upload a photo of a Fender Apron, and the deep learning model will tell if it\'s defective or not.',
    icon: <Cog size={32} strokeWidth={1.5} />,
    industry: 'Manufacturing',
    functionTag: 'Quality Control & Safety',
    valueDriver: 'Reduce Operational Costs',
    technology: ['Deep Learning', 'Computer Vision', 'CNN'],
  },
  {
    title: 'Conversational AI & Sentiment Analysis',
    description: 'Developed an intelligent NLP parser to filter, correct, and analyze customer sentiment reviews.',
    link: '#contact',
    intro: 'Experience our automated sentiment analysis tool: upload a CSV of reviews and instantly filter, correct, and rate user sentiments using advanced NLP.',
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    industry: 'Customer Support',
    functionTag: 'Customer Experience',
    valueDriver: 'Scalable Engagement',
    technology: ['NLP', 'Sentiment Analysis', 'LLMs'],
  },
  {
    title: 'Applied Data Science for Healthcare Risk',
    description: 'Created an ML risk classification system analyzing blood pressure metrics for health risks.',
    link: '#contact',
    intro: 'See applied data science in action for healthcare risk detection. This project analyzes blood pressure data with Python and ML to classify hypertension vs hypotension.',
    icon: <HeartPulse size={32} strokeWidth={1.5} />,
    industry: 'Healthcare',
    functionTag: 'Clinical Risk Detection',
    valueDriver: 'Early Risk Classification',
    technology: ['Healthcare Tech', 'ML', 'Data Science'],
  },
  {
    title: 'Digital ERP for Social & Educational Impact',
    description: 'Designed custom management and ERP solutions to streamline billing, attendance, and record keeping.',
    link: '#contact',
    intro: 'We are building governance, rural tech, and school ERP platforms to bridge digital gaps for local institutions.',
    icon: <Globe2 size={32} strokeWidth={1.5} />,
    industry: 'Education & Governance',
    functionTag: 'Operations & ERP',
    valueDriver: 'Process Efficiency',
    technology: ['Web Platforms', 'Custom Database Systems', 'ERP'],
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
        
        <div className={styles.modalMetadata}>
          <div className={styles.metadataRow}>
            <span className={styles.metaLabel}>Industry:</span>
            <span className={styles.metaValue}>{project.industry}</span>
          </div>
          <div className={styles.metadataRow}>
            <span className={styles.metaLabel}>Function:</span>
            <span className={styles.metaValue}>{project.functionTag}</span>
          </div>
          <div className={styles.metadataRow}>
            <span className={styles.metaLabel}>Value Driver:</span>
            <span className={styles.metaValue}>{project.valueDriver}</span>
          </div>
        </div>

        <p className={styles.modalIntro}>{project.intro}</p>

        <div className={styles.modalTechStack}>
          {project.technology.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>

        <a
          href={project.link}
          onClick={handleCtaClick}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={styles.modalCta}
        >
          Request Case Study
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
        <h2 className={styles.heading}>Case Study Library</h2>
        <p className={styles.sub}>STRUCTURED · IMPACT-ORIENTED · ENTERPRISE GRADE</p>

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
              
              <div className={styles.metadataGrid}>
                <div className={styles.metadataRow}>
                  <span className={styles.metaLabel}>Industry:</span>
                  <span className={styles.metaValue}>{project.industry}</span>
                </div>
                <div className={styles.metadataRow}>
                  <span className={styles.metaLabel}>Function:</span>
                  <span className={styles.metaValue}>{project.functionTag}</span>
                </div>
                <div className={styles.metadataRow}>
                  <span className={styles.metaLabel}>Value Driver:</span>
                  <span className={styles.metaValue}>{project.valueDriver}</span>
                </div>
              </div>

              <div className={styles.tags}>
                {project.technology.map((tech) => (
                  <span key={tech} className={styles.tag}>{tech}</span>
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
