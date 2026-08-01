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

import { CASE_STUDIES_LIST } from '@/lib/case-studies-data';

const ICON_MAP = {
  Cog: <Cog size={36} />,
  ImageIcon: <ImageIcon size={36} />,
  ScanSearch: <ScanSearch size={36} />,
  LineChart: <LineChart size={36} />,
  MessageSquare: <MessageSquare size={36} />,
  Globe2: <Globe2 size={36} />,
  HeartPulse: <HeartPulse size={36} />,
};

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

  const filteredStudies = CASE_STUDIES_LIST.filter((s) => s.category === category);

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
              All ({CASE_STUDIES_LIST.length})
            </Link>
            {Object.values(CATEGORY_MAP).map((cat) => {
              const count = CASE_STUDIES_LIST.filter((s) => s.category === cat.slug).length;
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
              <div className={styles.cardIcon}>{ICON_MAP[study.iconName]}</div>
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
