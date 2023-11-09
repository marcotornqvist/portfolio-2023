import React from 'react';
import Link from 'next/link';
import DropdownMenu from 'components/layout/dropdown-menu';

const links = [
  { href: '/projects', text: 'Projects' },
  { href: '/contact', text: 'Contact' },
  {
    href: 'https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/',
    text: 'LinkedIn',
    isExternal: true,
  },
  {
    href: 'https://github.com/marcotornqvist',
    text: 'Github',
    isExternal: true,
  },
];

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center bg-eerieblack md:h-18">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="hover:text-purple-hover text-heading-6 -ml-4 p-2 transition-colors duration-200"
        >
          Marco Törnqvist
        </Link>
        <DropdownMenu />
        <ul className="hidden flex-row md:flex">
          {links.map((link, index) => (
            <li
              key={index}
              className={index === links.length - 1 ? '-mr-4' : ''}
            >
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                className="hover:text-purple-hover text-regular-normal px-4 py-2 text-lightgrey transition-colors duration-200"
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
