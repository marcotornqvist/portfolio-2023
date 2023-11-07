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
    <div className={cn('container flex flex-row', className)}>
      <Heading headingLevel={headingLevel}>{title}</Heading>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
