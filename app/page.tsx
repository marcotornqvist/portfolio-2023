import Portrait from 'components/portrait';
import Link from 'next/link';
import ArrowIcon from 'components/arrow-icon';
import ProjectCard from 'components/project-card';
import ResumeList from 'components/resume-list';
import { education, experience, projects } from 'config/portfolio';

export default function Home() {
  return (
    <>
      <section className="hero page-width" aria-labelledby="intro-heading">
        <div className="hero-masthead">
          <span>Software Developer</span>
          <span>Finland / Working everywhere</span>
        </div>
        <div className="hero-copy pt-4">
          <h1 id="intro-heading">
            Marco <span className="hero-period">Törnqvist.</span>
          </h1>
          <p className="intro">
            Hi, I'm a Software Developer based in Finland. My driving passion is
            to create seamless and elegant applications that help my clients
            succeed and reach their goals.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="text-link hero-work-link">
              View selected work{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
            <a href="#contact" className="text-link">
              Let’s talk{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
        <figure className="hero-illustration">
          <Portrait />
        </figure>
        <div className="hero-footnote">
          <span>From the first sketch to the final build.</span>
          <a href="#work-heading">
            A selection of my work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="section page-width" aria-labelledby="work-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-heading">A few things I’ve worked on.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects{' '}
            <span aria-hidden="true">
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              headingLevel="h3"
            />
          ))}
        </div>
      </section>

      <section
        className="section page-width about-section"
        aria-labelledby="about-heading"
      >
        <div>
          <p className="eyebrow">02 / A little about me</p>
          <h2 id="about-heading">Behind the Pixels</h2>
        </div>
        <div className="about-copy">
          <p>
            Since 2018, I’ve been exploring how thoughtful interfaces and
            well-built software can make everyday experiences better.
          </p>
          <p>
            My work spans public-sector services, digital products, and
            independent web projects. I enjoy connecting the details: from the
            first design idea to the final line of code. Always eager to discuss
            fresh project ideas and innovations.
          </p>
          <ul className="skill-list" aria-label="Areas of focus">
            <li>Fullstack Development</li>
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>AWS</li>
            <li>UX/UI</li>
            <li>Accessibility</li>
            <li>Headless CMS</li>
            <li>Generative AI</li>
          </ul>
          <p className="language-note">
            Comfortable in Finnish, Swedish, and English.
          </p>
        </div>
      </section>
      <section
        className="section page-width recommendation-section"
        aria-labelledby="recommendation-heading"
      >
        <div>
          <p className="eyebrow">03 / Recommendation</p>
          <h2 id="recommendation-heading">A word from a collaborator.</h2>
        </div>
        <figure className="recommendation-card">
          <blockquote className="recommendation-quote" lang="fi">
            <p>
              Marco worked with us as a freelance software developer and quickly
              proved himself to be a highly capable and reliable professional.
              He delivered high-quality work, adapted quickly to the assignment,
              and received excellent feedback. We would gladly work with him
              again.
            </p>
          </blockquote>
          <figcaption className="recommendation-author">
            <strong>Mikael Korpi</strong>
            <span>ilmiö talent agency</span>
          </figcaption>
        </figure>
      </section>

      <section
        className="section page-width resume-section"
        aria-labelledby="experience-heading"
      >
        <div>
          <p className="eyebrow">04 / Experience</p>
          <h2 id="experience-heading">The journey so far.</h2>
        </div>
        <ResumeList entries={experience} />
      </section>
      <section
        className="section page-width resume-section education-section"
        aria-labelledby="education-heading"
      >
        <div>
          <p className="eyebrow">05 / Education</p>
          <h2 id="education-heading">Where it started.</h2>
        </div>
        <ResumeList entries={education} />
      </section>
    </>
  );
}
