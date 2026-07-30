'use client';

import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Hero from '@/components/ck-caet/Hero/Hero';
import About from '@/components/ck-caet/About/About';
import Programs from '@/components/ck-caet/Programs/Programs';
import SuccessComparison from '@/components/ck-caet/Comparison/Comparison';
import Roadmap from '@/components/ck-caet/Roadmap/Roadmap';
import TechMosaic from '@/components/ck-caet/TechMosaic/TechMosaic';
import FAQ from '@/components/ck-caet/FAQ/FAQ';
import Contact from '@/components/ck-caet/Contact/Contact';
import Footer from '@/components/ck-caet/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

const TRUST_ITEMS = [
  { value: '500+', label: 'Students Trained' },
  { value: '30+',  label: 'Hiring Partners' },
  { value: '20+',  label: 'Live Projects' },
  { value: '12+',  label: 'Years of Experience' },
  { value: '100%', label: 'Practical Curriculum' },
];

export default function CKCAETPage() {
  const aboutRef = useScrollReveal();
  const comparisonRef = useScrollReveal();
  const programsRef = useScrollReveal();
  const techRef = useScrollReveal();
  const roadmapRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const contactRef = useScrollReveal();

  function scrollToSection(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero
          onProgramsClick={() => scrollToSection('#caet-programs')}
          onContactClick={() => scrollToSection('#caet-contact')}
        />

        {/* Dark trust band between Hero and About */}
        <div className={styles.trustBand}>
          <div className={styles.trustInner}>
            {TRUST_ITEMS.map(({ value, label }, i) => (
              <div key={label} className={styles.trustItem}>
                {i > 0 && <div className={styles.trustDivider} aria-hidden />}
                <span className={styles.trustValue}>{value}</span>
                <span className={styles.trustLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={aboutRef as any} className="reveal">
          <About />
        </div>

        <div ref={comparisonRef as any} className="reveal">
          <SuccessComparison />
        </div>

        <div ref={programsRef as any} className="reveal">
          <Programs />
        </div>

        <div ref={techRef as any} className="reveal">
          <TechMosaic />
        </div>

        <div ref={roadmapRef as any} className="reveal">
          <Roadmap />
        </div>

        <div ref={faqRef as any} className="reveal">
          <FAQ />
        </div>

        <div ref={contactRef as any} className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
