/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.myiq.ch/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
