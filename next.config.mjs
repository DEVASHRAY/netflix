/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.nflxext.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'occ-0-2611-3663.1.nflxso.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;
