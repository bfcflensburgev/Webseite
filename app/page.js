'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ACCENT = '#0C3573';
const ACCENT_LIGHT = '#1554BB';
const BLUE = '#071f4e';
const BG = '#FFFFFF';
const BG_ALT = '#E8F4FD';
const CARD_BG = '#FFFFFF';
const BORDER = '#BDD7F5';
const TEXT = '#1a1a1a';
const TEXT_MUTED = '#6B7280';

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000, steps = 60, increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function FadeInUp({ children, delay = 0, style: s = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
      transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      ...s,
    }}>{children}</div>
  );
}

function LogoSlider() {
  const logos = [
    { src: '/images/logos/bvh.png', alt: 'BVH' },
    { src: '/images/logos/bdo.png', alt: 'BDO' },
    { src: '/images/logos/preplounge.png', alt: 'PrepLounge' },
    { src: '/images/logos/handelsblatt.png', alt: 'Handelsblatt' },
    { src: '/images/logos/financial-times.png', alt: 'Financial Times' },
    { src: '/images/logos/wirtschaftswoche.png', alt: 'WirtschaftsWoche' },
    { src: '/images/logos/capital.png', alt: 'Capital' },
    { src: '/images/logos/focus-money.png', alt: 'Focus Money' },
    { src: '/images/logos/focus-online.png', alt: 'Focus Online' },
    { src: '/images/logos/euro.png', alt: 'Euro' },
  ];
  const allLogos = [...logos, ...logos];
  return (
    <div style={{ overflow: 'hidden', padding: '20px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 80, background: `linear-gradient(to right, ${BG}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 80, background: `linear-gradient(to left, ${BG}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 48, animation: 'slideLogos 30s linear infinite', width: 'max-content' }}>
        {allLogos.map((l, i) => (
          <div key={i} style={{ position: 'relative', height: 32, width: 110, flexShrink: 0, opacity: 0.6, transition: 'opacity 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.55'}
          >
            <Image src={l.src} alt={l.alt} fill style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
      <style>{`@keyframes slideLogos { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  const links = [{ label: 'Über uns', href: '#ueber' },{ label: 'Vorteile', href: '#vorteile' },{ label: 'Partner', href: '#partner' },{ label: 'Events', href: '#events' },{ label: 'FAQ', href: '#faq' },{ label: 'Team', href: '/team' },{ label: 'Blog', href: '/blog' }];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(12,53,115,0.96)' : 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)', backdropFilter: scrolled ? 'blur(14px)' : 'none', transition: 'all 0.4s ease', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" width={40} height={40} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '0.01em' }}>BFC Flensburg</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="nav-desktop">
          {links.map(l => <Link key={l.href} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = BLUE} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}>{l.label}</Link>)}
          <Link href="/mitglied" style={{ fontSize: 14, fontWeight: 600, color: 'white', background: BLUE, padding: '8px 20px', borderRadius: 8 }}>Mitglied werden</Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-burger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" strokeWidth="2" fill="none">{menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
        </button>
      </div>
      {menuOpen && <div className="nav-mobile" style={{ background: ACCENT, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {links.map(l => <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{l.label}</Link>)}
        <Link href="/mitglied" onClick={() => setMenuOpen(false)} style={{ fontSize: 15, fontWeight: 600, color: 'white', background: BLUE, padding: '12px 24px', borderRadius: 8, textAlign: 'center' }}>Mitglied werden</Link>
      </div>}
      <style>{`@media(max-width:768px){.nav-desktop{display:none!important}.nav-burger{display:block!important}}@media(min-width:769px){.nav-mobile{display:none!important}}`}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: ACCENT,
    }}>
      <Image src="/images/pexels-yr-9755155-6370532.jpg" alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center 40%', zIndex: 0 }} />
      {/* Dark blue overlay over the photo */}
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(12,53,115,0.78) 0%, rgba(12,53,115,0.65) 60%, rgba(12,53,115,0.85) 100%)`, pointerEvents: 'none' }} />
      {/* Subtle vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', padding: '8px 20px', borderRadius: 24, marginBottom: 28, border: '1px solid rgba(255,255,255,0.2)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px 3px rgba(34,197,94,0.55)', flexShrink: 0 }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Nördlichster Börsenverein Deutschlands</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(40px, 7vw, 78px)', color: 'white', fontWeight: 600, lineHeight: 1.08, marginBottom: 22, textShadow: '0 2px 20px rgba(0,0,0,0.3)', letterSpacing: '-0.01em' }}>
          Finanzen verstehen.<br />Chancen ermöglichen.<br /><span style={{ color: '#7EC8F8' }}>Netzwerk aufbauen.</span>
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6, textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}>
          Wir sind ein studentischer Verein im Netzwerk des Bundesverbands der Börsenvereine an deutschen Hochschulen — direkt in Flensburg.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/mitglied" style={{ padding: '14px 32px', background: BLUE, color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 10, boxShadow: `0 4px 24px rgba(33,150,243,0.5)` }}>Mitglied werden</Link>
          <a href="#vorteile" style={{ padding: '14px 32px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', color: 'white', fontSize: 15, fontWeight: 500, borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)' }}>Mehr erfahren</a>
        </div>
        <div className="hero-stats" style={{ display: 'flex', gap: 0, justifyContent: 'center', marginTop: 72, flexWrap: 'wrap' }}>
          {[{ num: 100, suffix: '+', label: 'Mitglieder' },{ num: 20, suffix: '+', label: 'Events / Jahr' },{ num: 70, suffix: '+', label: 'Vereine im BVH' }].map((s, i) => (
            <div key={s.label} style={{ padding: '0 40px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 700, color: 'white', lineHeight: 1 }}><AnimatedNumber target={s.num} suffix={s.suffix} /></div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ id, children, bg = BG }) {
  return <section id={id} style={{ background: bg, padding: 'clamp(60px, 10vw, 100px) 24px' }}><div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div></section>;
}
function SectionHeader({ tag, title, subtitle, light }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      {tag && <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{tag}</div>}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px, 4.5vw, 50px)', fontWeight: 600, color: light ? 'white' : ACCENT, marginBottom: 16, letterSpacing: '-0.01em' }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, color: light ? 'rgba(255,255,255,0.6)' : TEXT_MUTED, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

function ChristianRoehl() {
  return (
    <section style={{ background: BG, padding: '0 24px 0', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 0', display: 'flex', alignItems: 'center', gap: 28 }} className="roehl-strip">
        <div style={{ width: 72, height: 72, borderRadius: '50%', border: `2px solid ${BLUE}40`, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
          <Image src="/images/team/Christian-roehl.jpeg" alt="Christian W. Röhl" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 13, color: BLUE, fontWeight: 700, marginRight: 8, userSelect: 'none' }}>"</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(14px, 1.8vw, 18px)', color: ACCENT, fontStyle: 'italic', fontWeight: 500 }}>
            Der Börsenverein ist ein Katalysator für die persönliche und berufliche Entwicklung.
          </span>
        </div>
        <div style={{ flexShrink: 0, textAlign: 'right' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>Christian W. Röhl</div>
          <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 2 }}>Chief Economist · Scalable Capital</div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.roehl-strip{flex-direction:column;text-align:center;gap:16px}}`}</style>
    </section>
  );
}

function HoverCard({ children, style: s = {}, className = '' }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} className={className} style={{
      background: CARD_BG, borderRadius: 12, border: `1px solid ${BORDER}`,
      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
      transform: h ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: h ? '0 12px 32px rgba(10,37,64,0.10)' : '0 1px 3px rgba(0,0,0,0.04)',
      borderColor: h ? `${BLUE}50` : BORDER, ...s,
    }}>{children}</div>
  );
}

function UeberUns() {
  return (
    <Section id="ueber">
      <SectionHeader tag="Wer wir sind" title="Dein Tor zur Finanzwelt" />
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 17, color: TEXT, lineHeight: 1.8, marginBottom: 24 }}>Wir sind ein studentischer Verein für alle, die sich für Wirtschaft und Finanzen interessieren. Unser Ziel: Finanzielle Bildung zugänglich machen und Studierenden echte Möglichkeiten eröffnen.</p>
        <p style={{ fontSize: 16, color: TEXT_MUTED, lineHeight: 1.7 }}>Bei uns bekommst du nicht nur Theorie, sondern Einblicke in die Praxis. Wir bringen Studierende mit Unternehmen zusammen, organisieren Workshops und Vorträge und schaffen ein Umfeld, in dem man lernt und gleichzeitig Spaß hat.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 56 }}>
        {[{ icon: '📍', text: 'Nördlichster Verein im BVH', href: 'https://www.bvh.org' },{ icon: '🤝', text: 'Direkter Draht zu Unternehmen', href: null },{ icon: '🏛', text: 'BVH-Konferenz in Frankfurt', href: null },{ icon: '📜', text: 'Börsenführerschein & Netzwerk', href: null },{ icon: '👥', text: 'Community mit gleichen Interessen', href: null }].map((f, i) => (
          <FadeInUp key={f.text} delay={i * 90}>
            <HoverCard style={{ padding: '24px 20px', textAlign: 'center', background: BG, height: '100%' }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
              {f.href
                ? <a href={f.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: BLUE }}>{f.text} ↗</a>
                : <div style={{ fontSize: 14, fontWeight: 600, color: ACCENT }}>{f.text}</div>
              }
            </HoverCard>
          </FadeInUp>
        ))}
      </div>
    </Section>
  );
}

function Vorteile() {
  const items = [
    { title: 'Vorträge', desc: 'Referenten unserer Partnerunternehmen geben Einblicke in Wirtschaft und Finanzen. Im Anschluss kannst du dich beim Get-together direkt austauschen.' },
    { title: 'Interaktive Workshops', desc: 'In Kooperation mit unseren Partnern bearbeitest du echte Fallstudien und wendest theoretisches Wissen auf konkrete Problemstellungen an.' },
    { title: 'Börsenführerschein', desc: 'Geschichte der Börse, Analysetechniken und Finanzinstrumente. Optional: Certified Finance Student (CFS) mit Creditpoints.' },
    { title: 'Fachzeitschriften', desc: 'Kostenloser Zugang zu zahlreichen Fachzeitschriften und Vorteilen des Dachverbands, inklusive BVH Akademie.' },
    { title: 'Netzwerk & Stammtische', desc: 'Persönlicher Austausch mit Unternehmen und Gleichgesinnten — fachliche Events und gesellige Stammtische.' },
    { title: 'BVH-Konferenz Frankfurt', desc: 'Ein Wochenende mit Recruitern, Workshops, Börsenführung und Studierenden aus ganz Deutschland.' },
  ];
  return (
    <Section id="vorteile" bg={BG}>
      <SectionHeader tag="Mitgliedschaft" title="Weil du mehr willst als nur Vorlesungen." subtitle="Du brauchst kein Vorwissen — nur Interesse." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        {items.map((item, i) => (
          <HoverCard key={i} style={{ padding: '28px 24px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.06em', marginBottom: 8 }}>0{i + 1}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: ACCENT, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{item.desc}</p>
          </HoverCard>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <Link href="/mitglied" style={{ display: 'inline-block', padding: '14px 36px', background: BLUE, color: 'white', fontSize: 15, fontWeight: 600, borderRadius: 10, boxShadow: `0 4px 20px ${BLUE}30` }}>Jetzt Mitglied werden</Link>
      </div>
    </Section>
  );
}

function TeamPreview() {
  const vorstand = [
    { name: 'Colin Lohse', role: 'Vorstandsvorsitzender', desc: 'Schüler am Fördegymnasium', img: '/images/team/colin-lohse.png', linkedin: 'https://www.linkedin.com/in/colin-lohse/' },
    { name: 'Daneel Klink', role: 'Stellv. Vorsitzender', desc: 'Junior IT-Security Specialist, Meesenburg Gruppe', img: '/images/team/daneel-klink.png', linkedin: 'https://www.linkedin.com/in/daneel-klink-b83917337/' },
    { name: 'Jakob Barth', role: 'Finanzvorstand', desc: 'Studium Finanzmanagement, IU', img: null, linkedin: 'https://www.linkedin.com/in/jakob-barth-0a4196300/' },
  ];
  return (
    <Section id="team">
      <SectionHeader tag="Team" title="Die Menschen hinter dem BFC" subtitle="Ehrenamtlich. Engagiert. Für euch." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {vorstand.map(p => (
          <HoverCard key={p.name} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: 260, background: `${ACCENT}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              {p.img ? <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} /> :
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 24, color: ACCENT }}>{p.name.split(' ').map(n => n[0]).join('')}</span></div>}
            </div>
            <div style={{ padding: '20px 20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: ACCENT }}>{p.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, marginTop: 2 }}>{p.role}</div>
                </div>
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" style={{ width: 32, height: 32, borderRadius: 8, background: `${ACCENT}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={ACCENT}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginTop: 8 }}>{p.desc}</div>
            </div>
          </HoverCard>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
        <Link href="/team" style={{ padding: '12px 28px', background: ACCENT, color: 'white', fontSize: 14, fontWeight: 600, borderRadius: 8 }}>Gesamtes Team ansehen</Link>
        <Link href="/alumni" style={{ padding: '12px 28px', background: 'transparent', color: ACCENT, fontSize: 14, fontWeight: 600, borderRadius: 8, border: `1.5px solid ${BORDER}` }}>Unsere Alumni</Link>
      </div>
    </Section>
  );
}

function PartnerLogo({ src, name }) {
  const [err, setErr] = useState(false);
  if (err) return <span style={{ fontSize: 20, fontWeight: 700, color: ACCENT }}>{name}</span>;
  return <Image src={src} alt={name} width={170} height={44} style={{ maxHeight: 44, maxWidth: 170, objectFit: 'contain', width: 'auto', height: 'auto' }} onError={() => setErr(true)} />;
}

function PartnerSection() {
  const partners = [
    { name: 'Bundesverband der Börsenvereine (BVH)', desc: 'Dachverband von über 70 Hochschulvereinen & über 24.000 Studierenden. Mehr Infos & alle Vereine auf bvh.org.', logo: '/images/logos/bvh.png', href: 'https://www.bvh.org' },
    { name: 'BDO', desc: 'Internationale Wirtschaftsprüfungs- und Beratungsgesellschaft. Über 94.000 Mitarbeiter in 169 Ländern.', logo: '/images/logos/bdo.png', href: 'https://www.bdo.de' },
    { name: 'PrepLounge', desc: 'Die führende Plattform für Interview-Vorbereitung in Consulting und Finance.', logo: '/images/logos/preplounge.png', href: 'https://www.preplounge.com' },
    { name: 'Finanzfluss', desc: 'Deutschlands führende Plattform für Finanzbildung - mit über 1,5 Mio. YouTube-Abonnenten und finanzfluss.de.', logo: '/images/logos/Finanzfluss_Logo.png', href: 'https://www.finanzfluss.de' },
    { name: 'EEP', desc: 'Wirtschaftsprüfungs- und Steuerberatungsgesellschaft in Flensburg — kompetente Beratung für Unternehmen und Privatpersonen.', logo: '/images/logos/eep.svg', href: 'https://www.eep.info' },
  ];
  return (
    <Section id="partner" bg={BG}>
      <SectionHeader tag="Kooperationen" title="Unsere Partner" subtitle="Gemeinsam schaffen wir echten Mehrwert für unsere Mitglieder." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
        {partners.map((p, i) => (
          <FadeInUp key={p.name} delay={i * 100}>
            <HoverCard style={{ padding: '28px 28px 28px', height: '100%' }}>
              <div style={{ height: 64, display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <PartnerLogo src={p.logo} name={p.name} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: ACCENT, marginBottom: 10 }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6, marginBottom: p.href ? 16 : 0 }}>{p.desc}</p>
              {p.href && (
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: BLUE, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Website besuchen
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
              )}
            </HoverCard>
          </FadeInUp>
        ))}
        <FadeInUp delay={partners.length * 100}>
          <Link href="/kontakt" style={{ textDecoration: 'none', borderRadius: 12, border: `2px dashed ${BORDER}`, padding: '28px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 12, transition: 'border-color 0.2s, background 0.2s', minHeight: 180, background: 'transparent', cursor: 'pointer', height: '100%', boxSizing: 'border-box' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.background = `${BLUE}06`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.background = 'transparent'; }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', border: `1.5px dashed ${BLUE}60`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: ACCENT }}>Hier könnte Ihr Unternehmen stehen</div>
            <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5 }}>Werden Sie Partner des BFC Flensburg und erreichen Sie motivierte Studierende.</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLUE }}>Jetzt Kontakt aufnehmen →</div>
          </Link>
        </FadeInUp>
      </div>
      <div style={{ marginBottom: 48 }}>
        <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: TEXT_MUTED, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Zugang zu Fachzeitschriften & weiteren Partnern</div>
        <LogoSlider />
      </div>
      <HoverCard style={{ padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, borderColor: `${BLUE}25` }} className="partner-cta">
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>Sie möchten motivierte Studierende erreichen?</div>
          <div style={{ fontSize: 14, color: TEXT_MUTED }}>Workshops, Unternehmenspräsentationen, Networking-Events — wir machen es möglich.</div>
        </div>
        <Link href="/kontakt" style={{ padding: '12px 28px', background: BLUE, color: 'white', fontSize: 14, fontWeight: 600, borderRadius: 8, whiteSpace: 'nowrap' }}>Kontakt aufnehmen</Link>
      </HoverCard>
    </Section>
  );
}

function Events() {
  const types = ['Fachvorträge', 'Workshops', 'Stammtische & Get-Together', 'Networking-Events', 'Unternehmensbesuche'];
  return (
    <Section id="events" bg={BG}>
      <SectionHeader tag="Events" title="Über 20 Veranstaltungen im letzten Jahr" subtitle="Und wir bauen weiter aus." />
      <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        <HoverCard style={{ padding: 0, overflow: 'hidden', background: `linear-gradient(135deg, ${ACCENT}, #1554BB)` }}>
          <div style={{ padding: '32px 28px 20px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Highlight</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: 'white', marginBottom: 12 }}>BVH-Konferenz in Frankfurt</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Ein Wochenende mit Studierenden aus ganz Deutschland. Business Speed-Dating, Workshops, Börsenführung und Networking mit großen Unternehmen.</p>
          </div>
          <div className="bvh-photos" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 12px 12px' }}>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
              <Image src="/images/bvh-boerse.jpg" alt="Deutsche Börse Frankfurt" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
            </div>
            <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
              <Image src="/images/bvh-gebaeude.jpg" alt="BVH Konferenz Frankfurt" fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
            </div>
          </div>
        </HoverCard>
        <HoverCard style={{ padding: '32px 28px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Unsere Formate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {types.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#F8FAFC', borderRadius: 8, border: `1px solid ${BORDER}` }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: BLUE, flexShrink: 0 }} />
                <span style={{ fontSize: 15, color: TEXT }}>{t}</span>
              </div>
            ))}
          </div>
        </HoverCard>
      </div>
    </Section>
  );
}

function PhotoTile({ src, label, pos = 'center', style: s = {}, className = '' }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', ...s }}
    >
      <Image src={src} alt={label} fill style={{ objectFit: 'cover', objectPosition: pos, transition: 'transform 0.5s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 16px', background: 'linear-gradient(transparent, rgba(12,53,115,0.6))', opacity: hovered ? 1 : 0.75, transition: 'opacity 0.3s' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'white', letterSpacing: '0.01em' }}>{label}</span>
      </div>
    </div>
  );
}

function PhotoMosaic() {
  return (
    <section style={{ background: BG, padding: '0 24px clamp(60px, 8vw, 90px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Einblicke</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: ACCENT }}>Leben im BFC Flensburg</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gridTemplateRows: '300px 200px', gap: 12 }} className="mosaic-grid">
          <PhotoTile src="/images/pexels-yr-9755155-6370532.jpg" label="Zuhause an der Flensburger Förde" pos="center" style={{ gridRow: '1 / 3' }} className="mosaic-hero" />
          <PhotoTile src="/images/pexels-artempodrez-5716053.jpg" label="Netzwerk & Kontakte" pos="center" />
          <PhotoTile src="/images/pexels-olly-3931604.jpg" label="Gemeinsam mehr erreichen" pos="center top" />
        </div>
        <style>{`@media(max-width:640px){.mosaic-grid{grid-template-columns:1fr!important;grid-template-rows:240px 180px 180px!important}.mosaic-hero{grid-row:auto!important}}`}</style>
      </div>
    </section>
  );
}

function ImageBreak() {
  return (
    <section style={{ background: BG, padding: 'clamp(60px, 8vw, 90px) 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="imgbreak-grid">
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Netzwerk & Praxis</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(26px, 3.5vw, 40px)', color: ACCENT, fontWeight: 700, lineHeight: 1.2, marginBottom: 18 }}>
            Finanzwelt hautnah.<br />Nicht nur in der Vorlesung.
          </h2>
          <p style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.7, marginBottom: 28 }}>
            Wir bringen dich in Kontakt mit echten Entscheidern aus Wirtschaft und Finanzen — durch Events, Workshops und das bundesweite BVH-Netzwerk.
          </p>
          <Link href="/mitglied" style={{ display: 'inline-block', padding: '12px 28px', background: BLUE, color: 'white', fontSize: 14, fontWeight: 600, borderRadius: 8, boxShadow: `0 4px 20px ${BLUE}35` }}>Jetzt dabei sein</Link>
        </div>
        <div style={{ borderRadius: 16, overflow: 'hidden', height: 380, boxShadow: '0 8px 40px rgba(12,53,115,0.10)', position: 'relative' }}>
          <Image src="/images/clemens-van-lay-koHhkSv_EU8-unsplash.jpg" alt="Finanzwelt" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} />
        </div>
      </div>
      <style>{`@media(max-width:768px){.imgbreak-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function MitgliedCTA() {
  return (
    <section style={{ background: BG, padding: 'clamp(60px, 8vw, 90px) 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #1554BB 100%)`, borderRadius: 24, padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', boxShadow: `0 20px 60px rgba(12,53,115,0.18)` }}>
          <Image src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" width={64} height={64} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', display: 'block', margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px, 4vw, 46px)', color: 'white', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
            Werde Mitglied beim<br /><span style={{ color: '#7EC8F8' }}>BFC Flensburg</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 8 }}>
            Nur <strong style={{ color: 'white' }}>12 € pro Halbjahr</strong> für Studierende & Azubis.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 36 }}>
            Zugang zu Events, Workshops, Fachzeitschriften & dem bundesweiten BVH-Netzwerk.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/mitglied" style={{ padding: '14px 36px', background: 'white', color: ACCENT, fontSize: 15, fontWeight: 700, borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>Mitglied werden</Link>
            <Link href="/kontakt" style={{ padding: '14px 28px', background: 'rgba(255,255,255,0.12)', color: 'white', fontSize: 15, fontWeight: 500, borderRadius: 10, border: '1px solid rgba(255,255,255,0.25)' }}>Frage stellen</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Was genau macht ihr eigentlich?', a: 'Wir organisieren Vorträge, Workshops und Events und ermöglichen unseren Mitgliedern Zugang zum bundesweiten Netzwerk des BVH.' },
    { q: 'Muss ich BWL studieren?', a: 'Nein. Interesse und Motivation sind entscheidend, nicht dein Studiengang.' },
    { q: 'Brauche ich Vorkenntnisse?', a: 'Nein. Unsere Veranstaltungen bieten sowohl Einsteigern als auch Fortgeschrittenen Möglichkeiten zu profitieren.' },
    { q: 'Was kostet die Mitgliedschaft?', a: '12 Euro pro Halbjahr für Studierende und Auszubildende, 22 Euro für alle anderen.' },
    { q: 'Wie werde ich Mitglied?', a: 'Du füllst das Beitrittsformular auf unserer Website aus und wir melden uns zeitnah bei dir.' },
    { q: 'Kann ich erst reinschnuppern?', a: 'Ja. Du kannst gerne an ausgewählten Veranstaltungen teilnehmen und dir selbst ein Bild machen.' },
    { q: 'Wie kann ich kündigen?', a: 'Per E-Mail an info@bfc-flensburg.de. Die Kündigung ist bis zum Zahlungsziel (01.04. / 01.10.) ohne Einhaltung einer Frist möglich.' },
  ];
  return (
    <Section id="faq" bg={BG}>
      <SectionHeader tag="FAQ" title="Häufig gestellte Fragen" />
      <div style={{ maxWidth: 700, margin: '0 auto', background: CARD_BG, borderRadius: 16, border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(12,53,115,0.06)', overflow: 'hidden' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: i < faqs.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '20px 28px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: "var(--font-body)" }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: ACCENT, textAlign: 'left' }}>{f.q}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="2" style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 16 }}><path d="M12 5v14M5 12h14" /></svg>
            </button>
            <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
              <div style={{ padding: '0 28px 20px', fontSize: 15, color: TEXT_MUTED, lineHeight: 1.6 }}>{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  const socials = [
    { href: 'https://www.linkedin.com/company/bfc-flensburg', label: 'LinkedIn', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { href: 'https://www.instagram.com/bfc.flensburg/', label: 'Instagram', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { href: 'mailto:info@bfc-flensburg.de', label: 'E-Mail', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg> },
  ];
  return (
    <footer style={{ background: ACCENT, padding: '40px 24px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* White card */}
        <div style={{ background: 'white', borderRadius: 20, padding: 'clamp(28px, 4vw, 44px) clamp(24px, 4vw, 48px)', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>

          {/* Nav grid */}
          <div className="footer-nav-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', gap: '24px 32px', paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>

            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: ACCENT, marginBottom: 10 }}>Business and Finance Club Flensburg e.V.</div>
              <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.8 }}>
                Kanzleistr. 91–93<br />24943 Flensburg<br />
                <a href="mailto:info@bfc-flensburg.de" style={{ color: BLUE }}>info@bfc-flensburg.de</a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Verein</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="#ueber" style={{ fontSize: 13, color: TEXT_MUTED }}>Über uns</a>
                <a href="#partner" style={{ fontSize: 13, color: TEXT_MUTED }}>Partner</a>
                <a href="#events" style={{ fontSize: 13, color: TEXT_MUTED }}>Events</a>
                <Link href="/team" style={{ fontSize: 13, color: TEXT_MUTED }}>Das Team</Link>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Mitmachen</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href="/mitglied" style={{ fontSize: 13, color: TEXT_MUTED }}>Mitglied werden</Link>
                <Link href="/mitglied" style={{ fontSize: 13, color: TEXT_MUTED }}>Beitrittsformular</Link>
                <Link href="/kontakt" style={{ fontSize: 13, color: TEXT_MUTED }}>Kontakt</Link>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Events</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="#events" style={{ fontSize: 13, color: TEXT_MUTED }}>Veranstaltungen</a>
                <a href="#events" style={{ fontSize: 13, color: TEXT_MUTED }}>BVH Konferenz</a>
                <a href="https://www.bvh.org" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: TEXT_MUTED }}>BVH ↗</a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 12 }}>Mitglied werden</div>
              <Link href="/mitglied" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', background: ACCENT, color: 'white', fontSize: 13, fontWeight: 600, borderRadius: 10, textDecoration: 'none' }}>
                Mitglied werden
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </Link>
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(16px, 3vw, 40px)', padding: '20px 0', borderBottom: `1px solid ${BORDER}`, flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: ACCENT, textDecoration: 'none' }}>
                {s.icon}{s.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28, paddingTop: 20, flexWrap: 'wrap' }}>
            <Link href="/impressum" style={{ fontSize: 13, color: TEXT_MUTED }}>Impressum</Link>
            <Link href="/datenschutz" style={{ fontSize: 13, color: TEXT_MUTED }}>Datenschutz</Link>
            <span style={{ fontSize: 13, color: TEXT_MUTED }}>© {new Date().getFullYear()} BFC Flensburg e.V.</span>
          </div>
          <div style={{ textAlign: 'center', paddingTop: 12 }}>
            <span style={{ fontSize: 12, color: TEXT_MUTED }}>Made with ❤️ in Flensburg by <a href="https://de.linkedin.com/in/daneel-klink" target="_blank" rel="noopener noreferrer" style={{ color: TEXT_MUTED, textDecoration: 'underline' }}>Klink</a></span>
          </div>
        </div>

        {/* Logo below card */}
        <div style={{ textAlign: 'center', paddingTop: 40 }}>
          <Image src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" width={52} height={52} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: 10 }} />
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: 'white' }}>BFC <span style={{ color: '#7EC8F8' }}>Flensburg</span></div>
        </div>
      </div>
      <style>{`@media(max-width:860px){.footer-nav-grid{grid-template-columns:1fr 1fr 1fr!important}}@media(max-width:540px){.footer-nav-grid{grid-template-columns:1fr 1fr!important}}`}</style>
    </footer>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NGO',
      '@id': 'https://www.bfc-flensburg.de/#organization',
      name: 'Business and Finance Club Flensburg e.V.',
      alternateName: 'BFC Flensburg',
      url: 'https://www.bfc-flensburg.de',
      logo: 'https://www.bfc-flensburg.de/images/Logo/bfc_logo.png',
      email: 'info@bfc-flensburg.de',
      address: { '@type': 'PostalAddress', streetAddress: 'Kanzleistr. 91–93', addressLocality: 'Flensburg', postalCode: '24943', addressCountry: 'DE' },
      sameAs: ['https://www.linkedin.com/company/bfc-flensburg', 'https://www.instagram.com/bfc.flensburg/'],
      memberOf: { '@type': 'Organization', name: 'Bundesverband der Börsenvereine an deutschen Hochschulen (BVH)', url: 'https://www.bvh.org' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.bfc-flensburg.de/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'Was genau macht ihr eigentlich?', acceptedAnswer: { '@type': 'Answer', text: 'Wir organisieren Vorträge, Workshops und Events und ermöglichen unseren Mitgliedern Zugang zum bundesweiten Netzwerk des BVH.' } },
        { '@type': 'Question', name: 'Muss ich BWL studieren?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Interesse und Motivation sind entscheidend, nicht dein Studiengang.' } },
        { '@type': 'Question', name: 'Brauche ich Vorkenntnisse?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Unsere Veranstaltungen bieten sowohl Einsteigern als auch Fortgeschrittenen Möglichkeiten zu profitieren.' } },
        { '@type': 'Question', name: 'Was kostet die Mitgliedschaft?', acceptedAnswer: { '@type': 'Answer', text: '12 Euro pro Halbjahr für Studierende und Auszubildende, 22 Euro für alle anderen.' } },
        { '@type': 'Question', name: 'Wie werde ich Mitglied?', acceptedAnswer: { '@type': 'Answer', text: 'Du füllst das Beitrittsformular auf unserer Website aus und wir melden uns zeitnah bei dir.' } },
        { '@type': 'Question', name: 'Kann ich erst reinschnuppern?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Du kannst gerne an ausgewählten Veranstaltungen teilnehmen und dir selbst ein Bild machen.' } },
        { '@type': 'Question', name: 'Wie kann ich kündigen?', acceptedAnswer: { '@type': 'Answer', text: 'Per E-Mail an info@bfc-flensburg.de. Die Kündigung ist bis zum Zahlungsziel (01.04. / 01.10.) möglich.' } },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <Hero />
      <UeberUns />
      <PartnerSection />
      <ChristianRoehl />
      <Vorteile />
      <ImageBreak />
      <Events />
      <PhotoMosaic />
      <MitgliedCTA />
      <FAQ />
      <Footer />
    </>
  );
}
