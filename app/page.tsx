import Hero from 'components/hero';
import React from 'react';
import Header from 'components/header';
import Project from 'components/project';
import Cards from 'components/cards';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Hero
        title="Marco Törnqvist"
        subtitle="Hi, I'm a Software Developer & Web Designer based in Finland. My driving passion is to create seamless and elegant applications that help my clients succeed and reach their goals."
        headingLevel="h1"
      />
      <Cards />
      <Header
        title="Highlighted Creations"
        subtitle={
          <>
            A straightforward look into some projects that best represent my
            capabilities in web design and development. For those interested in
            the more technical aspects, I encourage you to visit my{' '}
            <Link
              href="https://github.com/marcotornqvist"
              target="_blank"
              className="underline"
            >
              Github
            </Link>
          </>
        }
        // subtitle="A straightforward look into some projects that best represent my capabilities in web design and development. For those interested in the more technical aspects, I encourage you to visit my GitHub."
        headingLevel="h2"
      />
      {/* <Project
        title="Eke-marin"
        subtitle="Website renewal for a comprehensive boat docking, storage and maintenance business."
        headingLevel="h3"
      /> */}
    </>
  );
};

export default Home;
