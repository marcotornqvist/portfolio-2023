import { cn } from 'lib/utils';
import React, { FC, ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
};

const Card: FC<Props> = ({ icon, title, text, className }) => {
  return (
    <div className={cn('', className)}>
      {icon && <div className="h-10 w-10">{icon}</div>}
      <span className="text-heading-4">{title}</span>
      <p className="text-medium-normal">{text}</p>
    </div>
  );
};

export default Card;
