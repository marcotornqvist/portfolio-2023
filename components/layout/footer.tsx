'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from 'config/site';
import clsx from 'clsx';
import GithubIcon from 'components/icons/github';
import LinkedinIcon from 'components/icons/linkedin';

const Footer = () => {
  return (
    <footer className="py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 border-t border-b-lightgrey pt-8 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center gap-6 lg:order-3 lg:flex-row lg:gap-4">
            <div className="flex w-full items-center justify-center gap-6 lg:order-2">
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </Link>
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="!fill-purple" />
              </Link>
            </div>
            <div className="flex items-center lg:order-1">
              <Link
                href="/projects"
                className={clsx(
                  'text-regular-normal px-3 py-2 lg:px-4',
                  // pathname === '/projects' && '!text-white',
                )}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={clsx(
                  'text-regular-normal px-3 py-2 lg:px-4',
                  // pathname === '/projects' && '!text-white',
                )}
              >
                Contact
              </Link>
            </div>
          </div>
          <Link
            href="mailto:marcotornqvist@gmail.com"
            className="text-small-normal xl:text-regular-normal lg:order-1"
          >
            marcotornqvist@gmail.com
          </Link>
          <span className="text-small-normal xl:text-regular-normal lg:order-2">
            © 2023 Marco Törnqvist. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
