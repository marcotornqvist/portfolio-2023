import Hero from 'components/hero';
import React from 'react';
import Header from 'components/header';
import Cards from 'components/cards';
import Link from 'next/link';
import CTA from 'components/cta';
import PortfolioHeader from 'components/portfolio-header';

const Home = ({}) => {
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
      <PortfolioHeader
        title="Eke-marin"
        subtitle="Website renewal for a comprehensive boat docking, storage, maintenance and crane lifting service business."
        headingLevel="h3"
        buttonLink="/projects/eke-marin"
        buttonText="View Project"
      />
      <CTA
        title="Behind the Pixels"
        subtitle="Currently working on Software and Web Design initiatives. I earned my Bachelor's degree in Information Technology from Arcada University of Applied Sciences in 2022. Since the beginning of  2018, I've refined my expertise in software development through a blend of professional work, personal projects, and academic endeavours. Conversing in Finnish, Swedish, and English, I embrace the nuances of each language. My driving passion is to create seamless and elegant applications that help my clients succeed and reach their goals. Always eager to discuss fresh project ideas and innovations."
        buttonText="Contact Me"
        buttonLink="/contact"
        image="/assets/images/headshot.jpeg"
        alt="headshot of Marco Törnqvist"
        headingLevel="h2"
      />
    </>
  );
};

export default Home;
