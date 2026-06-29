import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../posts';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title + ' – BFC Flensburg',
    description: post.description,
    alternates: { canonical: `https://www.bfc-flensburg.de/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// ── Article content ────────────────────────────────────────────────────────────

const articles = {
  'was-ist-ein-boersenfuehrerschein': {
    jsonLd: (post) => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'BFC Flensburg', url: 'https://www.bfc-flensburg.de' },
      publisher: { '@type': 'Organization', name: 'BFC Flensburg', logo: { '@type': 'ImageObject', url: 'https://www.bfc-flensburg.de/images/Logo/bfc_logo.png' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.bfc-flensburg.de/blog/was-ist-ein-boersenfuehrerschein' },
    }),
    Content,
  },
};

function Content() {
  const ACCENT = '#0C3573';
  const BLUE = '#071f4e';
  const BORDER = '#BDD7F5';
  const TEXT_MUTED = '#6B7280';

  const prose = {
    fontSize: 17,
    lineHeight: 1.8,
    color: '#1a1a1a',
    marginBottom: 24,
  };
  const h2 = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(22px, 3vw, 30px)',
    color: ACCENT,
    fontWeight: 600,
    marginBottom: 16,
    marginTop: 48,
  };
  const h3 = {
    fontSize: 18,
    fontWeight: 700,
    color: ACCENT,
    marginBottom: 12,
    marginTop: 32,
  };

  return (
    <div>
      <p style={prose}>
        Du hörst immer wieder von der Börse, von Aktien, ETFs und Fonds — aber weißt nicht genau, wie das alles funktioniert? Genau dafür gibt es den <strong>Börsenführerschein</strong>. Er ist einer der beliebtesten Einstiege in die Welt der Finanzen für Studierende in Deutschland und wird vom Bundesverband der Börsenvereine an deutschen Hochschulen (BVH) angeboten.
      </p>

      <h2 style={h2}>Was ist der Börsenführerschein?</h2>
      <p style={prose}>
        Der Börsenführerschein ist ein mehrteiliger Kurs, der Studierenden die wichtigsten Grundlagen des Kapitalmarkts vermittelt. Er wurde vom BVH entwickelt und wird von Börsenvereinen wie dem BFC Flensburg an Hochschulen durchgeführt.
      </p>
      <p style={prose}>
        Das Programm deckt folgende Themen ab:
      </p>
      <ul style={{ ...prose, paddingLeft: 24 }}>
        <li style={{ marginBottom: 10 }}><strong>Geschichte der Börse</strong> — von den ersten Handelshäusern bis zur modernen Digitalhandelsbörse</li>
        <li style={{ marginBottom: 10 }}><strong>Wertpapierarten</strong> — Aktien, Anleihen, ETFs, Fonds, Derivate</li>
        <li style={{ marginBottom: 10 }}><strong>Analysetechniken</strong> — Fundamentalanalyse und technische Analyse</li>
        <li style={{ marginBottom: 10 }}><strong>Risikomanagement</strong> — Diversifikation, Rendite vs. Risiko</li>
        <li style={{ marginBottom: 10 }}><strong>Praxisbeispiele</strong> — echte Fallstudien und aktuelle Marktdaten</li>
      </ul>

      <h2 style={h2}>Wer kann mitmachen?</h2>
      <p style={prose}>
        Der Börsenführerschein richtet sich an <strong>alle Studierenden</strong> — unabhängig vom Studiengang. Vorkenntnisse sind nicht erforderlich. Ob BWL, Ingenieurswesen, Medizin oder Geisteswissenschaften: Finanzwissen ist für jeden relevant.
      </p>
      <p style={prose}>
        Beim BFC Flensburg ist der Börsenführerschein Teil der Mitgliedschaft. Als Mitglied nimmst du automatisch teil und kannst den optionalen <strong>Certified Finance Student (CFS)</strong> erwerben — ein anerkanntes Zertifikat, das du in deinem Lebenslauf angeben kannst.
      </p>

      <h2 style={h2}>Was ist der Certified Finance Student (CFS)?</h2>
      <p style={prose}>
        Der CFS ist die offizielle Abschlussbezeichnung des Börsenführerschein-Programms. Er wird vom BVH vergeben, wenn du alle Module erfolgreich abschließt. An manchen Hochschulen werden dafür sogar <strong>Creditpoints (ECTS) angerechnet</strong> — frag bei deinem Prüfungsamt nach.
      </p>

      <div style={{ background: '#E8F4FD', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '24px 28px', margin: '40px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Tipp</div>
        <p style={{ fontSize: 16, color: ACCENT, lineHeight: 1.6, margin: 0 }}>
          Der CFS ist kein Pflichtprogramm — er ist optional. Du kannst den Börsenführerschein auch einfach für dein eigenes Wissen absolvieren, ohne das Zertifikat zu beantragen.
        </p>
      </div>

      <h2 style={h2}>Warum lohnt sich der Börsenführerschein?</h2>

      <h3 style={h3}>1. Finanzwissen für das Leben</h3>
      <p style={prose}>
        Wer versteht, wie Kapitalmärkte funktionieren, trifft bessere Entscheidungen — bei der eigenen Geldanlage, in Gesprächen mit Unternehmen und beim Verständnis wirtschaftlicher Nachrichten.
      </p>

      <h3 style={h3}>2. Karrierevorteil</h3>
      <p style={prose}>
        Gerade in Bewerbungen für Finance, Consulting, Banking oder Wirtschaftsprüfung ist der CFS ein klares Signal: Du hast dir aktiv Finanzwissen angeeignet — über die Pflichtveranstaltungen im Studium hinaus.
      </p>

      <h3 style={h3}>3. Netzwerk</h3>
      <p style={prose}>
        Der Börsenführerschein findet in Gruppen statt. Du lernst Mitstudierenden kennen, die ähnliche Interessen haben — und knüpfst Kontakte, die über das Studium hinausgehen.
      </p>

      <h2 style={h2}>Börsenführerschein beim BFC Flensburg</h2>
      <p style={prose}>
        Als Mitglied des BFC Flensburg hast du Zugang zum Börsenführerschein-Programm des BVH. Wir organisieren die Kurse in Flensburg, begleitet von Referenten aus der Praxis. Die Teilnahme ist im Mitgliedsbeitrag von <strong>12 € pro Halbjahr</strong> enthalten.
      </p>
      <p style={prose}>
        Interesse? Melde dich direkt an — kein Vorwissen, kein Studiengang-Zwang.
      </p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function BlogPost({ params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const article = articles[post.slug];
  if (!article) notFound();

  const { jsonLd, Content: ArticleContent } = article;

  const ACCENT = '#0C3573';
  const BLUE = '#071f4e';
  const TEXT_MUTED = '#6B7280';

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(post)) }} />

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(12,53,115,0.96)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 64, gap: 24 }}>
          <Link href="/blog" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>← Blog</Link>
          <Link href="/" style={{ fontSize: 18, fontWeight: 700, color: 'white', fontFamily: 'var(--font-display)' }}>BFC Flensburg</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.category}</span>
          <span style={{ fontSize: 12, color: TEXT_MUTED }}>{post.readingTime} Lesezeit</span>
          <span style={{ fontSize: 12, color: TEXT_MUTED }}>{formatDate(post.date)}</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', color: ACCENT, fontWeight: 600, lineHeight: 1.15, marginBottom: 32 }}>
          {post.title}
        </h1>

        <ArticleContent />

        <div style={{ marginTop: 64, padding: '32px', background: '#E8F4FD', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: ACCENT, fontWeight: 600, marginBottom: 12 }}>
            Mitglied werden & Börsenführerschein machen
          </div>
          <p style={{ fontSize: 15, color: TEXT_MUTED, marginBottom: 24, lineHeight: 1.6 }}>
            Für nur 12 € pro Halbjahr — inklusive Zugang zu Workshops, Netzwerk und dem BVH-Netzwerk.
          </p>
          <Link href="/mitglied" style={{ display: 'inline-block', padding: '13px 32px', background: ACCENT, color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 10 }}>
            Jetzt Mitglied werden
          </Link>
        </div>
      </main>
    </>
  );
}
