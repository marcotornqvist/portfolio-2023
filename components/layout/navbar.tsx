import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center bg-eerieblack md:h-20">
      <div className="container flex items-center justify-between">
        <Link href="/" className="heading-6">
          Marco Törnqvist
        </Link>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="https://github.com/marcotornqvist" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
