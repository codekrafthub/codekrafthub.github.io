'use client';

import { Bot, Monitor, Sprout } from 'lucide-react';
import styles from './Services.module.css';

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const SERVICES: ServiceItem[] = [
  {
    title: 'AI & Automation',
    icon: <Bot size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Boost operational efficiency and unlock data insights with custom, AI-driven automation systems built for your workflows.',
    items: ['Process Automation', 'Conversational AI & Chatbots', 'Predictive Analytics & Forecasting', 'AI-powered Systems Integration'],
  },
  {
    title: 'Software Solutions',
    icon: <Monitor size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'From design to cloud deployment, we engineer scalable, high-performance web and mobile products tailormade for business growth.',
    items: ['Web & Mobile Applications', 'API & Integration Services', 'Cloud Architecture & Databases', 'AI/ML Consulting & Prototyping', 'Legacy System Modernization'],
  },
  {
    title: 'SME & Rural Tech',
    icon: <Sprout size={36} strokeWidth={1.5} className={styles.cardIcon} />,
    description: 'Affordable, reliable software systems designed to bring modern digital capabilities to local businesses and rural institutions.',
    items: ['Automated Billing & POS', 'Inventory & Attendance Systems', 'School & College ERP Systems', 'CSR-sponsored E-learning Platforms'],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>What We Offer</div>
        <h2 className={styles.heading}>IT &amp; Software Services</h2>
        <p className={styles.sub}>
          End-to-end technology solutions to help your business scale, automate, and drive innovation.
        </p>

        <div className={styles.panels}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardIconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.cardList}>
                {service.items.map((item) => (
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
