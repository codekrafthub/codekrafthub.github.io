import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--body-font',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--header-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CodeKraft | Where Code Becomes Craft, Dreams Become Reality',
  description: 'CodeKraft brings AI & Automation, cutting-edge coding training, industry-ready internships, and real-world software solutions for businesses and students in India.',
  keywords: 'AI Automation, Coding Training, Data Science, AI, Internships, college students, Digital Transformation, Chatbots, Software Solutions, India',
  openGraph: {
    title: 'CodeKraft | Where Code Becomes Craft, Dreams Become Reality',
    description: 'Unlock AI, automation, and technical training. Explore our projects and services.',
    url: 'https://codekrafthub.in/',
    siteName: 'CodeKraft',
    images: [
      {
        url: 'https://codekrafthub.in/codekraft_logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeKraft | Code Becomes Craft, Dreams Become Reality',
    description: 'Unlock AI, automation, and technical training. Explore our projects and services.',
    images: ['https://codekrafthub.in/codekraft_logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GXYELFBD5L"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GXYELFBD5L');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CodeKraft',
              url: 'https://codekrafthub.in/',
              logo: 'https://codekrafthub.in/codekraft_logo.png',
              sameAs: [
                'https://www.linkedin.com/company/codekrafthub/',
                'https://github.com/kapil-verma',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-78983-78933',
                  contactType: 'customer support',
                  email: 'codekraft.hub@gmail.com',
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
