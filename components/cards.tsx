import { cn } from 'lib/utils';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import CodeIcon from './icons/code';
import BrushIcon from './icons/brush';
import ToolsIcon from './icons/tools';

type CardsProps = {
  className?: string;
};

const Cards: FC<CardsProps> = ({ className }) => (
  <div
    className={clsx(
      'container grid gap-6 py-16 md:pb-24 lg:grid-cols-3 lg:pb-28 xl:gap-8',
      className,
    )}
  >
    <Card
      icon={<CodeIcon className="h-8 w-8 md:h-9 md:w-9" aria-hidden />}
      title="Full-stack"
      text="Expertise in full-stack development, with a strong emphasis on creating responsive and user-friendly frontend interfaces, end-to-end testing, accessibility, and robust backend systems."
      className="delay-800 lg:delay-100"
    />
    <Card
      icon={
        <BrushIcon className="h-[2rem] w-[2rem] md:h-9 md:w-9" aria-hidden />
      }
      title="Web Design"
      text="Proficient in web design, focusing on crafting intuitive and visually appealing user interfaces. Expertise in utilizing leading design tools to bring creative visions to life."
      className="delay-1100 lg:delay-300"
    />
    <Card
      icon={
        <ToolsIcon className="h-[30px] w-[30px] md:h-9 md:w-9" aria-hidden />
      }
      title="Tools"
      text="Skilled in leveraging cloud platforms, CI/CD pipelines and version control systems for efficient project deployment and management."
      className="delay-1400 lg:delay-500"
    />
  </div>
);

type CardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
};

const Card: FC<CardProps> = ({ icon, title, text, className }) => {
  return (
    <div
      className={cn(
        'flex w-full animate-fade-in flex-col gap-4 rounded-md bg-purple p-6 pb-10 opacity-0 md:pb-16 md:pt-8 xl:px-8 xl:pb-[72px]',
        className,
      )}
    >
      {icon && <div className="h-10 w-10">{icon}</div>}
      <div className="flex max-w-prose flex-col gap-4">
        <span className="text-heading-4">{title}</span>
        <p className="text-regular-normal md:text-medium-normal">{text}</p>
      </div>
    </div>
  );
};

export default Cards;
