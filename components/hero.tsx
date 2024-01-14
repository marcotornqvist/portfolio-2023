import { cn } from 'lib/utils';
import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';

type Props = {
  title: string;
  subtitle: string;
  headingLevel: HeadingLevel;
  className?: string;
};

const Hero: FC<Props> = ({ headingLevel, title, subtitle, className }) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="container">
        <div className="flex flex-col gap-5 py-16 md:gap-6 md:py-24 lg:py-28">
          <Heading
            headingLevel={headingLevel}
            className="text-heading-1 animate-fade-in-up opacity-0"
          >
            {title}
          </Heading>
          <p className="text-regular-normal max-w-prose animate-fade-in-up opacity-0 delay-500 md:text-medium-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
