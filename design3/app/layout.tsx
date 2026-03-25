import type { Metadata } from 'next';
import { Maven_Pro, Quattrocento_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/animations/SmoothScroll';

const maven = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const quattrocento = Quattrocento_Sans({
  subsets: ['latin'],
  variable: '--font-quattrocento',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nabatian Restaurant | Persisches Restaurant Heilbronn',
    template: '%s | Nabatian Restaurant'
  },
  description: 'Authentische persische Küche in Heilbronn. Nabatian Restaurant & Catering am Sonnenbrunnen - Persisches Buffet, Catering & Events.',
  keywords: ['Persisches Restaurant', 'Heilbronn', 'Catering', 'Nabatian', 'Persische Küche', 'Restaurant Böckingen'],
  authors: [{ name: 'Nabatian Restaurant & Catering' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://nabatian.de',
    title: 'Nabatian Restaurant | Persisches Restaurant Heilbronn',
    description: 'Authentische persische Küche in Heilbronn',
    siteName: 'Nabatian Restaurant',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${maven.variable} ${quattrocento.variable}`}>
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Nabatian Restaurant & Catering am Sonnenbrunnen',
              image: 'https://nabatian.de/hero-buffet.jpg',
              description: 'Persisches Restaurant und Catering in Heilbronn - Authentische persische Küche',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Im Haselter 9/1',
                addressLocality: 'Heilbronn',
                addressRegion: 'Baden-Württemberg',
                postalCode: '74080',
                addressCountry: 'DE',
              },
              telephone: '+49 176 84512873',
              email: 'nasrin.nabatian@gmail.com',
              servesCuisine: 'Persisch',
              priceRange: '€€',
              openingHours: 'We-Th 17:00-22:00, Fr-Sa 17:00-23:00, Su 09:00-14:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 49.15,
                longitude: 9.2,
              },
            }),
          }}
        />
      </head>
      <body className="font-maven antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
