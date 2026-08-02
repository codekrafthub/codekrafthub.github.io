'use client';

import { Bot, Cpu, Monitor, SearchCode } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import FeatureCard from '@/components/ui/FeatureCard';
import styles from './Services.module.css';

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  cta?: { label: string; href: string };
}

const SERVICES: ServiceItem[] = [
  {
    title: 'Computer Vision & AI',
    icon: <SearchCode size={36} strokeWidth={1.5} />,
    description: 'We build high-performance visual intelligence systems for industrial, hospitality, and real-estate sectors.',
    items: ['Defect & Crack Detection', 'Semantic Search', 'Automated Image Curation', 'OCR & Document Intelligence'],
  },
  {
    title: 'AI & Automation',
    icon: <Bot size={36} strokeWidth={1.5} />,
    description: 'Boost operational efficiency and unlock data insights with custom, AI-driven automation systems built for your workflows.',
    items: ['Process Automation', 'Conversational AI & Chatbots', 'Predictive Analytics & Forecasting', 'AI-powered Systems Integration'],
  },
  {
    title: 'Software Solutions',
    icon: <Monitor size={36} strokeWidth={1.5} />,
    description: 'From design to cloud deployment, we engineer scalable, high-performance web and mobile products tailormade for business growth.',
    items: ['Web & Mobile Applications', 'API & Integration Services', 'Cloud Architecture & Databases', 'AI/ML Consulting & Prototyping', 'Legacy System Modernization'],
  },
];

export default function Services() {
  const revealRef = useScrollReveal();
  return (
    <section id="services" ref={revealRef} className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className={styles.flexHeader}>
          <div className={styles.textContent}>
            <div className={styles.label}>What We Offer</div>
            <h2 className={styles.heading}>IT &amp; Software Services</h2>
            <p className={styles.sub}>
              End-to-end technology solutions to help your business scale, automate, and drive innovation.
            </p>
          </div>

          <div className={styles.visualContainer} aria-hidden="true">
            <div className={styles.matrixBox}>
              <div className={styles.svcCoreIcon}>
                <Cpu size={52} strokeWidth={1.5} />
              </div>
              <div className={styles.matrixGrid} />
              <div className={styles.matrixRing} />
              <span className={styles.svcTag} style={{ top: '5%', right: '-5%' }}>Vision AI</span>
              <span className={`${styles.svcTag} ${styles.svcTagDelay}`} style={{ bottom: '10%', left: '-5%' }}>Automation</span>
            </div>
          </div>
        </div>

        <div className={styles.panels}>
          {SERVICES.map((service) => (
            <FeatureCard
              key={service.title}
              variant="default"
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              cta={service.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
