import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    question: 'Do I need prior coding knowledge to join?',
    answer: 'While some courses are advanced, our foundational tracks are designed for absolute beginners. We start from the logic level and build up to complex architectures.',
  },
  {
    question: 'Is the training recognized by industries?',
    answer: 'Yes. CK-CAET is established under the H.D. Schaefer Memorial Foundation. Our certifications are backed by real-world project outcomes and recognized by our 30+ hiring partners.',
  },
  {
    question: 'How do live projects work?',
    answer: 'Unlike dummy projects, we involve students in actual client-facing production codebases from CodeKraft IT Services, allowing you to experience real deadlines and QA cycles.',
  },
  {
    question: 'Can I attend the sessions remotely?',
    answer: 'Yes, our training is hybrid. Most technical modules are available as interactive live-online sessions, while practical labs can be attended at our centers.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.labelRow}>
          <span className={styles.labelBar} aria-hidden />
          <span className={styles.label}>Support</span>
        </div>
        <h2 className={styles.heading}>Common Clarifications</h2>
        
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className={styles.qText}>
                  <HelpCircle size={18} className={styles.qIcon} />
                  {faq.question}
                </div>
                <ChevronDown size={20} className={styles.chevron} />
              </button>
              
              <div className={styles.answer}>
                <div className={styles.answerInner}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
