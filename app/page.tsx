'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  const aboutRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const portfolioRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useEffect(() => {
    // Prevent forced mobile system dark themes from breaking text gradients/colors
    const originalColorScheme = document.documentElement.style.colorScheme;
    document.documentElement.style.colorScheme = 'only light';
    return () => {
      document.documentElement.style.colorScheme = originalColorScheme;
    };
  }, []);

  function scrollToSection(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar />
      
      <main>
        <Hero
          onServicesClick={() => scrollToSection('#services')}
          onContactClick={() => scrollToSection('#contact')}
        />
        
        <div ref={aboutRef as any} className="reveal">
          <About />
        </div>
        
        <div ref={servicesRef as any} className="reveal">
          <Services />
        </div>
        
        <div ref={portfolioRef as any} className="reveal">
          <Portfolio />
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
