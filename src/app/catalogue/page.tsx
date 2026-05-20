import { PIECES } from '@/lib/data';
import { BrassRule, MonoCaps } from '@/components/Atoms';
import { ProductCard } from '@/components/ProductCard';

export const metadata = {
  title: 'Catalogue — RE·DESIGN',
};

const DECADE_FILTERS = ['Tutti', '1960s', '1970s', '1980s'];

export default function CataloguePage() {
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
          <em style={{ fontStyle: 'italic' }}>Catalogue</em>
        </h1>
        <MonoCaps opacity={0.6}>{PIECES.length} pezzi · 1962 — 1974</MonoCaps>
      </div>
      <BrassRule width={80} style={{ margin: '24px 0 32px' }} />

      {/* Filter row */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
        {DECADE_FILTERS.map((d, i) => (
          <span key={d} style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            padding: '8px 14px',
            border: '1px solid var(--inchiostro)',
            background: i === 0 ? 'var(--inchiostro)' : 'transparent',
            color: i === 0 ? 'var(--avorio)' : 'var(--inchiostro)',
            cursor: 'pointer',
          }}>{d}</span>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px 48px' }}>
        {PIECES.map(p => <ProductCard key={p.lot} piece={p} />)}
      </div>
    </div>
  );
}
