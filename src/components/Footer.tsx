import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Catalogo', href: '/catalogue' },
  { label: 'Designers', href: '/designers' },
  { label: 'Contatto', href: '/contact' },
];

export const Footer = () => (
  <footer style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
    padding: '28px 56px',
    borderTop: '1px solid var(--ottone-brunito)',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    background: 'var(--avorio)',
  }}>
    <div style={{ opacity: 0.85 }}>© MMXXVI RE·DESIGN</div>
    <nav aria-label="Footer navigatie" style={{ display: 'flex', gap: 28 }}>
      {FOOTER_LINKS.map(({ label, href }) => (
        <Link key={href} href={href} style={{ color: 'var(--inchiostro)', opacity: 0.7 }}>
          {label}
        </Link>
      ))}
    </nav>
    <div style={{ opacity: 0.85 }}>Documented · Restored · Returned</div>
  </footer>
);
