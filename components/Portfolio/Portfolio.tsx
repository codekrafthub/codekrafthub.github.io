'use client';

import { LineChart, Cog, MessageSquare, HeartPulse, Globe2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Portfolio.module.css';

export interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  industry: string;
  functionTag: string;
  valueDriver: string;
  technology: string[];
  filterTag: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Enterprise Computer Vision & Visual AI',
    description: 'Deploying high-accuracy visual intelligence for manufacturing quality, hospitality curation, and PropTech verification.',
    icon: <Cog size={32} strokeWidth={1.5} />,
    industry: 'Vision & AI',
    functionTag: 'Visual Inspection & Search',
    valueDriver: 'Process Excellence',
    technology: ['Deep Learning', 'Computer Vision', 'PyTorch', 'TensorRT'],
    filterTag: 'computer-vision',
  },
  {
    title: 'Conversational AI & Voice Engineering',
    description: 'Specialized linguistic products and autonomous voice platforms supporting Indic languages and high-scale telephony.',
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    industry: 'Voice & NLP',
    functionTag: 'Autonomous Interactions',
    valueDriver: '95% Latency Reduction',
    technology: ['LLMs', 'Voice Ops', 'Whisper', 'Indic-NLP'],
    filterTag: 'conversational-ai',
  },
  {
    title: 'Financial Engineering & Revenue Operations',
    description: 'Liberating additional revenue through high-precision predictive modeling for marketing attribution and energy trading.',
    icon: <LineChart size={32} strokeWidth={1.5} />,
    industry: 'Finance & Trading',
    functionTag: 'Revenue Optimization',
    valueDriver: '9% Revenue Lift',
    technology: ['Predictive Modeling', 'Time Series', 'Python', 'Revenue Ops'],
    filterTag: 'finance',
  },
  {
    title: 'Operational Intelligence & Predictive Risk',
    description: 'Architecting resilient systems for supply chain optimization, clinical healthcare risk, and enterprise resource planning.',
    icon: <Globe2 size={32} strokeWidth={1.5} />,
    industry: 'Operations & Health',
    functionTag: 'Predictive Resource Mgt',
    valueDriver: '97% Forecast Accuracy',
    technology: ['TensorFlow', 'Supply Chain AI', 'Healthcare Tech', 'ERP'],
    filterTag: 'operations',
  },
];

export default function Portfolio() {
  const revealRef = useScrollReveal();
  return (
    <section id="portfolio" ref={revealRef} className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className={styles.label}>Our Work</div>
        <h2 className={styles.heading}>Case Study Library</h2>
        <p className={styles.sub}>STRUCTURED · IMPACT-ORIENTED · ENTERPRISE GRADE</p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={`/case-studies/category/${project.filterTag}`}
              className={styles.card}
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
              <span className={styles.cardArrow}>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

