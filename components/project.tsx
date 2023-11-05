import React, { FC, createElement } from 'react';

type Props = {
  title: string;
  subtitle: string;
  className?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  link?: string;
  linkTitle?: string;
};

const Project: FC<Props> = ({ title, subtitle, link, linkTitle }) => {
  return <div>{createElement('', null, title)}</div>;
};

export default Project;
