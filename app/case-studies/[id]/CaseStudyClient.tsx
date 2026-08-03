'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, AlertCircle, TrendingUp, Mail, User, Building, MessageSquare, Brain
} from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './CaseStudy.module.css';

interface CaseStudyDetails {
  id: string;
  category?: string;
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

interface RelatedStudy {
  id: string;
  title: string;
  industry: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  'computer-vision': 'Computer Vision & Visual AI',
  'conversational-ai': 'Conversational AI & Voice',
  'finance': 'Finance & Revenue Ops',
  'operations': 'Operations & Health',
};

export default function CaseStudyClient({
  study,
  relatedStudies = [],
}: {
  study: CaseStudyDetails;
  relatedStudies?: RelatedStudy[];
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will reach out shortly for a demo.');
  };

  const categorySlug = study.category || 'computer-vision';
  const categoryName = CATEGORY_NAMES[categorySlug] || 'Category Portfolio';
  const categoryUrl = `/case-studies/category/${categorySlug}`;

  return (
    <div className={styles.container}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.navHeader}>
            <Link href={categoryUrl} className={styles.backLink}>
              <ArrowLeft size={18} /> Back to {categoryName}
            </Link>

            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/case-studies" className={styles.breadcrumbLink}>
                Case Studies
              </Link>
              <ChevronRight size={14} className={styles.breadcrumbChevron} />
              <Link href={categoryUrl} className={styles.breadcrumbLinkActive}>
                {categoryName}
              </Link>
            </nav>
          </div>

          <Link href={categoryUrl} className={styles.industryTag} title={`View all ${categoryName} case studies`}>
            {study.industry} <span className={styles.tagCategorySub}>• {categoryName}</span>
          </Link>

          <h1 className={styles.title}>{study.title}</h1>
          <div className={styles.techStack}>
            {study.tech.map(t => (
              <span key={t} className={styles.techItem}>{t}</span>
            ))}
          </div>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.mainCol}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <AlertCircle className={styles.sectionIcon} size={28} />
                The Challenge
              </h2>
              <p className={styles.text}>{study.problem}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Brain className={styles.sectionIcon} size={28} />
                Our Solution
              </h2>
              <p className={styles.text}>{study.solution}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <TrendingUp className={styles.sectionIcon} size={28} />
                Business Impact
              </h2>
              <div className={styles.impactGrid}>
                {study.impact.map((item, index) => (
                  <div key={index} className={styles.impactCard}>
                    <span className={styles.impactValue}>{item.value}</span>
                    <span className={styles.impactLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Request a Deep Dive</h3>
              <p>Interested in seeing how this technology applies to your specific business case?</p>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <User size={18} />
                  <input type="text" placeholder="Full Name" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <Building size={18} />
                  <input type="text" placeholder="Company" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <Mail size={18} />
                  <input type="email" placeholder="Email Address" required className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <MessageSquare size={18} />
                  <textarea placeholder="Tell us about your project..." className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Request Demo
                </button>
              </form>
            </div>
          </aside>
        </div>

        {relatedStudies.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedHeading}>Related Case Studies</h2>
            <div className={styles.relatedGrid}>
              {relatedStudies.map((rel) => (
                <Link key={rel.id} href={`/case-studies/${rel.id}`} className={styles.relatedCard}>
                  <span className={styles.relatedIndustry}>{rel.industry}</span>
                  <h3 className={styles.relatedTitle}>{rel.title}</h3>
                  <span className={styles.relatedLink}>Read Case Study →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
