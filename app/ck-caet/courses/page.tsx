import type { Metadata } from 'next';
import { Users, Code, Layout, GraduationCap, Cpu, Terminal, Sparkles, Binary, Rocket } from 'lucide-react';
import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Footer from '@/components/ck-caet/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import styles from './courses.module.css';

export const metadata: Metadata = {
  title: 'CK-CAET | Programming Courses',
  description: 'Master Python and C with our industry-led programming courses. Build a strong foundation in systems and AI.',
  alternates: {
    canonical: 'https://codekrafthub.in/ck-caet/courses',
  },
  openGraph: {
    title: 'CK-CAET | Programming Courses',
    description: 'Master Python and C with our industry-led programming courses. Build a strong foundation in systems and AI.',
    url: 'https://codekrafthub.in/ck-caet/courses',
    siteName: 'CK-CAET',
    images: [{ url: 'https://codekrafthub.in/ck_caet_hero_new.png', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CK-CAET | Programming Courses',
    description: 'Master Python and C with our industry-led programming courses. Build a strong foundation in systems and AI.',
    images: ['https://codekrafthub.in/ck_caet_hero_new.png'],
  },
};


const COURSES = [
  {
    id: 'python',
    badge: 'Technical Course',
    title: 'Python Programming',
    subtitle: 'Beginner to Intermediate',
    tagline: 'Versatile language for web, data science, and AI',
    description: 'Master syntax, data structures, functions, and powerful libraries to build real-world applications and automation scripts.',
    features: ['Duration: 8 Weeks', '4+ Hands-on Projects', 'Personalized Mentorship', 'AI & Automation Focus'],
    outcomes: ['Automation Scripts Portfolio', 'AI & Data Science Readiness', 'Completion Certificate', 'Strong Python Foundation'],
    color: '#3BB1E6',
    icon: <Terminal size={32} strokeWidth={1.5} />
  },
  {
    id: 'c-lang',
    badge: 'Technical Course',
    title: 'C Programming',
    subtitle: 'The Foundational System Language',
    tagline: 'Mother of all programming languages',
    description: 'Master the fundamentals of logic, direct memory control, and system architecture through highly efficient low-level coding.',
    features: ['Duration: 6 Weeks', '3+ Core Projects', 'Memory Management', 'Data Structures Mastery'],
    outcomes: ['Systems-Level Thinking', 'Pointer & Memory Mastery', 'Completion Certificate', 'DSA Foundation'],
    color: '#0088ff',
    icon: <Cpu size={32} strokeWidth={1.5} />
  },
  {
    id: 'launchpad',
    badge: 'Flagship Program',
    title: 'Launchpad',
    subtitle: '30-Day AI & Digital Skills Bootcamp',
    tagline: 'From digitally unaware to confidently employable',
    description: "CK-CAET's flagship program for any college student. Zero coding background required. Master AI tools, Python, web design, Excel, and career skills.",
    features: ['Duration: 30 Days', 'AI Tools & Prompt Engineering', 'Python + Web Design + Excel', 'Resume Building & Interview Prep'],
    outcomes: ['Digital Portfolio', 'Merit Certificate', 'Live Project Experience', 'Job-Ready Resume'],
    color: '#f59e0b',
    icon: <Rocket size={32} strokeWidth={1.5} />
  }
];

export default function CoursesPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'CK-CAET Technical Training & Programming Courses',
    'itemListElement': COURSES.map((course, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Course',
        'name': course.title,
        'description': course.description,
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'CK-CAET - CodeKraft Centre for Advanced Emerging Technologies',
          'url': 'https://codekrafthub.in/ck-caet'
        },
        'hasCourseInstance': {
          '@type': 'CourseInstance',
          'courseMode': 'Online',
          'duration': course.features.find(f => f.startsWith('Duration:'))?.replace('Duration: ', '') || 'Flexible'
        }
      }
    }))
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroLayout}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>CK-CAET <span className={styles.accent}>Technical Training</span></h1>
              <p className={styles.subtitle}>
                Comprehensive programming courses designed to build a strong technical foundation through hands-on practice and real-world application.
              </p>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.scene}>
                <div className={styles.coreElement}>
                  <Binary className={styles.binaryIcon} size={64} />
                  <div className={styles.dataRing}></div>
                  <div className={styles.particleField}>
                    <div className={styles.particle} style={{ '--i': 1 } as any}></div>
                    <div className={styles.particle} style={{ '--i': 2 } as any}></div>
                    <div className={styles.particle} style={{ '--i': 3 } as any}></div>
                  </div>
                </div>
                <div className={styles.floatingCourseInfo} style={{ top: '-10%', right: '0%' }}>
                  <Sparkles size={14} className={styles.sparkle} />
                  <span>Industry Led</span>
                </div>
                <div className={styles.floatingCourseInfo} style={{ bottom: '10%', left: '-5%' }}>
                  <Users size={14} />
                  <span>500+ Students Trained</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.coursesGrid}>
          {COURSES.map((course) => (
            <div key={course.id} className={styles.courseCard} style={{ '--accent-color': course.color } as any}>
              <div className={styles.cardHeader}>
                <div className={styles.headerTop}>
                  <div className={styles.courseBadge}>{course.badge}</div>
                  <div className={styles.langIcon}>{course.icon}</div>
                </div>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseSubtitle}>{course.subtitle}</p>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.tagline}>{course.tagline}</p>
                <p className={styles.description}>{course.description}</p>
                
                <div className={styles.featureGrid}>
                  {course.features.map((feature) => (
                    <div key={feature} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      {feature}
                    </div>
                  ))}
                </div>

                {'outcomes' in course && course.outcomes && (
                  <div className={styles.outcomesBlock}>
                    <p className={styles.outcomesLabel}>Walk Away With</p>
                    <div className={styles.featureGrid}>
                      {(course.outcomes as string[]).map((o) => (
                        <div key={o} className={styles.featureItem}>
                          <span className={`${styles.featureDot} ${styles.featureDotGold}`} />
                          {o}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.cardFooter}>
                <a href="/ck-caet#caet-contact" className={styles.enrollBtn}>
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.benefits}>
          <div className={styles.benefitItem}>
            <div className={`${styles.benefitIconWrapper} ${styles.pulseAnim}`}>
              <Users size={32} strokeWidth={1.5} />
            </div>
            <h3>Industry Experienced Instructors</h3>
          </div>
          <div className={styles.benefitItem}>
            <div className={`${styles.benefitIconWrapper} ${styles.typeAnim}`}>
              <Code size={32} strokeWidth={1.5} />
            </div>
            <h3>Hands-on Practical Training</h3>
          </div>
          <div className={styles.benefitItem}>
            <div className={`${styles.benefitIconWrapper} ${styles.floatAnim}`}>
              <Layout size={32} strokeWidth={1.5} />
            </div>
            <h3>Real-world Project Experience</h3>
          </div>
          <div className={styles.benefitItem}>
            <div className={`${styles.benefitIconWrapper} ${styles.shineAnim}`}>
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            <h3>Industry Certification</h3>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
