import type { Metadata } from 'next';
import { Orbit, BarChart2, TrendingUp } from 'lucide-react';
import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Footer from '@/components/ck-caet/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './internships.module.css';

export const metadata: Metadata = {
  title: 'CK-CAET | Corporate Internship Programs',
  description: 'Gain real industry experience through CK-CAET structured internships in Agentic AI and Data Analysis with Python.',
};

const INTERNSHIPS = [
  {
    id: 'agentic-ai',
    badge: 'Internship Program',
    title: 'Agentic AI Internship',
    subtitle: 'Guided Internship for Computer Science Students',
    tagline: 'Build real AI Agents — not just study them',
    description: 'A structured 30-hour internship where students go from foundations to a fully working AI Agent project. The first half covers focused teaching; the second half is guided independent project work under mentor review. 100% online with live sessions.',
    features: ['30 Hours (18 Teaching + 12 Project)', 'Live Online Sessions', 'CrewAI & LangGraph Stack', 'Python + Groq API'],
    outcomes: ['Working AI Agent Project', 'GitHub Portfolio Entry', 'Joint Internship Certificate', '2 Academic Credits'],
    color: '#0088ff',
    icon: <Orbit size={32} strokeWidth={1.5} />,
  },
  {
    id: 'data-analysis-basic',
    badge: 'Internship Program',
    title: 'Data Analysis with Python',
    subtitle: 'Foundational Track — For Junior Students',
    tagline: 'From raw data to real insights',
    description: 'A 30-day industry internship for students in their early semesters of CS, CS (AI/ML), or CS (AI/Data Science). Learn Python for data analysis, exploratory data analysis (EDA), and visualization — working on real projects under mentorship by CodeKraft founders, following industry Git workflows.',
    features: ['Duration: 30 Days', 'Python · Pandas · Matplotlib', 'Git & GitHub Workflow', 'Daily Standups & Sprints'],
    outcomes: ['GitHub Portfolio Project', 'EDA & Visualization Skills', 'Internship Certificate', 'Industry Workflow Exposure'],
    color: '#0088ff',
    icon: <BarChart2 size={32} strokeWidth={1.5} />,
  },
  {
    id: 'data-analysis-advanced',
    badge: 'Internship Program',
    title: 'Advanced Data Analysis with Python',
    subtitle: 'Advanced Track — For Senior Students',
    tagline: 'Production-grade analytics, real stakes',
    description: 'A 30-day advanced internship for final-year students. Goes beyond EDA into statistical modeling, advanced visualization, and ML-integrated pipelines — all built to industry standards with Git, daily stand-ups, and direct founder mentorship.',
    features: ['Duration: 30 Days', 'Statistical Modeling & ML', 'Real Industry Projects', 'Mentorship by Founders'],
    outcomes: ['Advanced Analytics Portfolio', 'Top Performer LoR', 'Internship Certificate', 'Production Pipeline Experience'],
    color: '#0088ff',
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
  },
];

export default function InternshipsPage() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.heroLabel}>Industry Experience</span>
          <h1 className={styles.heroTitle}>
            Corporate<br />
            <span className={styles.heroAccent}>Internship Programs</span>
          </h1>
          <p className={styles.heroSub}>
            Structured internships built around real projects, industry Git workflows, and direct
            mentorship by CodeKraft founders. Walk away with a portfolio, a certificate, and
            experience that employers can verify.
          </p>
        </section>

        <section className={styles.grid}>
          {INTERNSHIPS.map((program) => (
            <div
              key={program.id}
              className={styles.courseCard}
              style={{ '--accent-color': program.color } as React.CSSProperties}
            >
              <div className={styles.headerTop}>
                <div className={styles.courseBadge}>{program.badge}</div>
                <div className={styles.langIcon}>{program.icon}</div>
              </div>

              <h2 className={styles.courseTitle}>{program.title}</h2>
              <p className={styles.courseSubtitle}>{program.subtitle}</p>

              <p className={styles.tagline}>{program.tagline}</p>
              <p className={styles.description}>{program.description}</p>

              <div className={styles.featureGrid}>
                {program.features.map((f) => (
                  <div key={f} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    {f}
                  </div>
                ))}
              </div>

              <div className={styles.outcomesBlock}>
                <p className={styles.outcomesLabel}>Walk Away With</p>
                <div className={styles.featureGrid}>
                  {program.outcomes.map((o) => (
                    <div key={o} className={styles.featureItem}>
                      <span className={`${styles.featureDot} ${styles.featureDotGold}`} />
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a href="/ck-caet#caet-contact" className={styles.enrollBtn}>
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
