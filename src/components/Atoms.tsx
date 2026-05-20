import React, { CSSProperties, ElementType } from 'react';
import Link from 'next/link';

export const LotMark = ({ n, label, level = 'med' }: { n: string; label?: string; level?: 'sm' | 'med' | 'lg' }) => {
  const sizes = { sm: 11, med: 13, lg: 18 };
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: sizes[level],
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
    }}>
      <span style={{ color: 'var(--ottone-brunito)' }}>№</span> {n}{label ? ` · ${label}` : ''}
    </div>
  );
};

export const BrassRule = ({
  width = 80,
  style = {},
  className = '',
}: {
  width?: number | string;
  style?: CSSProperties;
  className?: string;
}) => (
  <hr className={className} style={{ border: 0, height: 1, background: 'var(--ottone-brunito)', width, ...style }} />
);

export const MonoCaps = ({
  children,
  size = 11,
  opacity = 1,
  style = {},
  as: Tag = 'span',
}: {
  children: React.ReactNode;
  size?: number;
  opacity?: number;
  style?: CSSProperties;
  as?: ElementType;
}) => (
  <Tag style={{
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    fontSize: size,
    letterSpacing: '0.16em',
    opacity,
    ...style,
  }}>{children}</Tag>
);

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  style = {},
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'brass';
  onClick?: () => void;
  type?: 'button' | 'submit';
  style?: CSSProperties;
}) => (
  <button onClick={onClick} type={type} className={`btn-base btn-${variant}`} style={style}>
    {children}
  </button>
);

export const LinkButton = ({
  children,
  variant = 'primary',
  href,
  style = {},
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'brass';
  href: string;
  style?: CSSProperties;
}) => (
  <Link href={href} className={`btn-base btn-${variant}`} style={style}>
    {children}
  </Link>
);

export const ProvenanceChain = ({ stops }: { stops: { label: string; unknown?: boolean }[] }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
    {stops.map((s, i) => (
      <React.Fragment key={i}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '0.14em',
          opacity: s.unknown ? 0.65 : 1,
        }}>{s.label}</span>
        {i < stops.length - 1 && (
          <span style={{ color: 'var(--ottone-brunito)', fontFamily: 'var(--font-mono)', fontSize: 16 }}>→</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

export const Maison = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontVariant: 'all-small-caps', letterSpacing: '0.08em' }}>{children}</span>
);
