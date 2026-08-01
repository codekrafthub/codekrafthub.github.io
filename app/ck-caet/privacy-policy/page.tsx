import type { Metadata } from 'next';
import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Footer from '@/components/ck-caet/Footer/Footer';
import styles from './policy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | CK-CAET',
  description: 'Privacy Policy for CodeKraft Centre for AI & Emerging Technologies.',
  openGraph: {
    title: 'Privacy Policy | CK-CAET',
    description: 'Privacy Policy for CodeKraft Centre for AI & Emerging Technologies.',
    url: 'https://codekrafthub.in/ck-caet/privacy-policy',
    siteName: 'CK-CAET',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | CK-CAET',
    description: 'Privacy Policy for CodeKraft Centre for AI & Emerging Technologies.',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <span className={styles.lastUpdated}>Last Updated: July 2026</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        
        <div className={styles.content}>
          <p>At CodeKraft Centre for AI & Emerging Technologies (CK-CAET), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or enroll in our programs.</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and educational background when you voluntarily provide it to us through contact forms or enrollment applications.</p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process your enrollment and provide program-related updates.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To improve our website and training offerings.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to maintain the security of your personal information. However, please note that no method of transmission over the internet is 100% secure.</p>

          <h2>4. Third-Party Links</h2>
          <p>Our website may contain links to third-party sites (such as the H.D. Schaefer Memorial Foundation). We are not responsible for the privacy practices of these external websites.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at codekraft.hub@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
