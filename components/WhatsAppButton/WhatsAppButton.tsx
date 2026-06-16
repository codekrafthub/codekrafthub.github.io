'use client';

import { useState } from 'react';
import styles from './WhatsAppButton.module.css';

const PHONE = '917898378933';
const MESSAGE = encodeURIComponent("Hello, I'm interested in CodeKraft services!");
const URL_WEB = `https://api.whatsapp.com/send?phone=${PHONE}&text=${MESSAGE}`;

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      if (expanded) {
        window.open(`whatsapp://send?phone=${PHONE}&text=${MESSAGE}`, '_blank');
        setTimeout(() => setExpanded(false), 300);
      } else {
        setExpanded(true);
        setTimeout(() => setExpanded(false), 3000);
      }
    } else {
      window.open(URL_WEB, '_blank');
    }
  }

  return (
    <a
      href="#"
      id="whatsappChatBtn"
      className={`${styles.btn} ${expanded ? styles.expanded : ''}`}
      title="Chat with us on WhatsApp"
      onClick={handleClick}
      aria-label="Chat with us on WhatsApp"
    >
      <span className={styles.icon}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
          <path
            d="M14 2C7.373 2 2 7.373 2 14c0 2.126.555 4.12 1.527 5.852L2 26l6.323-1.499A11.94 11.94 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
            fill="#25D366"
          />
          <path
            d="M10.5 8.5c-.3 0-.8.1-1.2.6-.4.5-1.5 1.5-1.5 3.6 0 2.1 1.5 4.2 1.7 4.4.2.3 3 4.6 7.2 6.3 1 .4 1.8.6 2.4.8.6.1 1.5.1 2.1 0 .7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5-.3-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.8.2-.3.3-1 1.3-1.2 1.5-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.6-.7c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.6-.1-.2-.8-1.9-1.1-2.6-.2-.5-.5-.5-.7-.5z"
            fill="white"
          />
        </svg>
      </span>
      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
