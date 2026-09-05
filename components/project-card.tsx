import Image from 'next/image';
import type { Project } from 'config/portfolio';

export default function ProjectCard({
  project,
  index,
  headingLevel: Heading = 'h2',
}: {
  project: Project;
  index: number;
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <article className="project-card">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className={`project-preview preview-${project.tone}`}>
          <div className="browser-frame">
            <div className="browser-toolbar" aria-hidden="true">
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              <span>{new URL(project.url).hostname.replace('www.', '')}</span>
              <span>↗</span>
            </div>
            <Image
              src={project.image}
              alt={`${project.title} homepage screenshot`}
              placeholder="blur"
              sizes="(max-width: 760px) 90vw, (max-width: 1200px) 45vw, 520px"
            />
          </div>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span>
              {String(index + 1).padStart(2, '0')} / {project.category}
            </span>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
          <Heading className="project-title">{project.title}</Heading>
          <p>{project.description}</p>
          <span className="visit-link">
            Visit website <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </article>
  );
}