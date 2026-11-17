import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const rules = { userAgent: "*", allow: "/" };

  if (!site.publicSiteUrl) return { rules };

  return {
    rules,
    sitemap: new URL("/sitemap.xml", site.publicSiteUrl).toString(),
  };
}
