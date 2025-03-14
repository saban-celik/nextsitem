import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // SWC kullanarak minify işlemi
  images: {
    domains: ['www.4kfilmizlesene.org'], // Sadece bu domain üzerinden görsel yüklenmesine izin verilecek
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // fs modülünü tarayıcıda kullanmamayı sağlıyor
      };
    }
    return config;
  },
};

export default nextConfig;
