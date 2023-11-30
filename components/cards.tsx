import { cn } from 'lib/utils';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

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
      icon={
        <Image
          src="/assets/icons/code.svg"
          alt="code"
          width={32}
          height={32}
          className="h-8 w-8 md:h-9 md:w-9"
          aria-hidden="true"
        />
      }
      title="Full-stack"
      text="Expertise in full-stack development, proficient in integrating modern technologies with emphasis on end-to-end testing, accessibility, and robust backend systems."
    />
    <Card
      icon={
        <Image
          src="/assets/icons/brush.svg"
          alt="paint brush"
          width={36}
          height={36}
          className="h-[2rem] w-[2rem] md:h-9 md:w-9"
          aria-hidden="true"
        />
      }
      title="Web Design"
      text="Proficient in web design, focusing on crafting intuitive and visually appealing user interfaces. Expertise in utilizing leading design tools to bring creative visions to life."
    />
    <Card
      icon={
        <Image
          src="/assets/icons/tools.svg"
          alt="tools"
          width={32}
          height={32}
          className="h-[30px] w-[30px] md:h-9 md:w-9"
          aria-hidden="true"
        />
      }
      title="Tools"
      text="Skilled in leveraging cloud platforms, CI/CD pipelines and version control systems for efficient project deployment and management."
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
        'flex w-full flex-col gap-4 rounded-md bg-purple p-6 pb-10 md:pb-18 md:pt-8 xl:px-8 xl:pb-[72px]',
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
