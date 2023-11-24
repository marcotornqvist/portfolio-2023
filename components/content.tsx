import React, { FC, ReactNode } from 'react';
import { cn } from 'lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

const Content: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'container flex flex-col gap-8 py-16 md:gap-10 md:pb-24 lg:flex-row lg:items-start lg:gap-[5%] lg:pb-28 xl:gap-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Content;
