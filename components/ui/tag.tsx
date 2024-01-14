import { cn } from 'lib/utils';
import React, { FC } from 'react';

type Props = {
  index: number;
  text: string;
  className?: string;
  isVisible: boolean;
};

const Tag: FC<Props> = ({ index, text, className, isVisible }) => {
  return (
    <div
      className={cn(
        'text-tiny-normal flex rounded-full bg-purple px-4 py-1 opacity-0 md:text-small-normal',
        isVisible && 'animate-fade-in',
        className,
      )}
      style={{ animationDelay: `${index * 125}ms` }}
    >
      {text}
    </div>
  );
};

export default Tag;
