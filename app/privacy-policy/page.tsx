import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodeKraft Hub',
  description: 'Privacy Policy for CodeKraft Hub IT Services.',
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <span className={styles.lastUpdated}>Last Updated: July 2026</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        
        <div className={styles.content}>
          <p>At CodeKraft Hub, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our main website or interact with our IT services and enterprise solutions.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us through contact forms, newsletter signups, or project inquiries. This may include your name, email address, company name, and project details.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to respond to inquiries, provide maintenance and support, send professional updates, and improve our service offerings.</p>

          <h2>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>

          <h2>4. Third-Party Services</h2>
          <p>We do not sell your personal information. We may use trusted third-party services for hosting or analytics, which are bound by their own privacy standards.</p>

          <h2>5. Contact Us</h2>
          <p>If you have questions about this policy, contact us at codekraft.hub@gmail.com.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
