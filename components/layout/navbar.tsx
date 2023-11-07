import React from 'react';
import Link from 'next/link';
import DropdownMenu from 'components/layout/dropdown-menu';

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center bg-eerieblack md:h-18">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-heading-6">
          Marco Törnqvist
        </Link>
        <DropdownMenu />
        <ul className="hidden flex-row md:flex">
          <li>
            <Link href="/projects" className="text-regular-normal px-4 py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-regular-normal px-4 py-2">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/"
              target="_blank"
              className="text-regular-normal px-4 py-2"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/marcotornqvist"
              target="_blank"
              className="text-regular-normal px-4 py-2"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
