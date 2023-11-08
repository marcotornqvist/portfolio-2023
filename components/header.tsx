import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';
import { cn } from 'lib/utils';

type Props = {
  title: string;
  subtitle: JSX.Element;
  headingLevel: HeadingLevel;
  className?: string;
};

const Header: FC<Props> = ({ title, subtitle, headingLevel, className }) => {
  return (
    <div
      className={cn(
        'container flex flex-col gap-12 py-16 md:pb-24 lg:flex-row lg:items-center lg:gap-[5%]',
        className,
      )}
    >
      <Heading
        headingLevel={headingLevel}
        className="text-heading-1 lg:w-[50%]"
      >
        {title}
      </Heading>
      <p className="text-medium-normal max-w-prose lg:w-[50%]">{subtitle}</p>
    </div>
  );
};

export default Header;
