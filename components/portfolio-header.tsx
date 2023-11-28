import React, { FC } from 'react';
import type { HeadingLevel } from './ui/heading';
import Heading from './ui/heading';
import { cn } from 'lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Tag from './ui/tag';
import clsx from 'clsx';

type Props = {
  title?: string;
  subtitle?: string;
  headingLevel?: HeadingLevel;
  buttonText?: string;
  buttonLink?: string;
  tags?: string[];
  className?: string;
};

const PortfolioHeader: FC<Props> = ({
  tags,
  title,
  subtitle,
  headingLevel = 'h1',
  buttonText,
  buttonLink,
  className,
}) => {
  const tagsExist = tags && tags.length > 0;
  return (
    <div className={cn('container py-16 md:pb-24 lg:pb-28', className)}>
      <div className={clsx('flex flex-col gap-6')}>
        <div className="relative flex aspect-[13/9] items-center justify-center rounded-md bg-purple md:aspect-[15/9]">
          <div className="relative h-[85%] w-[90%]">
            <Image
              src="/assets/images/eke-marin.png"
              alt="Eke-marin"
              fill
              className={clsx(
                'rounded-md object-cover shadow-2xl md:rounded-lg',
              )}
              priority
            />
          </div>
        </div>
        {tagsExist ? (
          <div className="flex flex-wrap gap-3">
            {tags?.map((item, i) => <Tag key={i} text={item} />)}
          </div>
        ) : (
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-20">
            <div className="flex flex-col gap-2">
              {title && headingLevel && (
                <Heading headingLevel={headingLevel} className="text-heading-5">
                  {title}
                </Heading>
              )}
              {subtitle && (
                <p className="text-regular-normal max-w-prose md:text-medium-normal">
                  {subtitle}
                </p>
              )}
            </div>
            {buttonText && buttonLink && (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioHeader;
