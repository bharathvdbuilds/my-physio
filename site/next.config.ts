import type { NextConfig } from "next";

/**
 * GitHub Pages project sites are served from /<repo>.
 * A user site (username.github.io) is served from the domain root.
 * Local builds leave the path empty unless BASE_PATH is set.
 */
function githubPagesTarget() {
  const explicitBase = process.env.BASE_PATH;
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
  const projectSite = Boolean(repo) && !repo.endsWith(".github.io");

  const basePath = (
    explicitBase !== undefined ? explicitBase : projectSite ? `/${repo}` : ""
  ).replace(/\/$/, "");

  const siteUrl =
    explicitUrl ||
    (owner && repo
      ? repo.endsWith(".github.io")
        ? `https://${repo}`
        : `https://${owner}.github.io/${repo}`
      : "");

  return { basePath, siteUrl };
}

const { basePath, siteUrl } = githubPagesTarget();

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
