import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PIECES } from '@/lib/data';
import { LotMark, BrassRule, MonoCaps, Button, ProvenanceChain } from '@/components/Atoms';
import { LampSilhouette } from '@/components/LampSilhouette';

export async function generateStaticParams() {
  return PIECES.map(p => ({ lot: p.lot }));
}

export async function generateMetadata({ params }: { params: Promise<{ lot: string }> }) {
  const { lot } = await params;
  const piece = PIECES.find(p => p.lot === lot);
  if (!piece) return {};
  return { title: `№ ${piece.lot} · ${piece.title} — RE·DESIGN` };
}

export default async function ProductPage({ params }: { params: Promise<{ lot: string }> }) {
  const { lot } = await params;
  const piece = PIECES.find(p => p.lot === lot);
  if (!piece) notFound();

  const meta = piece.meta ?? {
    'Periodo': String(piece.year),
    'Materiali': '—',
    'Dimensioni': '—',
    'Cablatura': 'sostituita, conforme CE',
    'Etichetta': 'presente',
    'Stato': 'eccellente',
  };
  const desc = piece.desc ?? `Pezzo di ${piece.maisonName}, ${piece.city}. Documentato e restaurato. Cablatura conforme CE.`;
  const prov = piece.provenance ?? [
    { label: `${piece.city}, c. ${piece.year}` },
    { label: 'Collezione privata', unknown: true },
    { label: 'Returned, 2026' },
  ];

  return (
    <div style={{ padding: '40px 56px 96px' }}>
      <Link href="/catalogue" style={{
        display: 'inline-block',
        marginBottom: 32,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        opacity: 0.7,
        border: 0,
        color: 'var(--inchiostro)',
      }}>← Catalogue</Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        {/* Gallery */}
        <div>
          <div style={{
            width: '100%',
            aspectRatio: '1/1',
            background: 'var(--carta)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <LampSilhouette tone={piece.shadeTone} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 12 }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{
                aspectRatio: '1/1',
                background: 'var(--carta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: i === 0 ? '1px solid var(--inchiostro)' : 'none',
                opacity: i === 0 ? 1 : 0.85,
                overflow: 'hidden',
              }}>
                <div style={{ transform: 'scale(0.32)' }}>
                  <LampSilhouette tone={piece.shadeTone} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <LotMark n={piece.lot} label={piece.type} level="med" />
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 38,
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '0.01em',
            margin: '14px 0 8px',
          }}>
            <em style={{ fontStyle: 'italic' }}>{piece.title}</em>
          </h1>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {piece.maison} · {piece.city.toUpperCase()}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', opacity: 0.7, marginTop: 4 }}>
            {piece.attribution} {piece.designer} · c. {piece.year}
          </div>
          <BrassRule width={48} style={{ margin: '24px 0' }} />

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65, maxWidth: '52ch', margin: '0 0 28px' }}>
            {desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px 16px', marginBottom: 28 }}>
            {Object.entries(meta).map(([k, v]) => (
              <>
                <div key={`k-${k}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', opacity: 0.55 }}>{k}</div>
                <div key={`v-${k}`} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>{v}</div>
              </>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40, flexWrap: 'nowrap' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, whiteSpace: 'nowrap' }}>
              € {piece.price.toLocaleString('it-IT')}
            </div>
            <MonoCaps size={10} opacity={0.6} style={{ whiteSpace: 'nowrap' }}>spedizione su richiesta</MonoCaps>
          </div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ border: 0 }}>
              <Button>RICHIESTA · ENQUIRE</Button>
            </Link>
            <Link href="/contact" style={{ border: 0 }}>
              <Button variant="brass">Richiedi ulteriori fotografie</Button>
            </Link>
          </div>

          <MonoCaps size={10} opacity={0.55}>PROVENIENZA</MonoCaps>
          <div style={{ marginTop: 10 }}>
            <ProvenanceChain stops={prov} />
          </div>
        </div>
      </div>
    </div>
  );
}
