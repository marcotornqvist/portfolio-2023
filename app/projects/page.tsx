import React from 'react';
import Link from 'next/link';
import Header from 'components/header';
import CTA from 'components/cta';
import Project from 'components/project';

const Projects = () => {
  return (
    <>
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
        className="py-16 md:py-24 lg:py-28"
      />
      <Project
        title="Eke-marin"
        subtitle="Website renewal for a comprehensive boat docking, storage and maintenance business."
        headingLevel="h3"
        buttonLink="/projects/eke-marin"
        buttonText="View Project"
      />
      <CTA
        title="Crafting Digital Experiences"
        subtitle="I'm well-versed in a broad spectrum of software engineering and design practices. Whether it's designing or developing responsive user interfaces, building scalable server architectures, integrating databases, or ensuring optimal deployment solutions, I thrive in projects that requires a diverse skill set. Continuously seeking out opportunities to learn and adapt in the ever-evolving tech landscape and am always eager to discuss fresh project ideas and innovations."
        buttonText="Contact Me"
        buttonLink="/contact"
        headingLevel="h2"
      />
    </>
  );
};

export default Projects;
