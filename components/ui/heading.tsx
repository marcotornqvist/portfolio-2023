import React, { FC, createElement } from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  children: React.ReactNode;
  headingLevel: HeadingLevel;
  className?: string;
};

const Heading: FC<Props> = ({ children, headingLevel, className }) => {
  return createElement(headingLevel, { className }, children);
};

export default Heading;
