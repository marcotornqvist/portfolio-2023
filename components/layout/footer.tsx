import { siteConfig } from 'config/site';
import ArrowIcon from 'components/arrow-icon';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="site-footer"
      aria-labelledby="contact-heading"
    >
      <div className="page-width">
        <div className="footer-main">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="contact-heading">Get in touch</h2>
            <p>For a project, a question, or just a hello.</p>
          </div>
          <address className="contact-details">
            <div className="footer-person">
              <Image
                className="footer-headshot"
                src="/assets/images/headshot.jpeg"
                alt="Marco Törnqvist"
                width={120}
                height={120}
                sizes="120px"
              />
              <div>
                <span className="footer-person-name">Marco Törnqvist</span>
                <span className="footer-person-role">Software developer</span>
              </div>
            </div>
            <a className="email-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}{' '}
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            <span>{siteConfig.location}</span>
            <div className="social-links">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn{' '}
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub{' '}
                <span aria-hidden="true">
                  <ArrowIcon />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </address>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <a href="#top">
            Back to top <ArrowIcon direction="up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
