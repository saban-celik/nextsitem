//C:\nextjs\nextsitem\frontend\next.config.ts
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
      {
        protocol: 'https',
        hostname: 'www.hdfilmcehennemi.nl', // Yeni alan adı eklendi
        port: '',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;