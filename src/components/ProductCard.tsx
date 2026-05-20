import Link from 'next/link';
import { Piece } from '@/lib/data';
import { LotMark, BrassRule } from './Atoms';
import { LampSilhouette } from './LampSilhouette';

export const ProductCard = ({ piece }: { piece: Piece }) => (
  <Link href={`/catalogue/${piece.lot}`} style={{ border: 0, display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer' }}>
    <div style={{
      width: '100%', aspectRatio: '1 / 1',
      background: 'var(--carta)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <LampSilhouette tone={piece.shadeTone} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <LotMark n={piece.lot} label={piece.type} level="sm" />
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.15, letterSpacing: '0.01em' }}>
        <em style={{ fontStyle: 'italic' }}>{piece.title}</em>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.85 }}>
        {piece.maison} · {piece.year}
      </div>
      <BrassRule width={32} style={{ margin: '8px 0' }} />
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20 }}>€ {piece.price.toLocaleString('it-IT')}</div>
    </div>
  </Link>
);
