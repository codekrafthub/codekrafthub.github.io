import type { Metadata } from 'next';
import React from 'react';
import { 
  Cog, ImageIcon, ScanSearch, LineChart, HeartPulse, Globe2, Sparkles, MessageSquare 
} from 'lucide-react';
import CaseStudyClient from './CaseStudyClient';

interface CaseStudyDetails {
  id: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  tech: string[];
  problem: string;
  solution: string;
  impact: {
    value: string;
    label: string;
  }[];
}

const CASE_STUDY_DATA: Record<string, CaseStudyDetails> = {
  'industrial-vision': {
    id: 'industrial-vision',
    title: 'Automated Quality Inspection for Commercial Automotive Manufacturing',
    industry: 'Manufacturing & Industrial',
    icon: <Cog />,
    tech: ['PyTorch', 'ResNet-50', 'Edge Computing', 'TensorRT'],
    problem: 'A leading multi-national vehicle manufacturer relied on manual visual inspection for 500+ critical engine parts. High fatigue led to a 5% defect leakage, causing expensive assembly line halts and aftermarket recalls.',
    solution: 'We deployed a high-speed Computer Vision system at the edge. Using custom-trained Deep Learning models, we achieved real-time detection of micro-cracks and misalignment with sub-millisecond latency.',
    impact: [
      { value: '99.8%', label: 'Detection Accuracy' },
      { value: '40%', label: 'Reduction in Rework Costs' },
      { value: 'Zero', label: 'Manual Fatigue Errors' }
    ]
  },
  'hospitality-visual-intelligence': {
    id: 'hospitality-visual-intelligence',
    title: 'Multi-modal AI for Scaleable Travel Content Curation',
    industry: 'Leisure & Hospitality',
    icon: <ImageIcon />,
    tech: ['Gemini 1.5 Pro', 'Python', 'Vector DBs', 'Scalable Microservices'],
    problem: 'Global hotel booking portals process millions of user-uploaded photos daily. Manually scoring these for aesthetic quality, lighting, and brand compliance took weeks, delaying property launches.',
    solution: 'Developed an automated pipeline using Vision-Language Models (VLMs). The system scores images based on "vacation appeal," brightness, and composition, auto-optimizing gallery ordering.',
    impact: [
      { value: '95%', label: 'Automated Approval Rate' },
      { value: '2s', label: 'Processing Time per Album' },
      { value: '18%', label: 'Lift in User Engagement' }
    ]
  },
  'semantic-identity-verification': {
    id: 'semantic-identity-verification',
    title: 'Automated Identity & Duplicate Verification in Global Property Inventories',
    industry: 'PropTech & Real Estate',
    icon: <ScanSearch />,
    tech: ['CLIP Embeddings', 'Milvus', 'Python', 'Metadata Processing'],
    problem: 'Property inventory platforms faced significant identity fraud where users uploaded stock photos or already listed property shots. While probable matches were identified via metadata (name, location, attributes), the final verification required a slow, manual human inspection to confirm visual duplication.',
    solution: 'We implemented a Targeted Semantic Visual Verification stage. By applying CLIP Embeddings at the final verification step for probable hotel matches, we automated the visual cross-referencing process, eliminating the need for human intervention and instantly flagging verified duplicates.',
    impact: [
      { value: '100%', label: 'Visual Inspection Automation' },
      { value: 'Instant', label: 'Verification Speed' },
      { value: '92%', label: 'Fraud Detection Accuracy' }
    ]
  },
  'energy-trading': {
    id: 'energy-trading',
    title: 'AI-Driven Revenue Optimization in Energy Trading',
    industry: 'Energy & Trading',
    icon: <LineChart />,
    tech: ['Python', 'ML', 'Time Series', 'Predictive Analytics'],
    problem: "The UK day-ahead electricity market presents high-risk volatility between auction windows, requiring sub-marginal timing for non-physical financial trades to hedge against price spikes.",
    solution: "Architected a high-frequency trading algorithm that leverages ensemble ML models and time-series analysis to identify arbitrage opportunities across the grid. The system automates trade execution by correlating weather patterns, grid load, and historical pricing cycles.",
    impact: [
      { value: '22%', label: 'Profit Margin Increase' },
      { value: '85%', label: 'Prediction Confidence' },
      { value: 'Real-time', label: 'Market Signals' }
    ]
  },
  'cpa-revenue-optimization': {
    id: 'cpa-revenue-optimization',
    title: 'Precision Predictive Modeling for Global Revenue Optimization',
    industry: 'TravelTech & Finance',
    icon: <LineChart />,
    tech: ['Predictive Modeling', 'Revenue Optimization', 'Revenue Operations', 'Python'],
    problem: 'Global travel platforms struggle with high variance in attributed revenue due to booking cancellations and attribution window latency, leading to inefficient marketing spend.',
    solution: 'Engineered a robust forecasting pipeline to predict final realized revenue with extreme precision. The system integrates deep market-level behavioral features to stabilize attribution signals and optimize global budget allocation strategies.',
    impact: [
      { value: '0.23%', label: 'Global Error Rate' },
      { value: '8%', label: 'MAPE' },
      { value: '9%', label: 'Additional Revenue' }
    ]
  },
  'enterprise-telephony': {
    id: 'enterprise-telephony',
    title: 'Enterprise AI Telephony & Autonomous Voice Engineering',
    industry: 'Customer Support & BPO',
    icon: <Cog />,
    tech: ['Voice Engineering', 'LLMs', 'MongoDB', 'Python'],
    problem: 'Enterprises managing massive call volumes faced high operational costs, slow IVR navigation, and inconsistent human performance leading to significant customer drop-offs and data latency.',
    solution: 'Architected a robust AI telephony platform featuring campaign management and real-time behavioral analytics. We engineered an intelligent Voice Bot system to handle fluid IVR navigation and mission-critical speech processing at scale.',
    impact: [
      { value: '95%', label: 'Manual Effort Reduction' },
      { value: '64%', label: 'Speech Accuracy Lift' },
      { value: '95%', label: 'STT Latency Reduction' }
    ]
  },
  'alfaaz-ai': {
    id: 'alfaaz-ai',
    title: 'Alfaaz: Specialized Multilingual STT for Indic Languages',
    industry: 'Media & EdTech',
    icon: <MessageSquare />,
    tech: ['Neural Transcription', 'Post-processing', 'NLP', 'React'],
    problem: 'Generic speech-to-text models struggle with Hindi, Urdu, and Hinglish due to accent variations and Devanagari script complexities, making them unusable for professional media transcription.',
    solution: 'Engineered a specialized transcription engine featuring proprietary post-processing for Devanagari script correction and automated sentiment analysis for multi-lingual and Hinglish workflows.',
    impact: [
      { value: 'High', label: 'Indic Script Accuracy' },
      { value: '27%', label: 'Cost Savings vs Cloud APIs' },
      { value: 'Real-time', label: 'Transcription Speed' }
    ]
  },
  'whatsapp-chatbots': {
    id: 'whatsapp-chatbots',
    title: 'Omnichannel Conversational Commerce & Service Automation',
    industry: 'Retail & Healthcare',
    icon: <Globe2 />,
    tech: ['WhatsApp API', 'LLMs', 'Node.js', 'Workflow Automation'],
    problem: 'Businesses in healthcare, hospitality, and retail lacked a scalable way to handle high-frequency customer queries like appointment booking and order tracking on platforms where customers are most active.',
    solution: 'Engineered intelligent omnichannel chatbots using the WhatsApp Business API and LLMs to automate end-to-end user journeys for hospitals, e-commerce, and restaurant chains.',
    impact: [
      { value: '24/7', label: 'Autonomous Support' },
      { value: '70%', label: 'Query Automation' },
      { value: 'Zero', label: 'Human Handoff Lag' }
    ]
  },
  'healthcare-risk': {
    id: 'healthcare-risk',
    title: 'Applied Data Science for Clinical Healthcare Risk',
    industry: 'Healthcare',
    icon: <HeartPulse />,
    tech: ['Healthcare Tech', 'ML', 'Data Science'],
    problem: 'Hospitals needed a way to identify high-risk patients based on varying blood pressure and biometric metrics before they reached a critical state.',
    solution: 'Designed an ML-based risk classification system that analyzes historical health data to predict patient deterioration 6 hours in advance.',
    impact: [
      { value: '94%', label: 'Risk Sensitivity' },
      { value: '6hrs', label: 'Early Warning Time' },
      { value: '400k+', label: 'Metric Samples Analyzed' }
    ]
  },
  'health-insurance-fraud': {
    id: 'health-insurance-fraud',
    title: 'Predictive Analytics for Health Insurance Fraud & Claims Pre-authorization',
    industry: 'Health Insurance & FinTech',
    icon: <LineChart />,
    tech: ['H2O.ai', 'REST APIs', 'ML Classification', 'Secure Diagnostics'],
    problem: 'Health insurance providers faced significant financial leakage due to undetected fraudulent claims and operational bottlenecks in the manual pre-authorization of medical procedures. An integrated solution was required to interface with global cloud AI infrastructure for real-time risk assessment.',
    solution: 'Engineered a secure, API-driven diagnostic engine utilizing high-performance machine learning algorithms on the H2O platform. The system facilitates seamless integration between claims data and predictive models to automate decision support for pre-authorization workflows.',
    impact: [
      { value: '0.85', label: 'F-1 Fraud Score' },
      { value: 'Real-time', label: 'Fraud Scoring' },
      { value: 'Instant', label: 'Pre-auth Support' }
    ]
  },
  'inventory-optimization': {
    id: 'inventory-optimization',
    title: 'Resilient Supply Chain Architecture: Predictive Inventory Optimization',
    industry: 'Logistics & Supply Chain',
    icon: <Cog />,
    tech: ['TensorFlow', 'Random Forests', 'LSTM RNNs', 'Supply Chain AI'],
    problem: 'Managing complex global inventories requires a balance between capital efficiency and service availability. Traditional forecasting failed to account for non-linear demand spikes and seasonal volatility.',
    solution: 'Developed a multi-echelon inventory optimization framework using high-dimensional Random Forests and LSTM Recurrent Neural Networks. The system integrates real-time demand signals with historical lead-time volatility to dynamically recalibrate safety stock levels across global distribution centers.',
    impact: [
      { value: '0.97', label: 'SMAPE Accuracy' },
      { value: '85%', label: 'Service Level' },
      { value: 'Automated', label: 'Order Demand' }
    ]
  },
  'global-data-search': {
    id: 'global-data-search',
    title: 'High-Scale Search Infrastructure & Global Data Aggregation',
    industry: 'Data Strategy & Search',
    icon: <ScanSearch />,
    tech: ['Search Infrastructure', 'Distributed Systems', 'Data Mining', 'Python'],
    problem: 'Manual public data harvesting and market intelligence gathering are hindered by rate-limiting, data fragmentation, and the inability to process cross-lingual metadata in real-time.',
    solution: 'Engineered a massively parallel distributed crawler and indexing engine using a microservices architecture. The platform utilizes advanced semantic parsing to extract structured insights from unstructured global web and social data streams.',
    impact: [
      { value: '1.2B+', label: 'Indexed Data Points' },
      { value: '250ms', label: 'Search Latency' },
      { value: '10x', label: 'Discovery Speed' }
    ]
  },
  'erp-solutions': {
    id: 'erp-solutions',
    title: 'Digital ERP Transformation for Educational Impact',
    industry: 'Education & Governance',
    icon: <Globe2 />,
    tech: ['Next.js', 'PostgreSQL', 'Custom ERP Architecture'],
    problem: 'Local educational institutions were struggling with fragmented paper-based records, manual billing, and poor attendance tracking.',
    solution: 'Engineered a unified digital management system that automates billing, tracks student attendance, and provides centralized record-keeping for staff.',
    impact: [
      { value: '100%', label: 'Digital Conversion' },
      { value: 'Zero', label: 'Billing Discrepancies' },
      { value: '60%', label: 'Staff Admin reduction' }
    ]
  }
};

