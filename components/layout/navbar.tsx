'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowIcon from 'components/arrow-icon';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header page-width">
      <Link href="/" className="brand" aria-label="Marco Törnqvist — home">
        <span className="monogram" aria-hidden="true">
          mt.
        </span>
        <span className="brand-name">Marco Törnqvist</span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              aria-current={pathname === '/projects' ? 'page' : undefined}
            >
              Projects
            </Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
