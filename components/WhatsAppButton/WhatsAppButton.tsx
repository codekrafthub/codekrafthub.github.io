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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.351-2.907-6.992-2.909-5.443 0-9.868 4.425-9.873 9.87.001 1.638.431 3.238 1.248 4.674l-.99 3.614 3.702-.977zm12.062-7.142c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </span>
      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
