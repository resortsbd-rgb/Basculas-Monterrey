import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.ricelake.com" },
      { protocol: "https", hostname: "www.basculasmetrology.com.mx" },
    ],
  },
};

export default nextConfig;
