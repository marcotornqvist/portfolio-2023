'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Menu from 'components/layout/menu';
import { siteConfig } from 'config/site';

const links = [
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact' },
  {
    href: siteConfig.socials.linkedin,
    text: 'LinkedIn',
    isExternal: true,
  },
  {
    href: siteConfig.socials.github,
    text: 'Github',
    isExternal: true,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex h-16 items-center bg-eerieblack md:h-18">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-heading-6 -ml-4 px-4 py-2 text-white"
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Marco Törnqvist
        </Link>
        <Menu />
        <ul className="-mr-4 hidden flex-row md:flex">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                className={clsx(
                  ' text-regular-normal px-4 py-2 text-grey',
                  pathname === link.href && '!text-white',
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
