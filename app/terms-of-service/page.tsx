import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | CodeKraft Hub',
  description: 'Terms of Service for CodeKraft Hub IT Services.',
  alternates: {
    canonical: 'https://codekrafthub.in/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <span className={styles.lastUpdated}>Last Updated: July 2026</span>
        <h1 className={styles.title}>Terms of Service</h1>
        
        <div className={styles.content}>
          <p>Welcome to CodeKraft Hub. By accessing our website and using our professional IT services, you agree to comply with the following terms and conditions.</p>

          <h2>1. Services</h2>
          <p>CodeKraft Hub provides software development, cloud solutions, and IT consultancy services. The specific scope of work for each engagement is governed by a separate Service Agreement.</p>

          <h2>2. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, and code, is the property of CodeKraft Hub unless otherwise stated. Unauthorized use is prohibited.</p>

          <h2>3. User Conduct</h2>
          <p>Users agree not to use the site for any unlawful purpose or in any way that could damage our infrastructure or reputation.</p>

          <h2>4. Limitation of Liability</h2>
          <p>CodeKraft Hub shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website.</p>

          <h2>5. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in [Your City/State].</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
