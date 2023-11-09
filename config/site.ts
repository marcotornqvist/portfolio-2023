export type SiteConfig = {
  name: string;
  url: string;
  socials: {
    linkedin: string;
    github: string;
  };
  // ogImage: string;
};

export const siteConfig: SiteConfig = {
  name: 'Marco Törnqvist',
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://www.marcotornqvist.com/'
      : 'http://localhost:3000',
  socials: {
    linkedin: 'https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/',
    github: 'https://github.com/marcotornqvist',
  },
};
