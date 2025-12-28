const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        pathname: '/images/media/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/food-details/:id',
        destination: '/foods/:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
