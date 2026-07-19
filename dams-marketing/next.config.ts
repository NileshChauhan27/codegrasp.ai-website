import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/docs", destination: "/docs/index.html", permanent: false },
      { source: "/docs/", destination: "/docs/index.html", permanent: false },
    ];
  },
};

export default nextConfig;
