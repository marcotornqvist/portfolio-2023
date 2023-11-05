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
        <h1 className="text-heading-1">{title}</h1>
        <p className="text-medium-normal">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
