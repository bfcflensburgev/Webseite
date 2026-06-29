import Link from 'next/link';
import { posts } from './posts';

export const metadata = {
  title: 'Blog – BFC Flensburg',
  description: 'Finanzwissen für Studierende: Börse, Karriere, Netzwerk. Artikel vom Business and Finance Club Flensburg.',
  alternates: { canonical: 'https://www.bfc-flensburg.de/blog' },
};

const ACCENT = '#0C3573';
const BLUE = '#071f4e';
const BORDER = '#BDD7F5';
const TEXT_MUTED = '#6B7280';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogIndex() {
  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(12,53,115,0.96)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 64, gap: 24 }}>
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>← Zurück</Link>
          <span style={{ fontSize: 18, fontWeight: 700, color: 'white', fontFamily: 'var(--font-display)' }}>BFC <span style={{ color: '#7EC8F8' }}>Blog</span></span>
        </div>
      </nav>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 52px)', color: ACCENT, fontWeight: 600, marginBottom: 12 }}>
          Finanzwissen für Studierende
        </h1>
        <p style={{ fontSize: 17, color: TEXT_MUTED, marginBottom: 48, lineHeight: 1.6 }}>
          Artikel zu Börse, Finanzen, Karriere und dem BVH-Netzwerk.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <article style={{
                padding: '28px 32px',
                background: 'white',
                borderRadius: 12,
                border: `1px solid ${BORDER}`,
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(12,53,115,0.10)'; e.currentTarget.style.borderColor = `${BLUE}40`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BORDER; }}
              >
                <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: TEXT_MUTED }}>{post.readingTime} Lesezeit</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 26px)', color: ACCENT, fontWeight: 600, marginBottom: 10, lineHeight: 1.25 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.6, marginBottom: 16 }}>{post.description}</p>
                <div style={{ fontSize: 13, color: TEXT_MUTED }}>
                  {formatDate(post.date)} · {post.author}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
