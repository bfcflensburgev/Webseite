export const metadata = {
  title: 'Mitglied werden',
  description: 'Jetzt Mitglied beim BFC Flensburg werden – 12 € pro Halbjahr für Studierende und Azubis. Zugang zu Events, Workshops, Fachzeitschriften und dem bundesweiten BVH-Netzwerk.',
  alternates: { canonical: 'https://www.bfc-flensburg.de/mitglied' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.bfc-flensburg.de/mitglied',
  name: 'Mitglied werden – BFC Flensburg e.V.',
  description: 'Jetzt Mitglied beim Business and Finance Club Flensburg werden. 12 € pro Halbjahr für Studierende und Azubis.',
  url: 'https://www.bfc-flensburg.de/mitglied',
  isPartOf: { '@id': 'https://www.bfc-flensburg.de/#organization' },
  mainEntity: {
    '@type': 'Offer',
    name: 'BFC Flensburg Mitgliedschaft',
    description: 'Zugang zu Vorträgen, Workshops, Börsenführerschein, Fachzeitschriften und dem bundesweiten BVH-Netzwerk.',
    price: '12',
    priceCurrency: 'EUR',
    priceSpecification: [
      {
        '@type': 'UnitPriceSpecification',
        price: '12',
        priceCurrency: 'EUR',
        name: 'Studierende & Azubis (pro Halbjahr)',
        billingDuration: 'P6M',
      },
      {
        '@type': 'UnitPriceSpecification',
        price: '22',
        priceCurrency: 'EUR',
        name: 'Sonstige (pro Halbjahr)',
        billingDuration: 'P6M',
      },
    ],
    seller: { '@id': 'https://www.bfc-flensburg.de/#organization' },
    url: 'https://www.bfc-flensburg.de/mitglied',
    availableAtOrFrom: {
      '@type': 'Place',
      name: 'BFC Flensburg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kanzleistr. 91–93',
        addressLocality: 'Flensburg',
        postalCode: '24943',
        addressCountry: 'DE',
      },
    },
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
