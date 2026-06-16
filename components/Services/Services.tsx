'use client';

import { useState } from 'react';
import { GraduationCap, Laptop, Target, Factory, Building2, Bot, Monitor, Sprout } from 'lucide-react';
import styles from './Services.module.css';

interface AccordionItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

interface ServicePanel {
  panelTitle: string;
  accent: React.ReactNode;
  services: AccordionItem[];
}

const PANELS: ServicePanel[] = [
  {
    panelTitle: 'Academic Services',
    accent: <GraduationCap className={styles.accentIcon} />,
    services: [
      {
        title: 'Technical Training',
        icon: <Laptop size={20} strokeWidth={1.5} />,
        description: 'Master essential coding and data skills through practical, project-driven learning tailored for real-world applications.',
        items: ['Python, SQL, C, C++, Advanced Excel', 'Data Science & Visualization', 'Task Automation', 'Web Development'],
      },
      {
        title: 'Career Readiness',
        icon: <Target size={20} strokeWidth={1.5} />,
        description: 'We prepare students for industry placements. From resumes to LinkedIn and soft skills, we ensure complete career readiness.',
        items: ['Interview Prep', 'Soft Skills', 'Counselling', 'Study Abroad Guidance', 'Resume & LinkedIn building'],
      },
      {
        title: 'Industry Exposure',
        icon: <Factory size={20} strokeWidth={1.5} />,
        description: 'We connect academia with real industry problems to make students job-ready from day one.',
        items: ['Live Projects', 'Internships', 'Hackathons', 'Bootcamps', 'Expert Talks'],
      },
    ],
  },
  {
    panelTitle: 'Industry Services',
    accent: <Building2 className={styles.accentIcon} />,
    services: [
      {
        title: 'AI & Automation',
        icon: <Bot size={20} strokeWidth={1.5} />,
        description: 'We help businesses embrace AI. Our tailored AI-driven systems boost efficiency and unlock data-powered insights.',
        items: ['Process Automation', 'Chatbots', 'Predictive Analytics', 'AI-powered E-learning'],
      },
      {
        title: 'Software Solutions',
        icon: <Monitor size={20} strokeWidth={1.5} />,
        description: 'From concept to deployment, we build scalable web and mobile apps powered by AI/ML.',
        items: ['AI/ML Consulting', 'Web & Mobile Apps', 'API Development', 'Cloud & Database Systems', 'Digital Transformation'],
      },
      {
        title: 'SME & Rural Tech',
        icon: <Sprout size={20} strokeWidth={1.5} />,
        description: 'We empower small businesses and rural communities with affordable tech.',
        items: ['Automated Billing', 'Inventory & Attendance Systems', 'School/College ERP', 'CSR-driven E-learning Platforms'],
      },
    ],
  },
];

function AccordionPanel({ panel }: { panel: ServicePanel }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span>{panel.accent}</span>
        <h3>{panel.panelTitle}</h3>
      </div>
      <div className={styles.accordion}>
        {panel.services.map((svc, idx) => (
          <div key={svc.title} className={`${styles.item} ${open === idx ? styles.active : ''}`}>
            <button
              className={styles.trigger}
              aria-expanded={open === idx}
              onClick={() => setOpen(idx)}
            >
              <span className={styles.triggerIcon}>{svc.icon}</span>
              <span className={styles.triggerLabel}>{svc.title}</span>
              <span className={styles.chevron}>{open === idx ? '−' : '+'}</span>
            </button>
            <div className={styles.body} aria-hidden={open !== idx}>
              <p>{svc.description}</p>
              <ul>
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>What We Offer</div>
        <h2 className={styles.heading}>Our Services</h2>
        <p className={styles.sub}>
          Two worlds, one mission — training India&apos;s talent and powering India&apos;s businesses.
        </p>
        <div className={styles.panels}>
          {PANELS.map((panel) => (
            <AccordionPanel key={panel.panelTitle} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
