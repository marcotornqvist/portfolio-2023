'use client';

import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';
import { buttonVariants } from './ui/button';
import useIsVisible from 'hooks/useIsVisible';
import clsx from 'clsx';

type Props = {
  image?: string;
  alt?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  buttonClassName?: string;
  headingLevel: HeadingLevel;
};

const CTA: FC<Props> = ({
  image,
  alt,
  title,
  subtitle,
  buttonText,
  buttonLink,
  className,
  buttonClassName,
  headingLevel,
}) => {
  const [isVisible, domRef] = useIsVisible<HTMLDivElement>();
  const imageExists = image && alt;
  return (
    <div className={cn('container flex justify-center', className)}>
      <div
        className="my-16 flex max-w-3xl flex-col gap-12 md:my-24 md:gap-6 lg:my-28"
        ref={domRef}
      >
        {imageExists && (
          <div
            className={clsx(
              'relative h-28 w-28 transform opacity-0 transition-transform md:mx-auto md:hover:scale-110',
              isVisible && 'animate-fade-in',
            )}
          >
            <div className="absolute z-10 h-full w-full rounded-full bg-gradient-to-b from-transparent to-purple opacity-50 transition-opacity duration-200 md:hover:opacity-0" />
            <Image
              src={image}
              alt={alt}
              fill
              quality={85}
              className="rounded-full"
              sizes="(min-width: 768px) 128px, 96px"
            />
          </div>
        )}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-5">
            <Heading
              headingLevel={headingLevel}
              className={clsx(
                'text-heading-1 opacity-0 md:text-center',
                isVisible && 'animate-fade-in',
                imageExists && 'delay-300',
              )}
            >
              {title}
            </Heading>
            {subtitle && (
              <p
                className={clsx(
                  'text-regular-normal opacity-0 md:text-medium-normal md:text-center',
                  isVisible && 'animate-fade-in',
                  imageExists ? 'delay-600' : 'delay-300',
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
          <div
            className={cn(
              'flex opacity-0 md:justify-center',
              isVisible && 'animate-fade-in',
              imageExists ? 'delay-900' : 'delay-600',
              buttonClassName,
            )}
          >
            <Link href={buttonLink} className={buttonVariants()}>
              {buttonText}
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="Arrow right"
                width={20}
                height={10}
                className={clsx(
                  '-translate-x-[10px] transform opacity-0',
                  isVisible && 'animate-slide-in-left',
                  imageExists ? 'delay-1500' : 'delay-1200',
                )}
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
