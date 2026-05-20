'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wordmark } from './Wordmark';

const NAV_ITEMS = [
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Designers', href: '/designers' },
  { label: 'Contact',   href: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className="header-inner"
      style={{
        borderBottom: '1px solid var(--ottone-brunito)',
        background: 'var(--avorio)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Link href="/" style={{ border: 0 }}>
        <Wordmark size={28} showDomain={false} />
      </Link>
      <nav aria-label="Hoofdnavigatie" style={{ display: 'flex', gap: 36 }}>
        {NAV_ITEMS.map(item => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${active ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
