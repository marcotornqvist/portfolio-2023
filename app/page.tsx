import Card from 'components/card';
import Hero from 'components/hero';
import React from 'react';
import Image from 'next/image';
import Header from 'components/header';

const Home = () => {
  return (
    <>
      <Hero
        title="Marco Törnqvist"
        subtitle="Hi, I'm a Software Developer & Web Designer based in Finland. My driving passion is to create seamless and elegant applications that help my clients succeed and reach their goals."
      />
      {/* <Cards /> */}
      <Header
        title="Highlighted Creations"
        subtitle="A straightforward look into some projects that best represent my capabilities in web design and development. For those interested in the more technical aspects, I encourage you to visit my GitHub."
        headingLevel="h2"
      />
    </>
  );
};

const Cards = () => (
  <div className="container">
    <div className="flex flex-wrap gap-4 pb-12">
      <Card
        icon={
          <Image
            src="/assets/icons/code.svg"
            alt="code"
            width={32}
            height={32}
          />
        }
        title="Full-stack Development"
        text="Expertise in crafting dynamic and responsive applications using NextJS, NodeJS, and Headless CMS solutions."
      />
      <Card
        icon={
          <Image
            src="/assets/icons/brush.svg"
            alt="paint brush"
            width={36}
            height={36}
          />
        }
        title="Web Design"
        text="Proficient in creating intuitive and visually appealing designs with Figma and Webflow."
      />
      <Card
        icon={
          <Image
            src="/assets/icons/tools.svg"
            alt="tools"
            width={32}
            height={32}
          />
        }
        title="Tools"
        text="Skilled in leveraging the power of AWS & Vercel, managing projects on Github, and implementing advanced AI tools."
      />
    </div>
    {/* <Project /> */}
  </div>
);

export default Home;
