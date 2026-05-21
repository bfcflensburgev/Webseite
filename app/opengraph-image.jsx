import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BFC Flensburg – Business and Finance Club';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ background: '#0C3573', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <div style={{ color: 'white', fontSize: 72, fontWeight: 700, letterSpacing: '-2px', display: 'flex' }}>
          BFC&nbsp;<span style={{ color: '#7EC8F8' }}>Flensburg</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 28, display: 'flex' }}>
          Business and Finance Club Flensburg e.V.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, background: 'rgba(255,255,255,0.1)', padding: '10px 24px', borderRadius: 32 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px 3px rgba(34,197,94,0.5)', display: 'flex' }} />
          <span style={{ color: 'white', fontSize: 20, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex' }}>
            Nördlichster Börsenverein Deutschlands
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
