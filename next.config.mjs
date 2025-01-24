// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'myiq.ch', // Ohne "www"
          },
        ],
        destination: 'https://www.myiq.ch/:path*',
        permanent: true, // 301 Redirect
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.myiq.ch', // Mit "www"
          },
        ],
        destination: 'https://www.myiq.ch/:path*',
        permanent: true, // 301 Redirect
      },
    ];
  },
};

export default nextConfig;
