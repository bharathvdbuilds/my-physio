import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.publicSiteUrl) return [];

  return [
    {
      url: site.publicSiteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
