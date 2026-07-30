import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CK-CAET | Technical Excellence & AI Training',
  description: 'CodeKraft Centre for Advanced Emerging Technologies (CK-CAET). Industry-ready internships and professional tech training in AI, Data Science, and Software Development.',
  openGraph: {
    title: 'CK-CAET | Technical Excellence & AI Training',
    description: 'Advance your career with CK-CAET. Professional internships and emerging technology training programs.',
    url: 'https://codekrafthub.in/ck-caet',
    siteName: 'CK-CAET',
    images: [
      {
        url: 'https://codekrafthub.in/ck_caet_hero_new.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CK-CAET | Technical Excellence & AI Training',
    description: 'Advance your career with CK-CAET. Professional internships and emerging technology training.',
    images: ['https://codekrafthub.in/ck_caet_hero_new.png'],
  },
};

export default function CKCAETLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
