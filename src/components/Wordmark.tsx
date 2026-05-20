'use client';

export const Wordmark = ({
  size = 56,
  showDomain = true,
  showTagline = false,
  showRule = false,
  color = 'var(--inchiostro)',
}: {
  size?: number;
  showDomain?: boolean;
  showTagline?: boolean;
  showRule?: boolean;
  color?: string;
}) => {
  const dot = Math.round(size * 0.22);
  const gap = Math.round(size * 0.18);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, color }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: size, lineHeight: 1, letterSpacing: '0.03em', fontWeight: 400 }}>RE</span>
        <span style={{
          width: dot, height: dot, borderRadius: '50%',
          background: 'var(--ottone-brunito)',
          alignSelf: 'center',
          transform: `translateY(-${Math.round(size * 0.18)}px)`,
          flexShrink: 0,
        }} />
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: size, lineHeight: 1, letterSpacing: '0.03em', fontWeight: 400 }}>DESIGN</span>
      </div>
      {showDomain && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: Math.max(10, size * 0.16), letterSpacing: '0.04em', alignSelf: 'flex-end', marginTop: -4 }}>
          <span style={{ color: 'var(--ottone-brunito)' }}>.</span>shop
        </div>
      )}
      {showRule && <hr style={{ border: 0, height: 1, width: 80, background: 'var(--ottone-brunito)', margin: '8px 0 0' }} />}
      {showTagline && (
        <div style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.22em', marginTop: 6 }}>
          Italian Design Lighting · 1960 — 2000
        </div>
      )}
    </div>
  );
};
