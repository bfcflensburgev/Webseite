import Link from 'next/link';

const ACCENT = '#0C3573';
const BLUE = '#2196F3';
const TEXT_MUTED = '#6B7280';
const BORDER = '#BDD7F5';

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>{title}</h2>
      {children}
    </section>
  );
}

function P({ children }) {
  return <p style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_MUTED, marginBottom: 12 }}>{children}</p>;
}

export default function DatenschutzPage() {
  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,53,115,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', height: 64, display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Zurück zur Startseite
        </Link>
      </nav>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '100px 24px 80px', fontFamily: "var(--font-body)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: ACCENT, marginBottom: 8 }}>Datenschutzerklärung</h1>
        <div style={{ width: 48, height: 3, background: BLUE, borderRadius: 2, marginBottom: 8 }} />
        <p style={{ fontSize: 14, color: TEXT_MUTED, marginBottom: 40 }}>Stand: Mai 2025</p>

        <Section title="1. Verantwortlicher">
          <P>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br />
            <strong style={{ color: ACCENT }}>Business and Finance Club Flensburg e.V.</strong><br />
            Kanzleistr. 91–93, 24943 Flensburg<br />
            E-Mail: <a href="mailto:info@bfc-flensburg.de" style={{ color: BLUE }}>info@bfc-flensburg.de</a>
          </P>
        </Section>

        <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
          <P>
            Wir erheben personenbezogene Daten nur, wenn diese im Rahmen des Mitgliedschaftsantrags oder zur Kontaktaufnahme von Ihnen bereitgestellt werden. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung/vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).
          </P>
          <P>
            Bei Abschluss einer Mitgliedschaft verarbeiten wir folgende Daten: Name, Anschrift, E-Mail-Adresse, Telefonnummer, Geburtsdatum sowie Bankverbindung (IBAN, Kontoinhaber) für den SEPA-Lastschrifteinzug.
          </P>
        </Section>

        <Section title="3. Zweck der Datenverarbeitung">
          <P>
            Die erhobenen Daten werden ausschließlich zur Verwaltung der Vereinsmitgliedschaft, zur Kommunikation mit Mitgliedern (Veranstaltungen, Newsletter, WhatsApp-Gruppe) sowie zur Weiterleitung notwendiger Daten an den Bundesverband der Börsenvereine an deutschen Hochschulen (BVH) für den Zeitschriftenversand verwendet.
          </P>
        </Section>

        <Section title="4. Weitergabe von Daten">
          <P>
            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, soweit dies zur Erbringung der Vereinsleistungen erforderlich ist (insbesondere an den BVH für den Bezug von Fachzeitschriften). Eine Weitergabe zu Werbezwecken ohne Ihre ausdrückliche Einwilligung findet nicht statt.
          </P>
        </Section>

        <Section title="5. Speicherdauer">
          <P>
            Ihre Daten werden so lange gespeichert, wie Ihre Mitgliedschaft besteht und darüber hinaus, soweit gesetzliche Aufbewahrungspflichten (z. B. handels- oder steuerrechtliche Fristen von bis zu 10 Jahren) bestehen. Nach Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig gelöscht.
          </P>
        </Section>

        <Section title="6. Ihre Rechte">
          <P>Sie haben das Recht auf:</P>
          <ul style={{ paddingLeft: 20, fontSize: 15, lineHeight: 2, color: TEXT_MUTED }}>
            <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
          <P>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@bfc-flensburg.de" style={{ color: BLUE }}>info@bfc-flensburg.de</a>
          </P>
        </Section>

        <Section title="7. Kontaktformular / Mitgliedsantrag">
          <P>
            Wenn Sie uns per Formular oder E-Mail kontaktieren, werden die angegebenen Daten zur Bearbeitung der Anfrage und für eventuelle Rückfragen bei uns gespeichert. Der Mitgliedsantrag wird über den Dienst Formspree (formspree.io) verarbeitet. Informationen zum Datenschutz bei Formspree finden Sie unter{' '}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>formspree.io/legal/privacy-policy</a>.
          </P>
        </Section>

        <Section title="8. Hosting und technischer Betrieb">
          <P>
            Diese Website wird über Vercel Inc. gehostet. Beim Aufruf der Website werden durch Vercel serverseitig Zugriffsdaten (sog. Server-Logfiles) gespeichert, die Ihren Browser, Ihr Betriebssystem, die Referrer-URL sowie Datum und Uhrzeit des Zugriffs enthalten können. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel unter{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>vercel.com/legal/privacy-policy</a>.
          </P>
        </Section>

        <Section title="9. Keine Cookies / kein Tracking">
          <P>
            Diese Website verwendet keine Tracking-Cookies, keine Analyse-Tools (z. B. Google Analytics) und keine Social-Media-Plugins, die ohne Ihre Einwilligung personenbezogene Daten erheben.
          </P>
        </Section>

        <Section title="10. Änderungen dieser Datenschutzerklärung">
          <P>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, soweit dies aufgrund geänderter gesetzlicher Vorgaben erforderlich ist. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
          </P>
        </Section>

        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/" style={{ fontSize: 14, color: BLUE }}>Startseite</Link>
          <Link href="/impressum" style={{ fontSize: 14, color: BLUE }}>Impressum</Link>
        </div>
      </main>
    </>
  );
}
