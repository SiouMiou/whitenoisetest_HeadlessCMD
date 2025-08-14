import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // 支援 Sanity Studio 的靜態資源
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;
