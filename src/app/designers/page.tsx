'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DESIGNERS } from '@/lib/data';
import { BrassRule, MonoCaps, Button } from '@/components/Atoms';

export default function DesignersPage() {
  const [active, setActive] = useState(0);
  const d = DESIGNERS[active];

  return (
    <div style={{ padding: '64px 56px 96px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 56,
          fontWeight: 400,
          letterSpacing: '0.02em',
          margin: 0,
          lineHeight: 1,
        }}>
          <em style={{ fontStyle: 'italic' }}>Designers</em>
        </h1>
        <MonoCaps opacity={0.6}>{DESIGNERS.length} autori · 1932 — presente</MonoCaps>
      </div>
      <BrassRule width={80} style={{ margin: '24px 0 48px' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr', gap: 80, alignItems: 'start' }}>
        {/* Index list */}
        <div>
          {DESIGNERS.map((des, i) => (
            <div
              key={des.name}
              onClick={() => setActive(i)}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                padding: '20px 0',
                alignItems: 'baseline',
                borderBottom: '1px solid rgba(20,20,20,0.08)',
                cursor: 'pointer',
                opacity: active === i ? 1 : 0.65,
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, letterSpacing: '0.01em', lineHeight: 1.1 }}>
                  {active === i ? <em style={{ fontStyle: 'italic' }}>{des.name}</em> : des.name}
                </div>
                <MonoCaps size={10} opacity={0.6} style={{ marginTop: 6, display: 'inline-block' }}>
                  {des.years} · {des.city}
                </MonoCaps>
              </div>
              <MonoCaps size={11} style={{
                color: active === i ? 'var(--ottone-brunito)' : 'var(--inchiostro)',
                opacity: active === i ? 1 : 0.55,
              }}>
                {des.pieces} pezzi {active === i ? '→' : ''}
              </MonoCaps>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ position: 'sticky', top: 32 }}>
          <MonoCaps size={11} opacity={0.6}>§ DESIGNER {String(active + 1).padStart(2, '0')} / {String(DESIGNERS.length).padStart(2, '0')}</MonoCaps>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 48,
            fontWeight: 400,
            letterSpacing: '0.01em',
            lineHeight: 1.05,
            margin: '14px 0 8px',
          }}>
            <em style={{ fontStyle: 'italic' }}>{d.name}</em>
          </h2>
          <MonoCaps size={11}>{d.years} · {d.city.toUpperCase()}</MonoCaps>
          <BrassRule width={48} style={{ margin: '24px 0' }} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.7, maxWidth: '54ch', marginBottom: 0 }}>
            {d.bio}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px 24px', marginTop: 24, marginBottom: 32 }}>
            <MonoCaps size={10} opacity={0.55}>MAISON</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>{d.maison}</div>
            <MonoCaps size={10} opacity={0.55}>IN CATALOGO</MonoCaps>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>{d.pieces} pezzi documentati</div>
          </div>
          <Link href="/catalogue" style={{ border: 0 }}>
            <Button variant="ghost">VEDI I PEZZI · VIEW PIECES</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
