import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';
import { cn } from 'lib/utils';
import clsx from 'clsx';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  subtitle: JSX.Element;
  headingLevel: HeadingLevel;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
};

const Header: FC<Props> = ({
  title,
  subtitle,
  headingLevel,
  buttonText,
  buttonLink,
  className,
}) => {
  const buttonExists = buttonText && buttonLink;

  return (
    <div
      className={cn(
        'container py-16 md:pb-24 lg:pb-28',
        buttonExists
          ? 'flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-end lg:gap-[5%]'
          : '',
        className,
      )}
    >
      <div
        className={clsx(
          buttonExists
            ? 'flex flex-col gap-5 lg:gap-2'
            : 'flex min-w-full flex-col gap-5 lg:flex-row lg:items-center lg:gap-[5%]',
        )}
      >
        <Heading
          headingLevel={headingLevel}
          className={clsx('text-heading-1', !buttonExists && 'lg:w-[50%]')}
        >
          {title}
        </Heading>
        <p
          className={clsx(
            'text-regular-normal max-w-prose md:text-medium-normal',
            !buttonExists && 'lg:w-[50%]',
          )}
        >
          {subtitle}
        </p>
      </div>
      {buttonExists && (
        <Link className={buttonVariants()} href={buttonLink} target="_blank">
          {buttonText}
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Arrow right"
            width={20}
            height={10}
            aria-hidden
          />
        </Link>
      )}
    </div>
  );
};

export default Header;
