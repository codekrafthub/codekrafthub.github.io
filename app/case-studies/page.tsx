// Server Component — no 'use client' directive.
// Next.js pre-renders this entire tree into static HTML at build time.
// All 13 case study cards are baked into the delivered HTML, making them
// visible to Google, B2B visitors, and anyone with JS disabled.
//
// Filtering is handled by CaseStudiesFilter (a tiny 'use client' island)
// which reads window.location.search after hydration — a progressive
// enhancement that never blocks pre-rendering.

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cog, ScanSearch, ImageIcon, ArrowRight,
  LineChart, MessageSquare, HeartPulse, Globe2,
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CaseStudiesFilter from './CaseStudiesFilter';
import styles from './case-studies.module.css';

export const metadata: Metadata = {
  title: 'Case Study Library | CodeKraft',
  description: 'Exploring how we solve high-stakes business challenges through Computer Vision, AI Automation, and Engineering Excellence.',
  alternates: {
    canonical: 'https://codekrafthub.in/case-studies',
  },
  openGraph: {
    title: 'Case Study Library | CodeKraft',
    description: 'Exploring how we solve high-stakes business challenges through Computer Vision, AI Automation, and Engineering Excellence.',
    url: 'https://codekrafthub.in/case-studies',
    siteName: 'CodeKraft',
    images: [{ url: 'https://codekrafthub.in/codekraft_logo.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Study Library | CodeKraft',
    description: 'Exploring how we solve high-stakes business challenges through Computer Vision, AI Automation, and Engineering Excellence.',
    images: ['https://codekrafthub.in/codekraft_logo.png'],
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

// ---------------------------------------------------------------------------
// Page — Server Component
// All card HTML is rendered here and baked into the static export.
// CaseStudiesFilter is a tiny client island that applies ?filter= after hydration.
// ---------------------------------------------------------------------------
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

          {/* Static Category Navigation Links */}
          <div className={styles.categoryNav}>
            <Link href="/case-studies" className={`${styles.categoryTab} ${styles.activeTab}`}>
              All ({CASE_STUDIES_LIST.length})
            </Link>
            <Link href="/case-studies/category/computer-vision" className={styles.categoryTab}>
              Computer Vision & Visual AI ({CASE_STUDIES_LIST.filter(s => s.category === 'computer-vision').length})
            </Link>
            <Link href="/case-studies/category/conversational-ai" className={styles.categoryTab}>
              Conversational AI & Voice ({CASE_STUDIES_LIST.filter(s => s.category === 'conversational-ai').length})
            </Link>
            <Link href="/case-studies/category/finance" className={styles.categoryTab}>
              Finance & Revenue Ops ({CASE_STUDIES_LIST.filter(s => s.category === 'finance').length})
            </Link>
            <Link href="/case-studies/category/operations" className={styles.categoryTab}>
              Operations & Health ({CASE_STUDIES_LIST.filter(s => s.category === 'operations').length})
            </Link>
          </div>
        </div>

        {/*
          CaseStudiesFilter mounts after hydration and reads window.location.search.
          It uses data-id / data-category / data-industry attributes on each card
          to show/hide them. The cards themselves are always in the static HTML.
        */}
        <CaseStudiesFilter />

        <div className={styles.grid} id="case-studies-grid">
          {CASE_STUDIES_LIST.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className={styles.card}
              data-id={study.id}
              data-category={study.category}
              data-industry={study.industry.toLowerCase()}
            >
              <div className={styles.cardIcon}>{ICON_MAP[study.iconName]}</div>
              <div className={styles.cardIndustry}>{study.industry}</div>
              <h2 className={styles.cardTitle}>{study.title}</h2>
              <p className={styles.cardDesc}>{study.desc}</p>

              <div className={styles.cardTech}>
                {study.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
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