const DEFAULT_STUDY: CaseStudyDetails = {
  id: 'generic-study',
  title: 'Enterprise Solution Implementation',
  industry: 'Technology Services',
  icon: <Sparkles />,
  tech: ['Cloud Native', 'AI Integration', 'Custom Engineering'],
  problem: 'Complex business processes requiring modernization and data-driven decision making.',
  solution: 'Custom engineered architecture utilizing modern AI and cloud-scale technology stack.',
  impact: [
    { value: '100%', label: 'Focus on Excellence' },
    { value: 'Ready', label: 'For Scale' }
  ]
};

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_DATA).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const study = CASE_STUDY_DATA[id] || DEFAULT_STUDY;

  const url = `https://codekrafthub.in/case-studies/${study.id}`;

  return {
    title: `${study.title} | CodeKraft Case Study`,
    description: study.problem,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${study.title} | CodeKraft Case Study`,
      description: study.problem,
      url: url,
      siteName: 'CodeKraft',
      images: [{ url: 'https://codekrafthub.in/codekraft_logo.png', width: 1200, height: 630 }],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | CodeKraft Case Study`,
      description: study.problem,
      images: ['https://codekrafthub.in/codekraft_logo.png'],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = CASE_STUDY_DATA[id] || DEFAULT_STUDY;

  const allIds = Object.keys(CASE_STUDY_DATA);
  const relatedStudies = allIds
    .filter((sId) => sId !== id)
    .slice(0, 2)
    .map((sId) => ({
      id: CASE_STUDY_DATA[sId].id,
      title: CASE_STUDY_DATA[sId].title,
      industry: CASE_STUDY_DATA[sId].industry,
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
      'url': 'https://codekrafthub.in'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CodeKraft',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://codekrafthub.in/codekraft_logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://codekrafthub.in/case-studies/${study.id}`
    }
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

