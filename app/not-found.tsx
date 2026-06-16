import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | CodeKraft',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f7fafd',
      color: '#0B2B3C',
      fontFamily: 'var(--body-font)',
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 800,
        fontFamily: 'var(--header-font)',
        margin: '0 0 1rem',
        color: '#3BB1E6'
      }}>404</h1>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        margin: '0 0 1.5rem'
      }}>Oops! Page Not Found.</h2>
      <p style={{
        fontSize: '1.1rem',
        color: '#6b7a8a',
        maxWidth: '500px',
        margin: '0 0 2.5rem',
        lineHeight: 1.6
      }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" style={{
        display: 'inline-block',
        backgroundColor: '#3BB1E6',
        color: '#ffffff',
        padding: '0.85rem 2rem',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        transition: 'transform 0.2s, background-color 0.2s'
      }}>
        Go to Homepage
      </Link>
    </div>
  );
}
