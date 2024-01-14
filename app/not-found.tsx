import { buttonVariants } from 'components/ui/button';
import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';

const NotFound: FC = () => {
  return (
    <div className="container flex min-h-[calc(100vh_-_4rem)] flex-col items-center justify-center">
      <div className="mx-auto flex flex-col items-center pb-16 text-center">
        <div className="mb-12 md:mb-16">
          <h1 className="text-heading-1">404</h1>
          <h2 className="text-heading-2">Page not found</h2>
        </div>
        <Link href="/" className={buttonVariants()}>
          Go back home
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Arrow right"
            width={20}
            height={10}
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
