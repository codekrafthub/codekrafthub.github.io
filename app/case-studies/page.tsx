'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Cog, ScanSearch, Image as ImageIcon, ArrowRight, LineChart, MessageSquare, HeartPulse, Globe2 } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './case-studies.module.css';

const CASE_STUDIES = [
  {
    id: 'industrial-vision',
    category: 'computer-vision',
    title: 'Automated Quality Inspection for Commercial Automotive Manufacturing',
    industry: 'Manufacturing & Industrial',
    desc: 'Transforming manual assembly line inspection for a leading multi-national commercial vehicle manufacturer using deep learning quality inspection.',
    icon: <Cog size={36} />,
    tech: ['PyTorch', 'CNN', 'Transfer Learning', 'Edge AI'],
  },
  {
    id: 'hospitality-visual-intelligence',
    category: 'computer-vision',
    title: 'Multi-modal AI for Scaleable Travel Content Curation',
    industry: 'Leisure & Hospitality',
    desc: 'Leveraging Multi-modal LLMs to automate aesthetic scoring and gallery optimization for high-traffic travel portals.',
    icon: <ImageIcon size={36} />,
    tech: ['Gemini 1.5 Pro', 'NIMA', 'Vision-Language Models', 'Python'],
  },
  {
    id: 'semantic-identity-verification',
    category: 'computer-vision',
    title: 'Automated Identity & Duplicate Verification in Global Property Inventories',
    industry: 'PropTech & Real Estate',
    desc: 'Automating the final verification funnel for property listings by replacing manual visual inspection with targeted semantic duplication checks.',
    icon: <ScanSearch size={36} />,
    tech: ['Vector Embeddings', 'CLIP', 'Milvus', 'Metadata Matching'],
  },
  {
    id: 'energy-trading',
    category: 'finance',
    title: 'AI-Driven Revenue Optimization in Energy Trading',
    industry: 'Energy & Trading',
    desc: 'Architecting high-frequency trading algorithms to identify arbitrage opportunities and maximize profits within the UK electricity market.',
    icon: <LineChart size={36} />,
    tech: ['Python', 'ML', 'Time Series', 'Predictive Analytics'],
  },
  {
    id: 'cpa-revenue-optimization',
    category: 'finance',
    title: 'Precision Predictive Modeling for Global Revenue Optimization',
    industry: 'TravelTech & Finance',
    desc: 'Engineering robust forecasting pipelines to predict realized revenue and stabilize attribution signals across global marketing channels.',
    icon: <LineChart size={36} />,
    tech: ['Predictive Modeling', 'Revenue Optimization', 'Revenue Operations', 'Python'],
  },
  {
    id: 'enterprise-telephony',
    category: 'conversational-ai',
    title: 'Enterprise AI Telephony & Autonomous Voice Engineering',
    industry: 'Customer Support & BPO',
    desc: 'Architecting high-scale AI voice platforms with 95% STT latency reduction and real-time IVR navigation for global operations.',
    icon: <Cog size={36} />,
    tech: ['LiveKit', 'GPT-4', 'STT/TTS', 'MongoDB'],
  },
  {
    id: 'alfaaz-ai',
    category: 'conversational-ai',
    title: 'Alfaaz: Specialized Multilingual Speech-to-Text for Indic Languages',
    industry: 'Media & EdTech',
    desc: 'Fine-tuning open-source models for Hindi, Urdu, and Hinglish with Devanagari post-processing and sentiment analysis.',
    icon: <MessageSquare size={36} />,
    tech: ['Whisper', 'Fine-tuning', 'Python', 'React'],
  },
  {
    id: 'whatsapp-chatbots',
    category: 'conversational-ai',
    title: 'Omnichannel Conversational Commerce & Service Automation',
    industry: 'Retail & Healthcare',
    desc: 'Deploying intelligent WhatsApp chatbots for hospitals, e-commerce, and restaurants to automate end-to-end user journeys.',
    icon: <Globe2 size={36} />,
    tech: ['WhatsApp API', 'LLMs', 'Node.js', 'Automated Workflows'],
  },
  {
    id: 'healthcare-risk',
    category: 'operations',
    title: 'Applied Data Science for Clinical Healthcare Risk',
    industry: 'Healthcare',
    desc: 'Created an ML risk classification system analyzing blood pressure metrics for early clinical risk detection.',
    icon: <HeartPulse size={36} />,
    tech: ['Healthcare Tech', 'ML', 'Data Science'],
  },
  {
    id: 'health-insurance-fraud',
    category: 'operations',
    title: 'Predictive Analytics for Health Insurance Fraud & Claims Pre-authorization',
    industry: 'Health Insurance & FinTech',
    desc: 'Architecting an integrated API-based engine to predict fraud probability and streamline pre-authorization decisions for insurance providers.',
    icon: <LineChart size={36} />,
    tech: ['H2O.ai', 'REST APIs', 'ML Classification', 'Secure Diagnostics'],
  },
  {
    id: 'inventory-optimization',
    category: 'operations',
    title: 'Resilient Supply Chain Architecture: Predictive Inventory Optimization',
    industry: 'Logistics & Supply Chain',
    desc: 'Designing automated multi-echelon forecasting systems using hybrid deep learning architectures for global supply chain resilience.',
    icon: <Cog size={36} />,
    tech: ['TensorFlow', 'Random Forests', 'LSTM RNNs', 'Supply Chain AI'],
  },
  {
    id: 'global-data-search',
    category: 'operations',
    title: 'High-Scale Search Infrastructure & Global Data Aggregation',
    industry: 'Data Strategy & Search',
    desc: 'Scaling distributed search infrastructure to index and analyze billions of global data points for real-time intelligence discovery.',
    icon: <ScanSearch size={36} />,
    tech: ['Search Infrastructure', 'Distributed Systems', 'Data Mining', 'Python'],
  },
  {
    id: 'erp-solutions',
    category: 'operations',
    title: 'Digital ERP Transformation for Educational Impact',
    industry: 'Education & Governance',
    desc: 'Designed custom management and ERP solutions to streamline billing, attendance, and record keeping for local institutions.',
    icon: <Globe2 size={36} />,
    tech: ['Web Platforms', 'Custom Database Systems', 'ERP'],
  }
];

