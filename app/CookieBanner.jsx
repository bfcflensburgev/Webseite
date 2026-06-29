'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-accepted')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-accepted', '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      background: 'white',
      border: '1px solid #BDD7F5',
      borderRadius: 14,
      boxShadow: '0 8px 40px rgba(12,53,115,0.14)',
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      maxWidth: 560,
      width: 'calc(100vw - 32px)',
      flexWrap: 'wrap',
    }}>
      <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.5, flex: 1, minWidth: 200, margin: 0 }}>
        Diese Website verwendet ausschließlich technisch notwendige Cookies.
        Keine Tracking- oder Analyse-Cookies.{' '}
        <a href="/datenschutz" style={{ color: '#0C3573', fontWeight: 600, textDecoration: 'underline' }}>
          Datenschutz
        </a>
      </p>
      <button
        onClick={accept}
        style={{
          background: '#0C3573',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          padding: '9px 22px',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
        }}
      >
        OK, verstanden
      </button>
    </div>
  );
}
