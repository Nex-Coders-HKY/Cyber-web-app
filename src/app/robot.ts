import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/thank-you"],
    },
    sitemap: "https://www.cybernova.edu.pk/sitemap.xml",
  };
}