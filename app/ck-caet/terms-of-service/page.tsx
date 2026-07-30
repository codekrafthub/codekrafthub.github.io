import type { Metadata } from 'next';
import Navbar from '@/components/ck-caet/Navbar/Navbar';
import Footer from '@/components/ck-caet/Footer/Footer';
import styles from '../privacy-policy/policy.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | CK-CAET',
  description: 'Terms of Service for CodeKraft Centre for AI & Emerging Technologies.',
};

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <span className={styles.lastUpdated}>Last Updated: July 2026</span>
        <h1 className={styles.title}>Terms of Service</h1>
        
        <div className={styles.content}>
          <p>Welcome to CK-CAET. By accessing our website or enrolling in our courses, you agree to be bound by the following terms and conditions.</p>

          <h2>1. Course Enrollment</h2>
          <p>Enrollment in our programs is subject to availability and the fulfillment of any stated prerequisites. CK-CAET reserves the right to refuse admission or dismiss a student from a program for conduct that violates our policies.</p>

          <h2>2. Intellectual Property</h2>
          <p>All course materials, including code, documents, and videos provided during training, are the intellectual property of CK-CAET and are for personal educational use only. Unauthorized distribution is prohibited.</p>

          <h2>3. Use of Website</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.</p>

          <h2>4. Limitation of Liability</h2>
          <p>While we strive for technical excellence, CK-CAET is not liable for any direct or indirect damages arising from the use of our training materials or website.</p>

          <h2>5. Amendments</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes your acceptance of the new terms.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
