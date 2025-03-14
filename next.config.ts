import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.4kfilmizlesene.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;