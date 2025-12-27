/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        // port: '',
        pathname: '/images/media/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
