import { cn } from 'lib/utils';
import React, { FC } from 'react';

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

const Hero: FC<Props> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="container">
        <div className="flex flex-col gap-12 py-16">
          <h1 className="text-heading-1">{title}</h1>
          <p className="text-medium-normal max-w-prose">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
