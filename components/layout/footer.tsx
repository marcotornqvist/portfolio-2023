import { siteConfig } from 'config/site';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer" aria-labelledby="contact-heading">
      <div className="page-width">
        <div className="footer-main">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="contact-heading">
              Let’s make
              <br />
              something good.
            </h2>
            <p>For a project, a question, or just a hello.</p>
          </div>
          <address className="contact-details">
            <a className="email-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email} <span aria-hidden="true">↗</span>
            </a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            <span>{siteConfig.location}</span>
            <div className="social-links">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </address>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Designed with care. Built with purpose.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}