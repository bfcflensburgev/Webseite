'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ACCENT = '#0C3573';
const BLUE = '#071f4e';
const BG = '#FFFFFF';
const BG_ALT = '#E8F4FD';
const BORDER = '#BDD7F5';
const TEXT = '#1a1a1a';
const TEXT_MUTED = '#6B7280';
const CARD_BG = '#FFFFFF';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Startseite', href: '/' },
    { label: 'Über uns', href: '/#ueber' },
    { label: 'Vorteile', href: '/#vorteile' },
    { label: 'Partner', href: '/#partner' },
    { label: 'Events', href: '/#events' },
  ];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,53,115,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" width={40} height={40} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: 'white' }}>BFC <span style={{ color: '#7EC8F8' }}>Flensburg</span></span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = BLUE}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>{l.label}</Link>
          ))}
          <Link href="/mitglied" style={{ fontSize: 14, fontWeight: 600, color: 'white', background: BLUE, padding: '8px 20px', borderRadius: 8 }}>Mitglied werden</Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-burger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile" style={{ background: ACCENT, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map(l => <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{l.label}</Link>)}
          <Link href="/mitglied" onClick={() => setMenuOpen(false)} style={{ fontSize: 15, fontWeight: 600, color: 'white', background: BLUE, padding: '12px 24px', borderRadius: 8, textAlign: 'center' }}>Mitglied werden</Link>
        </div>
      )}
      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-burger{display:block!important}}@media(min-width:769px){.nav-mobile{display:none!important}}`}</style>
    </nav>
  );
}

function MemberCard({ person }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: CARD_BG,
        borderRadius: 16,
        border: `1px solid ${hovered ? BLUE + '60' : BORDER}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px rgba(33,150,243,0.15)` : '0 2px 8px rgba(12,53,115,0.06)',
      }}
    >
      <div style={{ height: 300, background: `linear-gradient(135deg, ${ACCENT}15, ${BLUE}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
        {person.img ? (
          <Image src={person.img} alt={person.name} fill style={{ objectFit: 'cover', objectPosition: person.imgPos || 'top' }} />
        ) : (
          <div style={{ width: 96, height: 96, borderRadius: '50%', background: `${ACCENT}18`, border: `3px solid ${BLUE}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: ACCENT }}>{person.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
        )}
        {person.role && (
          <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
            <div style={{ display: 'inline-block', background: 'rgba(12,53,115,0.85)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 20, border: `1px solid ${BLUE}30` }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'white' }}>{person.role}</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ padding: '20px 24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{person.name}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLUE }}>{person.position}</div>
          </div>
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ width: 36, height: 36, borderRadius: 10, background: '#0077B5', border: '1px solid #0077B5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#005f94'; e.currentTarget.style.borderColor = '#005f94'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0077B5'; e.currentTarget.style.borderColor = '#0077B5'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          )}
        </div>
        {person.desc && (
          <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.6, marginTop: 10 }}>{person.desc}</p>
        )}
      </div>
    </div>
  );
}

function AlumniCard({ person }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: CARD_BG,
        borderRadius: 14,
        border: `1px solid ${hovered ? BLUE + '50' : BORDER}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 12px 32px rgba(33,150,243,0.12)` : '0 2px 6px rgba(12,53,115,0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: 0,
      }}
    >
      <div style={{ width: 90, height: 90, flexShrink: 0, borderRadius: '50%', background: `linear-gradient(135deg, ${ACCENT}15, ${BLUE}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', margin: '12px 0 12px 12px', border: `2px solid ${BORDER}`, position: 'relative' }}>
        {person.img ? (
          <Image src={person.img} alt={person.name} fill style={{ objectFit: 'cover', objectPosition: person.imgPos || 'top' }} />
        ) : (
          <span style={{ fontSize: 22, fontWeight: 700, color: ACCENT }}>{person.name.split(' ').map(n => n[0]).join('')}</span>
        )}
      </div>
      <div style={{ padding: '14px 18px', flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: ACCENT, marginBottom: 2 }}>{person.name}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: BLUE, marginBottom: 4 }}>{person.position}</div>
            {person.desc && <p style={{ fontSize: 12, color: TEXT_MUTED, lineHeight: 1.5 }}>{person.desc}</p>}
          </div>
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ width: 30, height: 30, borderRadius: 8, background: '#0077B5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#005f94'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0077B5'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{tag}</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: ACCENT, marginBottom: 12 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 16, color: TEXT_MUTED, maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

const vorstand = [
  {
    name: 'Colin Lohse',
    position: 'Vorstandsvorsitzender',
    role: 'Vorsitzender',
    desc: 'Schüler am Fördegymnasium Flensburg.',
    img: '/images/team/colin-lohse.png',
    imgPos: 'center 30%',
    linkedin: 'https://www.linkedin.com/in/colin-lohse/',
  },
  {
    name: 'Daneel Klink',
    position: 'Stellv. Vorsitzender',
    role: 'Stellvertreter',
    desc: 'Junior IT-Security Specialist bei der Meesenburg Gruppe. Ausbildung zum Fachinformatiker für Systemintegration.',
    img: '/images/team/daneel-klink.png',
    imgPos: 'center 30%',
    linkedin: 'https://www.linkedin.com/in/daneel-klink-b83917337/',
  },
  {
    name: 'Jakob Barth',
    position: 'Finanzvorstand',
    role: 'Finanzen',
    desc: 'Ausbildung Kaufmann für Versicherung und Finanzanlagen bei der Provinzial. Studium Finanzmanagement an der IU Internationale Hochschule.',
    img: null,
    linkedin: 'https://www.linkedin.com/in/jakob-barth-0a4196300/',
  },
];

const beirat = [
  {
    name: 'Dennis Rübsteck',
    position: 'Ehem. Vorsitzender',
    role: 'Beirat',
    desc: 'Informatikstudium an der Hochschule Flensburg.',
    img: '/images/ruebsteck.jpeg',
    imgPos: 'center top',
    linkedin: 'https://www.linkedin.com/in/dennis-ruebsteck/',
  },
  {
    name: 'Tom Pasing',
    position: 'Ehem. Finanzvorstand',
    role: 'Beirat',
    desc: 'Business Administration an der Copenhagen Business School.',
    img: '/images/pasing.jpeg',
    imgPos: 'center top',
    linkedin: 'https://www.linkedin.com/in/tom-pasing/',
  },
];

const alumni = [
  {
    name: 'Adrian Sarwari',
    position: 'Growth AI Engineer · Parto',
    desc: 'M.A. Business Informatics. MHP · FinTech Co-Founder.',
    img: '/images/sawari.jpeg',
    imgPos: 'center top',
    linkedin: 'https://www.linkedin.com/in/adrian-sarwari-95932019b/',
  },
  {
    name: 'Julian Seyfarth',
    position: 'MHP · FinTech Co-Founder',
    desc: 'M.A. Business Management (Note 1,7).',
    img: '/images/seyfarth.jpeg',
    imgPos: 'center top',
    linkedin: 'https://www.linkedin.com/in/julian-seyfarth/',
  },
  {
    name: 'Ilhan Atac',
    position: 'Associate · PwC',
    desc: 'M.A. Business Management.',
    img: '/images/atac.jpeg',
    imgPos: 'center top',
    linkedin: 'https://www.linkedin.com/in/ilhan-atac-a200601b6/',
  },
  {
    name: 'Matthis Kroh',
    position: 'Senior Consultant · Deloitte',
    desc: 'B.A. BWL Hochschule Flensburg.',
    img: null,
    linkedin: 'https://www.linkedin.com/in/matthis-kroh/',
  },
  {
    name: 'Florian Prillwitz',
    position: 'Audit Associate · BDO',
    desc: 'M.A. Bank-, Unternehmens-, Finanz- und Wertpapierrecht.',
    img: null,
    linkedin: 'https://www.linkedin.com/in/florian-prillwitz-92a0081b4/',
  },
];

const schirmherrschaft = [
  {
    name: 'Prof. Dr. Ulrich Welland',
    position: 'Schirmherr',
    img: '/images/welland.jpeg',
    imgPos: 'center top',
  },
  {
    name: 'Prof. Dr. Indra Erichsen',
    position: 'Schirmherrin',
    img: null,
  },
];

export default function TeamPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ background: ACCENT, paddingTop: 120, paddingBottom: 80, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${BLUE}15 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BLUE}20`, padding: '7px 18px', borderRadius: 24, marginBottom: 24, border: `1px solid ${BLUE}30` }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Vorstand & Team</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px, 5vw, 54px)', color: 'white', fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Die Menschen hinter<br /><span style={{ color: BLUE }}>dem BFC Flensburg</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
            Ehrenamtlich. Engagiert. Für euch — und für Flensburg.
          </p>
        </div>
      </section>

      {/* Vorstand */}
      <section style={{ background: BG, padding: 'clamp(60px, 10vw, 100px) 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader
            tag="Vorstand"
            title="Unser Vorstand"
            subtitle="Vier Personen, eine Mission: Finanzbildung und Netzwerk für Studierende und Schüler in Flensburg."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {vorstand.map(p => <MemberCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Beirat */}
      <section style={{ background: BG_ALT, padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Beirat</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: ACCENT }}>Unser Beirat</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
            {beirat.map(p => <AlumniCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section id="alumni" style={{ background: BG, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeader
            tag="Alumni"
            title="Unsere Alumni"
            subtitle="Ehemalige Mitglieder, die heute in führenden Unternehmen und Institutionen tätig sind."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            {alumni.map(p => <AlumniCard key={p.name} person={p} />)}
          </div>
        </div>
      </section>

      {/* Schirmherrschaft */}
      <section style={{ background: BG_ALT, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionHeader
            tag="Schirmherrschaft"
            title="Unsere Schirmherrschaft"
            subtitle="Wir danken unseren Schirmherren für ihre Unterstützung und ihr Vertrauen."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, maxWidth: 560, margin: '0 auto' }}>
            {schirmherrschaft.map(p => (
              <div key={p.name} style={{ background: CARD_BG, borderRadius: 14, border: `1px solid ${BORDER}`, padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${ACCENT}12`, border: `2px solid ${BLUE}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', overflow: 'hidden', position: 'relative' }}>
                  {p.img ? (
                    <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover', objectPosition: p.imgPos || 'center top' }} />
                  ) : (
                    <span style={{ fontSize: 22, fontWeight: 700, color: ACCENT }}>{p.name.split(' ').slice(-1)[0][0]}</span>
                  )}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: BLUE }}>{p.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitmachen CTA */}
      <section style={{ background: BG, padding: '60px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: ACCENT, marginBottom: 14 }}>Werde Teil des Teams</h2>
          <p style={{ fontSize: 16, color: TEXT_MUTED, lineHeight: 1.7, marginBottom: 32 }}>
            Du hast Lust, den BFC Flensburg aktiv mitzugestalten? Wir suchen immer engagierte Mitglieder, die Verantwortung übernehmen möchten.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/mitglied" style={{ padding: '13px 32px', background: BLUE, color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 10, boxShadow: `0 4px 20px ${BLUE}30` }}>Jetzt Mitglied werden</Link>
            <Link href="/kontakt" style={{ padding: '13px 32px', background: 'transparent', color: ACCENT, fontSize: 15, fontWeight: 600, borderRadius: 10, border: `1.5px solid ${BORDER}` }}>Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: ACCENT, padding: '36px 24px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" width={36} height={36} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: 'white' }}>BFC <span style={{ color: '#7EC8F8' }}>Flensburg</span></span>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Startseite</Link>
            <Link href="/datenschutz" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Datenschutz</Link>
            <Link href="/impressum" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Impressum</Link>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} BFC Flensburg e.V.</div>
        </div>
      </footer>
    </>
  );
}
