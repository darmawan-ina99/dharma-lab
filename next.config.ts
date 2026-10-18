import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles deployment natively; no need for "standalone" output.
  // For self-hosted Docker deployment, set this to "standalone".
  // output: "standalone",
  typescript: {
    // Type errors are caught during lint; skip during build for speed.
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
