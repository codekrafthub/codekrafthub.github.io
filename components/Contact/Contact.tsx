'use client';

import { useState } from 'react';
import { Mail, Phone, Briefcase, Calendar, Camera } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  function loadCalendly() {
    setCalendlyLoaded(true);
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Get In Touch</div>
        <h2 className={styles.heading}>Let&apos;s Build Something Together</h2>
        <p className={styles.sub}>
          Whether you&apos;re a business looking to automate or a student ready to launch your career — we&apos;re here.
        </p>

        <div className={styles.grid}>
          {/* Contact info */}
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><Mail size={24} strokeWidth={1.5} /></span>
              <div>
                <div className={styles.infoLabel}>Email us</div>
                <a href="mailto:codekraft.hub@gmail.com" className={styles.infoLink}>
                  codekraft.hub@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><Phone size={24} strokeWidth={1.5} /></span>
              <div>
                <div className={styles.infoLabel}>Call us</div>
                <a href="tel:+917898378933" className={styles.infoLink}>
                  +91 78983 78933
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><Briefcase size={24} strokeWidth={1.5} /></span>
              <div>
                <div className={styles.infoLabel}>LinkedIn</div>
                <a
                  href="https://www.linkedin.com/company/codekrafthub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  CodeKraftHub
                </a>
              </div>
            </div>

            <div className={styles.quickActions}>
              <a href="mailto:codekraft.hub@gmail.com" className={styles.actionBtn}>
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/company/codekrafthub/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.outline}`}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Calendly */}
          <div className={styles.calendlyCard}>
            {!calendlyLoaded ? (
              <div className={styles.calendlyPlaceholder}>
                <div className={styles.calIcon}><Calendar size={32} strokeWidth={1.5} /></div>
                <p className={styles.calHeading}>Book a Free 30-min Call</p>
                <p className={styles.calSub}>
                  Discuss your project, training needs, or just say hi.
                </p>
                <button className={styles.calBtn} onClick={loadCalendly}>
                  Book a Meeting
                </button>
              </div>
            ) : (
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/codekraft-hub/30min"
                style={{ minWidth: '320px', height: '390px' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
