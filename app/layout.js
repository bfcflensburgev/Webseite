import './globals.css';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import CookieBanner from './CookieBanner';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.bfc-flensburg.de'),
  title: {
    default: 'BFC Flensburg – Nördlichster Börsenverein | Finanzclub für Studierende',
    template: '%s – BFC Flensburg e.V.',
  },
  description: 'Der Business and Finance Club Flensburg e.V. ist der nördlichste Hochschulverein im BVH-Netzwerk. Finanzbildung, Workshops, Events und Netzwerk für Studierende – direkt in Flensburg.',
  keywords: ['Börsenverein Flensburg', 'Finanzclub Studierende', 'BVH Flensburg', 'Business Finance Club Flensburg', 'Finanzbildung Flensburg', 'BFC Flensburg'],
  authors: [{ name: 'Business and Finance Club Flensburg e.V.' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.bfc-flensburg.de',
    siteName: 'BFC Flensburg',
    title: 'BFC Flensburg – Nördlichster Börsenverein in Deutschland',
    description: 'Finanzbildung, Workshops und Netzwerk für Studierende. Mitgliedschaft ab 12 € pro Halbjahr. Direkt in Flensburg.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BFC Flensburg – Nördlichster Börsenverein',
    description: 'Finanzbildung, Workshops und Netzwerk für Studierende in Flensburg.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.bfc-flensburg.de',
  },
  icons: {
    icon: [
      { url: '/images/Logo/cropped-bfc_icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Logo/cropped-bfc_icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/images/Logo/cropped-bfc_icon-180x180.png', sizes: '180x180' },
    shortcut: '/images/Logo/cropped-bfc_icon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
