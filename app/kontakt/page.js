'use client';
import { useState } from 'react';
import Link from 'next/link';

const ACCENT = '#0C3573';
const BLUE = '#071f4e';
const BG = '#FFFFFF';
const BG_ALT = '#E8F4FD';
const BORDER = '#BDD7F5';
const TEXT = '#1a1a1a';
const TEXT_MUTED = '#6B7280';
const ERROR = '#DC2626';
const SUCCESS = '#059669';

const FORMSPREE_ID = 'mvzygkvk';

export default function KontaktPage() {
  const [form, setForm] = useState({ name: '', email: '', betreff: '', nachricht: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const set = (key) => (e) => {
    setForm(f => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Bitte Namen angeben';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Bitte gültige E-Mail angeben';
    if (!form.nachricht.trim()) e.nachricht = 'Bitte Nachricht eingeben';
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ Name: form.name, Email: form.email, Betreff: form.betreff, Nachricht: form.nachricht }),
      });
      if (res.ok) setSubmitted(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    }
    setSubmitting(false);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', fontSize: 15,
    border: `1.5px solid ${BORDER}`, borderRadius: 10,
    background: BG, color: TEXT, fontFamily: 'var(--font-body)',
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ textAlign: 'center', maxWidth: 480, background: BG, padding: '48px 32px', borderRadius: 20, border: `1px solid ${BORDER}` }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${SUCCESS}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={SUCCESS} strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: ACCENT, marginBottom: 12 }}>Nachricht gesendet!</h2>
          <p style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.6, marginBottom: 28 }}>Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.</p>
          <Link href="/" style={{ display: 'inline-block', padding: '12px 28px', background: BLUE, color: 'white', fontSize: 14, fontWeight: 600, borderRadius: 10 }}>Zurück zur Startseite</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,53,115,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', height: 64, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/images/Logo/bfc_logo.png" alt="BFC Flensburg" style={{ height: 36, width: 36, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'white' }}>BFC <span style={{ color: '#7EC8F8' }}>Flensburg</span></span>
        </Link>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Zurück
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ background: ACCENT, paddingTop: 100, paddingBottom: 60, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 50%, ${BLUE}15 0%, transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${BLUE}20`, padding: '7px 18px', borderRadius: 24, marginBottom: 20, border: `1px solid ${BLUE}30` }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Kontakt</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 48px)', color: 'white', fontWeight: 700, lineHeight: 1.2, marginBottom: 14 }}>
            Schreib uns eine Nachricht
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
            Fragen zur Mitgliedschaft, zu Events oder zur Zusammenarbeit — wir freuen uns von dir zu hören.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: BG, padding: 'clamp(48px, 8vw, 80px) 24px' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>

          {/* Quick contact info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 40 }} className="kontakt-grid">
            {[
              { icon: '✉️', label: 'E-Mail', value: 'info@bfc-flensburg.de', href: 'mailto:info@bfc-flensburg.de' },
              { icon: '📍', label: 'Adresse', value: 'Kanzleistr. 91–93, 24943 Flensburg', href: null },
            ].map(c => (
              <div key={c.label} style={{ padding: '20px 22px', background: BG_ALT, borderRadius: 12, border: `1px solid ${BORDER}` }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} style={{ fontSize: 14, color: ACCENT, fontWeight: 500 }}>{c.value}</a>
                  : <div style={{ fontSize: 14, color: TEXT_MUTED }}>{c.value}</div>}
              </div>
            ))}
          </div>

          {/* Form fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }} className="form-grid-2">
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 6 }}>Name <span style={{ color: BLUE }}>*</span></label>
              <input value={form.name} onChange={set('name')} placeholder="Dein Name"
                style={{ ...inputStyle, borderColor: errors.name ? ERROR : BORDER }}
                onFocus={e => e.target.style.borderColor = BLUE}
                onBlur={e => e.target.style.borderColor = errors.name ? ERROR : BORDER} />
              <span style={{ fontSize: 12, color: ERROR, minHeight: 18, display: 'block', marginTop: 4, visibility: errors.name ? 'visible' : 'hidden' }}>{errors.name || ' '}</span>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 6 }}>E-Mail <span style={{ color: BLUE }}>*</span></label>
              <input value={form.email} onChange={set('email')} type="email" placeholder="deine@email.de"
                style={{ ...inputStyle, borderColor: errors.email ? ERROR : BORDER }}
                onFocus={e => e.target.style.borderColor = BLUE}
                onBlur={e => e.target.style.borderColor = errors.email ? ERROR : BORDER} />
              <span style={{ fontSize: 12, color: ERROR, minHeight: 18, display: 'block', marginTop: 4, visibility: errors.email ? 'visible' : 'hidden' }}>{errors.email || ' '}</span>
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 6 }}>Betreff</label>
            <input value={form.betreff} onChange={set('betreff')} placeholder="Worum geht es?"
              style={{ ...inputStyle, borderColor: BORDER }}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = BORDER} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 6 }}>Nachricht <span style={{ color: BLUE }}>*</span></label>
            <textarea value={form.nachricht} onChange={set('nachricht')} rows={6} placeholder="Deine Nachricht..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: 140, borderColor: errors.nachricht ? ERROR : BORDER }}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = errors.nachricht ? ERROR : BORDER} />
            <span style={{ fontSize: 12, color: ERROR, minHeight: 18, display: 'block', marginTop: 4, visibility: errors.nachricht ? 'visible' : 'hidden' }}>{errors.nachricht || ' '}</span>
          </div>

          {submitError && (
            <div style={{ padding: '14px 18px', background: `${ERROR}10`, border: `1px solid ${ERROR}30`, borderRadius: 10, marginBottom: 16, fontSize: 14, color: ERROR }}>
              Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt an info@bfc-flensburg.de.
            </div>
          )}

          <button onClick={handleSubmit} disabled={submitting}
            style={{ width: '100%', padding: '15px 32px', fontSize: 15, fontWeight: 600, color: 'white', background: submitting ? TEXT_MUTED : BLUE, border: 'none', borderRadius: 10, cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-body)', transition: 'background 0.2s', boxShadow: `0 4px 20px ${BLUE}30` }}
            onMouseEnter={e => { if (!submitting) e.target.style.background = '#1976D2'; }}
            onMouseLeave={e => { if (!submitting) e.target.style.background = BLUE; }}
          >
            {submitting ? 'Wird gesendet…' : 'Nachricht senden'}
          </button>

          <p style={{ textAlign: 'center', fontSize: 13, color: TEXT_MUTED, marginTop: 14 }}>
            Oder direkt per E-Mail: <a href="mailto:info@bfc-flensburg.de" style={{ color: BLUE, fontWeight: 600 }}>info@bfc-flensburg.de</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: ACCENT, padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'white' }}>BFC <span style={{ color: '#7EC8F8' }}>Flensburg</span></span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/datenschutz" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Datenschutz</Link>
            <Link href="/impressum" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Impressum</Link>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} BFC Flensburg e.V.</div>
        </div>
      </footer>
      <style>{`@media(max-width:520px){.kontakt-grid{grid-template-columns:1fr!important}.form-grid-2{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
