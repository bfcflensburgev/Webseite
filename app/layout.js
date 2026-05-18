import './globals.css';

export const metadata = {
  title: 'Business and Finance Club Flensburg e.V.',
  description: 'Der nördlichste Hochschulverein im Netzwerk des Bundesverbands der Börsenvereine an deutschen Hochschulen – direkt in Flensburg.',
  openGraph: {
    title: 'Business and Finance Club Flensburg e.V.',
    description: 'Finanzen verstehen. Chancen ermöglichen. Netzwerk aufbauen.',
    type: 'website',
    locale: 'de_DE',
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
