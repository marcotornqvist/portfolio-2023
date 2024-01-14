'use client';

import React, { FC, ReactNode } from 'react';
import { cn } from 'lib/utils';
import Heading from './ui/heading';
import useIsVisible from 'hooks/useIsVisible';
import clsx from 'clsx';

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Content: FC<Props> = ({ title, children, className }) => {
  const [isVisible, domRef] = useIsVisible<HTMLDivElement>();

  return (
    <div
      className={cn(
        'container my-16 flex flex-col gap-8 md:mb-24 md:gap-10 lg:mb-28 lg:flex-row lg:items-start lg:gap-[5%] xl:gap-20',
        className,
      )}
      ref={domRef}
    >
      <Heading
        headingLevel="h2"
        className={clsx(
          'text-heading-3 w-full -translate-x-[10px] opacity-0 delay-300',
          isVisible && 'animate-slide-in-left',
        )}
      >
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default Content;
