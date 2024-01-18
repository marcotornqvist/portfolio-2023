'use client';

import React, { FC } from 'react';
import type { HeadingLevel } from './ui/heading';
import Heading from './ui/heading';
import { cn } from 'lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Tag from './ui/tag';
import clsx from 'clsx';
import useIsVisible from 'hooks/useIsVisible';
import ArrowIcon from './icons/arrow';

type Props = {
  title?: string;
  subtitle?: string;
  headingLevel?: HeadingLevel;
  buttonText?: string;
  buttonLink?: string;
  tags?: string[];
  className?: string;
  imageClassName?: string;
};

const PortfolioHeader: FC<Props> = ({
  tags,
  title,
  subtitle,
  headingLevel = 'h1',
  buttonText,
  buttonLink,
  className,
  imageClassName,
}) => {
  const [isVisible, domRef] = useIsVisible<HTMLDivElement>();
  return (
    <div className={cn('container py-16 md:pb-24 lg:pb-28', className)}>
      <div className={clsx('flex flex-col gap-6')}>
        <div
          className={clsx(
            'relative flex aspect-[13/9] items-center justify-center rounded-md bg-purple opacity-0 md:aspect-[15/9]',
            isVisible && 'animate-scale-in opacity-0',
            imageClassName,
          )}
          ref={domRef}
        >
          <div className="relative h-[85%] w-[90%]">
            <Image
              src="/assets/images/eke-marin.png"
              alt="Eke-marin"
              fill
              className="rounded-md object-cover shadow-2xl md:rounded-lg"
              priority
            />
          </div>
        </div>
        <BottomContent
          tags={tags}
          title={title}
          subtitle={subtitle}
          headingLevel={headingLevel}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      </div>
    </div>
  );
};

type BottomContentProps = {
  tags?: string[];
  title?: string;
  subtitle?: string;
  headingLevel?: HeadingLevel;
  buttonText?: string;
  buttonLink?: string;
};

const BottomContent: FC<BottomContentProps> = ({
  tags,
  title,
  subtitle,
  headingLevel,
  buttonText,
  buttonLink,
}) => {
  const tagsExist = tags && tags.length > 0;
  const [isVisible, domRef] = useIsVisible<HTMLDivElement>();

  return (
    <div ref={domRef}>
      {tagsExist ? (
        <div className="flex flex-wrap gap-3">
          {tags?.map((item, i) => (
            <Tag index={i} key={i} text={item} isVisible={isVisible} />
          ))}
        </div>
      ) : (
        <div
          className={clsx(
            'flex w-full flex-col gap-6 opacity-0 md:flex-row md:items-end md:justify-between md:gap-20',
            isVisible && 'animate-fade-in',
          )}
        >
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
            <Link
              href={buttonLink}
              className={clsx(
                buttonVariants(),
                'opacity-0 delay-300',
                isVisible && 'animate-fade-in',
              )}
            >
              {buttonText}
              <ArrowIcon
                aria-hidden
                className="-translate-x-[10px] transform animate-slide-in-left opacity-0 delay-900"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioHeader;
