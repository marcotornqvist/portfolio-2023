import React, { FC } from 'react';
import Heading, { HeadingLevel } from './ui/heading';
import { cn } from 'lib/utils';

type Props = {
  title: string;
  subtitle: string;
  headingLevel: HeadingLevel;
  className?: string;
};

const Header: FC<Props> = ({ title, subtitle, headingLevel, className }) => {
  return (
    <div className={cn(className)}>
      <div className="container">
        <Heading headingLevel={headingLevel}>{title}</Heading>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;
