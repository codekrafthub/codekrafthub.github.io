'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Testimonials.module.css';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'vamshi-sai',
    name: 'T Vamshi Sai',
    role: 'Aspiring Full-Stack Software Engineer',
    image: '/testimonials/T_Vamshi_Sai.jpg',
    quote:
      'Completing the Launchpad Internship (Grade A - 81/100) gave me hands-on exposure to Python, Prompt Engineering, AI Image & Video Generation, and AI-powered Excel. Delivering elevator pitches and tackling live project assignments built true confidence in my technology and communication skills. Sincere thanks to CK-CAET team for creating such an impactful learning experience. These skills are the foundation for my journey toward becoming a Full-Stack Software Engineer.',
  },
  {
    id: 'nemani-chandra',
    name: 'Nemani Chandra Shekhar',
    role: 'AI & Prompt Engineering Intern',
    image: '/testimonials/Nemani_Chandra_Shekhar.jpg',
    quote:
      'In just 30 days, I explored the AI landscape deeply - learning how to structure high-performing prompts, refine output quality, and build real-world AI applications. This program sharpened my technical thinking and prepared me for industrial-level execution. The mentorship from the CodeKraft team gave us invaluable time and guidance. It’s the true backbone of my technical growth as I move forward into industry roles',
  },
  {
    id: 'madhu-rajput',
    name: 'Madhu Rajput',
    role: 'Python & Web Tech Trainee',
    image: '/testimonials/Madhu_Rajput.png',
    quote:
      'The 30-day Launchpad program transformed my programming confidence. I gained practical skills in Python, HTML/CSS, AI prompt engineering, and data handling with ChatGPT. Whenever I faced technical difficulties, the CodeKraft mentors guided me step-by-step to overcome them. Beyond code, it taught me team communication and professional work culture.',
  },
  {
    id: 'vinod-sahu',
    name: 'Vinod Sahu',
    role: 'AI Tools & Data Operations Intern',
    image: '/testimonials/Vinod_Sahu.png',
    quote:
      'Thank you to the mentors for dedicating their valuable time to this internship program. We mastered Python, advanced Excel, and practical AI tool prompting. Concepts that were previously unclear in our early career phase were made simple and intuitive. Learning how to leverage AI tools effectively will be immensely beneficial for our future engineering paths.',
  },
  {
    id: 'nilesh-bole',
    name: 'Nilesh Bole',
    role: 'AI Engineering & Analytics Trainee',
    image: '/testimonials/Nilesh_Bole.png',
    quote:
      'Huge thanks to CK-CAET team for sharing their deep industry knowledge and experience with us. Over these 30 days, we gained comprehensive training in AI engineering, MS Excel automation, and Python fundamentals. We built strong practical skills, worked on great projects, and made lasting memories. Extremely grateful to the entire CodeKraft team for organizing this!',
  },
];

// Duplicate list for infinite smooth loop
const INFINITE_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const revealRef = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (!isPaused && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const halfWidth = container.scrollWidth / 2;

        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else {
          container.scrollLeft += 0.5; // Slow, highly legible movement speed
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section id="caet-testimonials" ref={revealRef} className={`${styles.section} reveal`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <span className={styles.labelBar} aria-hidden />
            <span className={styles.label}>Student Voices &amp; Success Stories</span>
          </div>
          <h2 className={styles.title}>Real Feedback from Our Graduates</h2>
        </div>

        <div
          ref={scrollContainerRef}
          className={styles.rowContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {INFINITE_TESTIMONIALS.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.card}>
              <div className={styles.quoteWrapper}>
                <Quote size={18} className={styles.quoteMark} />
                <blockquote className={styles.quoteText}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.authorInfo}>
                  <h3 className={styles.authorName}>{item.name}</h3>
                  <span className={styles.authorRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
