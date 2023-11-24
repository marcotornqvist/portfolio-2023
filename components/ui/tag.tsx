import { cn } from 'lib/utils';
import React, { FC } from 'react';

type Props = {
  text: string;
  className?: string;
};

const Tag: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={cn(
        'text-tiny-normal flex rounded-full bg-purple px-4 py-1 md:text-small-normal',
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Tag;
