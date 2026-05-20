import Link from 'next/link';
import { PIECES, MAISONS } from '@/lib/data';
import { BrassRule, MonoCaps, Button, Maison } from '@/components/Atoms';
import { ProductCard } from '@/components/ProductCard';
import { LampSilhouette } from '@/components/LampSilhouette';

export default function HomePage() {
  const featured = PIECES.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '120px 56px 96px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 64,
        alignItems: 'end',
      }}>
        <div>
          <MonoCaps size={11} opacity={0.6}>№ 001 · MILANO · MMXXVI</MonoCaps>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 88,
            lineHeight: 1.02,
            letterSpacing: '0.02em',
            margin: '20px 0 28px',
            maxWidth: '14ch',
          }}>
            <em style={{ fontStyle: 'italic' }}>Italian lighting,</em><br />returned.
          </h1>
          <BrassRule width={80} style={{ margin: '0 0 28px' }} />
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            lineHeight: 1.65,
            maxWidth: '52ch',
            margin: '0 0 36px',
          }}>
            A private dealer of authored Italian lighting from the late post-war period through the early radical years and beyond. Documented pieces by{' '}
            <Maison>Stilnovo</Maison>,{' '}
            <Maison>Arteluce</Maison>,{' '}
            <Maison>Arredoluce</Maison>,{' '}
            <Maison>Flos</Maison>,{' '}
            <Maison>O‑Luce</Maison>.{' '}
            We do not list pieces we have not handled.
          </p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalogue" style={{ border: 0 }}>
              <Button>VEDI IL CATALOGO · VIEW CATALOGUE</Button>
            </Link>
            <Link href="/contact" style={{ border: 0 }}>
              <Button variant="brass">Richiedi un appuntamento →</Button>
            </Link>
          </div>
        </div>
        <div style={{
          background: 'var(--carta)',
          aspectRatio: '4/5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LampSilhouette tone="#E8E1D2" scale={1.7} />
        </div>
      </section>

      <BrassRule width={80} style={{ margin: '0 56px' }} />

      {/* Featured pieces */}
      <section style={{ padding: '80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 40,
            letterSpacing: '0.02em',
            margin: 0,
          }}>
            <em style={{ fontStyle: 'italic' }}>Ritorni</em> — latest pieces
          </h2>
          <Link href="/catalogue" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--ottone-brunito)',
            borderBottom: '1px solid var(--ottone-brunito)',
            paddingBottom: 2,
          }}>VEDI TUTTI · VIEW ALL →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px 48px' }}>
          {featured.map(p => <ProductCard key={p.lot} piece={p} />)}
        </div>
      </section>

      <BrassRule width={80} style={{ margin: '0 56px' }} />

      {/* Manifesto */}
      <section style={{ padding: '80px 56px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64 }}>
        <div>
          <MonoCaps size={11} opacity={0.6}>§ MANIFESTO</MonoCaps>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 36,
            letterSpacing: '0.01em',
            lineHeight: 1.15,
            margin: '14px 0 0',
            maxWidth: '16ch',
          }}>
            Documented, restored, returned to circulation.
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.75, maxWidth: '58ch' }}>
          <p style={{ marginTop: 0, marginBottom: '1em' }}>
            Each piece is examined in person before it enters the catalogue. We document the maker, the period of production, and the chain of ownership where it can be established. Where it cannot, we say so plainly — honesty over inflation.
          </p>
          <p style={{ marginBottom: 0 }}>
            Wiring is brought to current Italian standards before a piece leaves the workshop. Original labels are preserved; replaced parts are noted.{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>The lamp leaves us doing its job.</span>
          </p>
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              ['§01', 'Documented', 'Maker, period, provenance.'],
              ['§02', 'Restored', 'CE-compliant rewiring; original labels preserved.'],
              ['§03', 'Returned', 'To a next chapter, not a showroom shelf.'],
            ].map(([n, h, b]) => (
              <div key={n}>
                <MonoCaps size={10} opacity={0.55} style={{ color: 'var(--ottone-brunito)' }}>{n}</MonoCaps>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, marginTop: 8 }}>{h}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.55, marginTop: 6, opacity: 0.85 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrassRule width={80} style={{ margin: '0 56px' }} />

      {/* Maisons row */}
      <section style={{ padding: '72px 56px 96px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 36,
            letterSpacing: '0.01em',
            margin: 0,
          }}>
            <em style={{ fontStyle: 'italic' }}>Maisons</em> represented
          </h2>
          <MonoCaps size={11} opacity={0.6}>10 case · 1932 — present</MonoCaps>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px 40px' }}>
          {MAISONS.map(m => (
            <div key={m.name} style={{ paddingBottom: 14, borderBottom: '1px solid rgba(20,20,20,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, letterSpacing: '0.01em' }}>{m.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
