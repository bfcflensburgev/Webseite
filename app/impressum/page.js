import Link from 'next/link';

const ACCENT = '#0C3573';
const BLUE = '#071f4e';
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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>Online-Präsenz</h2>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://www.linkedin.com/company/bfc-flensburg" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 10, background: '#E8F4FD', color: ACCENT }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/bfc.flensburg/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 10, background: '#E8F4FD', color: ACCENT }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
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
