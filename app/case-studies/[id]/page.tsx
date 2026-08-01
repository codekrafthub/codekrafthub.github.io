import type { Metadata } from 'next';
import React from 'react';
import { 
  Cog, ImageIcon, ScanSearch, LineChart, HeartPulse, Globe2, Sparkles, MessageSquare 
} from 'lucide-react';
import CaseStudyClient from './CaseStudyClient';
import { CASE_STUDY_MAP, CaseStudy } from '@/lib/case-studies-data';

const ICON_MAP = {
  Cog: <Cog size={36} />,
  ImageIcon: <ImageIcon size={36} />,
  ScanSearch: <ScanSearch size={36} />,
  LineChart: <LineChart size={36} />,
  MessageSquare: <MessageSquare size={36} />,
  Globe2: <Globe2 size={36} />,
  HeartPulse: <HeartPulse size={36} />,
};

const DEFAULT_STUDY = {
  id: 'generic-study',
  category: 'operations' as const,
  title: 'Enterprise Solution Implementation',
  industry: 'Technology Services',
  desc: 'Custom engineered architecture utilizing modern AI and cloud-scale technology stack.',
  tech: ['Cloud Native', 'AI Integration', 'Custom Engineering'],
  iconName: 'Sparkles' as const,
  problem: 'Complex business processes requiring modernization and data-driven decision making.',
  solution: 'Custom engineered architecture utilizing modern AI and cloud-scale technology stack.',
  impact: [
    { value: '100%', label: 'Focus on Excellence' },
    { value: 'Ready', label: 'For Scale' },
  ],
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_MAP).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const rawStudy = CASE_STUDY_MAP[id] || DEFAULT_STUDY;

  const url = `https://codekrafthub.in/case-studies/${rawStudy.id}`;

  return {
    title: `${rawStudy.title} | CodeKraft Case Study`,
    description: rawStudy.problem,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${rawStudy.title} | CodeKraft Case Study`,
      description: rawStudy.problem,
      url: url,
      siteName: 'CodeKraft',
      images: [{ url: 'https://codekrafthub.in/codekraft_logo.png', width: 1200, height: 630 }],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${rawStudy.title} | CodeKraft Case Study`,
      description: rawStudy.problem,
      images: ['https://codekrafthub.in/codekraft_logo.png'],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rawStudy = CASE_STUDY_MAP[id] || DEFAULT_STUDY;

  const study = {
    ...rawStudy,
    icon: ICON_MAP[rawStudy.iconName as keyof typeof ICON_MAP] || <Sparkles size={36} />,
  };

  const allIds = Object.keys(CASE_STUDY_MAP);
  const relatedStudies = allIds
    .filter((sId) => sId !== id)
    .slice(0, 2)
    .map((sId) => ({
      id: CASE_STUDY_MAP[sId].id,
      title: CASE_STUDY_MAP[sId].title,
      industry: CASE_STUDY_MAP[sId].industry,
    }));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': study.title,
    'description': study.problem,
    'articleSection': study.industry,
    'author': {
      '@type': 'Organization',
      'name': 'CodeKraft',
      'url': 'https://codekrafthub.in',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CodeKraft',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://codekrafthub.in/codekraft_logo.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://codekrafthub.in/case-studies/${study.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CaseStudyClient study={study} relatedStudies={relatedStudies} />
    </>
  );
}