function CaseStudiesList() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  const filteredStudies = filter 
    ? CASE_STUDIES.filter(s => s.id === filter || s.category === filter || s.industry.toLowerCase().includes(filter.toLowerCase()))
    : CASE_STUDIES;

  return (
    <div className={styles.grid}>
      {filteredStudies.map((study) => (
        <Link 
          key={study.id} 
          href={`/case-studies/${study.id}`}
          className={styles.card}
        >
          <div className={styles.cardIcon}>{study.icon}</div>
          <div className={styles.cardIndustry}>{study.industry}</div>
          <h2 className={styles.cardTitle}>{study.title}</h2>
          <p className={styles.cardDesc}>{study.desc}</p>
          
          <div className={styles.cardTech}>
            {study.tech.map(t => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>

          <div className={styles.readMore}>
            View Full Impact <ArrowRight size={16} />
          </div>
        </Link>
      ))}
      {filteredStudies.length === 0 && (
        <div className={styles.noResults}>
          <p>No case studies found matching your criteria.</p>
          <Link href="/case-studies" className={styles.resetLink}>View All Case Studies</Link>
        </div>
      )}
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.label}>Success Stories</span>
          <h1 className={styles.title}>Case Study Library</h1>
          <p className={styles.sub}>
            Exploring how we solve high-stakes business challenges through 
            Computer Vision, AI Automation, and Engineering Excellence.
          </p>
        </div>

        <Suspense fallback={<div>Loading case studies...</div>}>
          <CaseStudiesList />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}



