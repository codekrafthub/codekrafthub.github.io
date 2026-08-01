import type { Metadata } from 'next';
import Background3D from '@/components/youthx/Background3D/Background3D';
import YouthXHero from '@/components/youthx/YouthXHero/YouthXHero';
import YouthXScene from '@/components/youthx/YouthXScene/YouthXScene';

export const metadata: Metadata = {
  title: 'YouthX Summit | Creating Lasting Impact',
  description: 'A premier annual tech summit by CodeKraft — empowering 400+ young minds through keynotes, exhibitions, and mentorship. Chhattisgarh, India.',
  alternates: {
    canonical: 'https://codekrafthub.in/youthx',
  },
  openGraph: {
    title: 'YouthX Summit | Creating Lasting Impact',
    description: 'A premier annual tech summit by CodeKraft — empowering 400+ young minds through keynotes, exhibitions, and mentorship. Chhattisgarh, India.',
    url: 'https://codekrafthub.in/youthx',
    siteName: 'YouthX',
    images: [
      {
        url: 'https://codekrafthub.in/youthx-logo-full.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouthX Summit | Creating Lasting Impact',
    description: 'A premier annual tech summit by CodeKraft — empowering 400+ young minds.',
    images: ['https://codekrafthub.in/youthx-logo-full.png'],
  },
};

export default function YouthXPage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': 'YouthX Summit',
    'startDate': '2026-01-12T09:00:00+05:30',
    'endDate': '2026-01-12T18:00:00+05:30',
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': 'Chhattisgarh Tech Summit Hub',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bhilai',
        'addressRegion': 'Chhattisgarh',
        'addressCountry': 'IN'
      }
    },
    'image': [
      'https://codekrafthub.in/youthx-logo-full.png'
    ],
    'description': 'A premier annual tech summit by CodeKraft — empowering 400+ young minds through keynotes, tech exhibitions, and direct mentorship.',
    'organizer': {
      '@type': 'Organization',
      'name': 'CodeKraft',
      'url': 'https://codekrafthub.in'
    },
    'offers': {
      '@type': 'Offer',
      'url': 'https://codekrafthub.in/youthx',
      'price': '0',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock'
    }
  };

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Fixed 3D background canvas */}
      <Background3D />

      {/* Scrollable cinematic content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Scene 1 + 2: Boot → Breach (pinned hero) */}
        <YouthXHero />

        {/* Scenes 3–9: Broadcast → Partner CTA → Footer */}
        <YouthXScene />
      </div>
    </main>
  );
}

