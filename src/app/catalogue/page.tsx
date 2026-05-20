import { PIECES } from '@/lib/data';
import { BrassRule, MonoCaps } from '@/components/Atoms';
import { ProductCard } from '@/components/ProductCard';

export const metadata = {
  title: 'Catalogue — RE·DESIGN',
};

const DECADE_FILTERS = ['Tutti', '1960s', '1970s', '1980s'];

export default function CataloguePage() {
  return (
    <div className="page-inner">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
        <h1 className="page-h1">
          <em style={{ fontStyle: 'italic' }}>Catalogue</em>
        </h1>
        <MonoCaps opacity={0.6}>{PIECES.length} pezzi · 1962 — 1974</MonoCaps>
      </div>
      <BrassRule width={80} style={{ margin: '24px 0 32px' }} />

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }} role="group" aria-label="Filter op decennium">
        {DECADE_FILTERS.map((d, i) => (
          <span key={d} className={`filter-chip${i === 0 ? ' active' : ''}`}>{d}</span>
        ))}
      </div>

      <div className="grid-3">
        {PIECES.map(p => <ProductCard key={p.lot} piece={p} />)}
      </div>
    </div>
  );
}
