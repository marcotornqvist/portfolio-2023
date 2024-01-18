import { buttonVariants } from 'components/ui/button';
import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowIcon from 'components/icons/arrow';

const NotFound: FC = () => {
  return (
    <div className="container flex min-h-[calc(100vh_-_4rem)] flex-col items-center justify-center">
      <div
        className={clsx(
          'mx-auto flex flex-col items-center pb-16 text-center',
          'animate-fade-in opacity-0',
        )}
      >
        <div className="mb-12 md:mb-16">
          <h1 className="text-heading-1">404</h1>
          <h2 className="text-heading-2">Page not found</h2>
        </div>
        <Link href="/" className={buttonVariants()}>
          Go back home
          <ArrowIcon
            className="-translate-x-[10px] transform animate-slide-in-left opacity-0 delay-900"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
