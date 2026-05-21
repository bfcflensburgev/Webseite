import './globals.css';

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/Logo/bfc_icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/Logo/cropped-bfc_icon-180x180.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
