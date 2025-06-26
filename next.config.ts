/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Add this line to force Webpack
  experimental: {
    turbo: false,
  },
  images: {
    domains: ['github.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
