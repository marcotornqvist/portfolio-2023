import React, { FC, createElement } from 'react';
import type { HeadingLevel } from './ui/heading';
import Heading from './ui/heading';
import { cn } from 'lib/utils';

type Props = {
  title: string;
  subtitle: string;
  headingLevel: HeadingLevel;
  link?: string;
  linkTitle?: string;
  className?: string;
};

const Project: FC<Props> = ({
  title,
  subtitle,
  headingLevel,
  link,
  linkTitle,
  className,
}) => {
  return (
    <div className={cn('container', className)}>
      <Heading headingLevel={headingLevel}>{title}</Heading>
      <p>{subtitle}</p>
    </div>
  );
};

export default Project;
