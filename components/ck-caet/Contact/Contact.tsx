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
    <section id="caet-contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Get In Touch</div>
        <h2 className={styles.heading}>Launch Your Tech Journey</h2>
        <p className={styles.sub}>
          Reach out to inquire about upcoming training batches, internship positions, or live collaborative bootcamps.
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
                <div className={styles.infoLabel}>Call/WhatsApp</div>
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

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}><Camera size={24} strokeWidth={1.5} /></span>
              <div>
                <div className={styles.infoLabel}>Instagram</div>
                <a
                  href="https://instagram.com/codekrafthub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  @codekrafthub
                </a>
              </div>
            </div>

            <div className={styles.quickActions}>
              <a href="mailto:codekraft.hub@gmail.com" className={styles.actionBtn}>
                Send Email
              </a>
              <a
                href="https://wa.me/917898378933"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.outline}`}
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Calendly */}
          <div className={styles.calendlyCard}>
            {!calendlyLoaded ? (
              <div className={styles.calendlyPlaceholder}>
                <div className={styles.calIcon}><Calendar size={32} strokeWidth={1.5} /></div>
                <p className={styles.calHeading}>Book a Free Counselling Call</p>
                <p className={styles.calSub}>
                  Discuss training batches, project guidance, or career roadmap queries.
                </p>
                <button className={styles.calBtn} onClick={loadCalendly}>
                  Schedule Now
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
