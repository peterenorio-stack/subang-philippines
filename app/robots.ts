import type { MetadataRoute } from "next";

const robots: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://subangphilippines.org/sitemap.xml",
};

export default robots;
