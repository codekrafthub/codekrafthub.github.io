'use client';

import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Hero from '@/components/ck-caet/Hero/Hero';
import About from '@/components/ck-caet/About/About';
import Programs from '@/components/ck-caet/Programs/Programs';
import Contact from '@/components/ck-caet/Contact/Contact';
import Footer from '@/components/ck-caet/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CKCAETPage() {
  const aboutRef = useScrollReveal();
  const programsRef = useScrollReveal();
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
        
        <div ref={aboutRef as any} className="reveal">
          <About />
        </div>
        
        <div ref={programsRef as any} className="reveal">
          <Programs />
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
