import Link from 'next/link';

const ACCENT = '#0C3573';
const BLUE = '#2196F3';
const TEXT_MUTED = '#6B7280';
const BORDER = '#BDD7F5';

export default function ImpressumPage() {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,53,115,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', height: 64, display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Zurück zur Startseite
        </Link>
      </nav>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '100px 24px 80px', fontFamily: "var(--font-body)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: ACCENT, marginBottom: 8 }}>Impressum</h1>
        <div style={{ width: 48, height: 3, background: BLUE, borderRadius: 2, marginBottom: 40 }} />

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Angaben gemäß § 5 TMG</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#1a1a1a' }}>
            Business and Finance Club Flensburg e.V.<br />
            Kanzleistr. 91–93<br />
            24943 Flensburg
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Vertreten durch</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#1a1a1a' }}>
            Colin Lohse (Vorstandsvorsitzender)<br />
            Daneel Klink (Stellv. Vorsitzender)<br />
            Jakob Barth (Finanzvorstand)
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Kontakt</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#1a1a1a' }}>
            E-Mail: <a href="mailto:info@bfc-flensburg.de" style={{ color: BLUE }}>info@bfc-flensburg.de</a>
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Vereinsregister</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#1a1a1a' }}>
            Registergericht: Amtsgericht Flensburg<br />
            Registernummer: VR 3235 FL
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Haftungsausschluss</h2>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>Haftung für Inhalte</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_MUTED, marginBottom: 16 }}>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>Haftung für Links</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_MUTED, marginBottom: 16 }}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>Urheberrecht</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_MUTED }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: 14, color: BLUE }}>Startseite</Link>
          <Link href="/datenschutz" style={{ fontSize: 14, color: BLUE }}>Datenschutz</Link>
        </div>
      </main>
    </>
  );
}
