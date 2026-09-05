import type { Metadata } from 'next';
import ArrowIcon from 'components/arrow-icon';
import ProjectCard from 'components/project-card';
import { projects } from 'config/portfolio';
import { siteConfig } from 'config/site';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected websites and digital products: Luontoon.fi, Amplifiles, Trävaruhuset, and Eke-marin.',
};

export default function Projects() {
  return (
    <div className="page-width projects-page">
      <header className="page-intro">
        <p className="eyebrow">
          Selected work / {String(projects.length).padStart(2, '0')} projects
        </p>
        <h1>
          Ideas brought
          <br />
          <span>to life.</span>
        </h1>
        <p className="intro">
          A selection of websites and digital products I’ve worked on. Different
          challenges, the same care for the details.
        </p>
      </header>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <p className="projects-note">
        Interested in the code?{' '}
        <a
          className="text-link"
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on GitHub <span aria-hidden="true"><ArrowIcon /></span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}