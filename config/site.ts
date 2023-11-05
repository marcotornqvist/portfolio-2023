export type SiteConfig = {
  name: string;
  url: string;
  // ogImage: string;
};

export const siteConfig: SiteConfig = {
  name: "Marco Törnqvist",
  url:
    process.env.NODE_ENV === "production"
      ? "https://www.marcotornqvist.com/"
      : "http://localhost:3000",
  // ogImage: "/og-image.png",
};
