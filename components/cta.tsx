import { cn } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';
import { buttonVariants } from './ui/button';

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
  return (
    <div className={cn('container flex justify-center', className)}>
      <div className="flex max-w-3xl flex-col gap-12 py-16 md:gap-6 md:py-24 lg:py-28">
        {image && alt && (
          <div className="relative h-28 w-28 transform transition-transform md:mx-auto md:hover:scale-110">
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
              className="text-heading-1 md:text-center"
            >
              {title}
            </Heading>
            {subtitle && (
              <p className="text-regular-normal md:text-medium-normal md:text-center">
                {subtitle}
              </p>
            )}
          </div>
          <div className={cn('flex md:justify-center', buttonClassName)}>
            <Link href={buttonLink} className={buttonVariants()}>
              {buttonText}
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
      </div>
    </div>
  );
};

export default CTA;
