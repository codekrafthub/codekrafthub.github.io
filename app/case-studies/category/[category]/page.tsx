import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Cog, ScanSearch, ImageIcon, ArrowRight,
  LineChart, MessageSquare, HeartPulse, Globe2,
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../../case-studies.module.css';

interface CategoryMeta {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  metaTitle: string;
  metaDesc: string;
}

const CATEGORY_MAP: Record<string, CategoryMeta> = {
  'computer-vision': {
    slug: 'computer-vision',
    name: 'Computer Vision & Visual AI',
    headline: 'Computer Vision & Visual AI Case Studies',
    sub: 'Deploying high-accuracy visual intelligence for manufacturing quality, hospitality curation, and PropTech verification.',
    metaTitle: 'Computer Vision & Visual AI Case Studies | CodeKraft',
    metaDesc: 'Explore real-world case studies in Computer Vision, automated visual quality inspection, travel content curation, and semantic duplication verification.',
  },
  'conversational-ai': {
    slug: 'conversational-ai',
    name: 'Conversational AI & Voice',
    headline: 'Conversational AI & Voice Engineering Case Studies',
    sub: 'Specialized linguistic products, autonomous telephony platforms, and WhatsApp conversational commerce.',
    metaTitle: 'Conversational AI & Voice Engineering Case Studies | CodeKraft',
    metaDesc: 'Discover case studies in high-scale AI telephony, Indic speech-to-text processing, and omnichannel WhatsApp conversational automation.',
  },
  'finance': {
    slug: 'finance',
    name: 'Finance & Revenue Ops',
    headline: 'Financial Engineering & Revenue Operations Case Studies',
    sub: 'High-precision predictive modeling for marketing attribution, CPA optimization, and energy trading arbitrage.',
    metaTitle: 'Financial Engineering & Revenue Operations Case Studies | CodeKraft',
    metaDesc: 'Read case studies on AI-driven energy trading algorithms, global CPA revenue optimization, and time-series forecasting pipelines.',
  },
  'operations': {
    slug: 'operations',
    name: 'Operations & Health',
    headline: 'Operational Intelligence & Healthcare Case Studies',
    sub: 'Predictive risk classification, supply chain inventory forecasting, health insurance fraud detection, and ERP solutions.',
    metaTitle: 'Operational Intelligence & Healthcare Case Studies | CodeKraft',
    metaDesc: 'Browse case studies on clinical healthcare risk classification, predictive inventory optimization, insurance claims fraud detection, and enterprise search.',
  },
};

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
  },
];

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_MAP[category];

  if (!meta) {
    return {
      title: 'Case Studies | CodeKraft',
    };
  }

  const url = `https://codekrafthub.in/case-studies/category/${meta.slug}`;

  return {
    title: meta.metaTitle,
    description: meta.metaDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDesc,
      url: url,
      siteName: 'CodeKraft',
      images: [{ url: 'https://codekrafthub.in/codekraft_logo.png', width: 1200, height: 630 }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.metaDesc,
      images: ['https://codekrafthub.in/codekraft_logo.png'],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_MAP[category];

  if (!meta) {
    notFound();
  }

  const filteredStudies = CASE_STUDIES.filter((s) => s.category === category);

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.label}>Category Portfolio</span>
          <h1 className={styles.title}>{meta.headline}</h1>
          <p className={styles.sub}>{meta.sub}</p>

          {/* Static Category Navigation */}
          <div className={styles.categoryNav}>
            <Link href="/case-studies" className={styles.categoryTab}>
              All ({CASE_STUDIES.length})
            </Link>
            {Object.values(CATEGORY_MAP).map((cat) => {
              const count = CASE_STUDIES.filter((s) => s.category === cat.slug).length;
              const isActive = cat.slug === category;
              return (
                <Link
                  key={cat.slug}
                  href={`/case-studies/category/${cat.slug}`}
                  className={`${styles.categoryTab} ${isActive ? styles.activeTab : ''}`}
                >
                  {cat.name} ({count})
                </Link>
              );
            })}
          </div>
        </div>

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
                {study.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.readMore}>
                View Full Impact <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
