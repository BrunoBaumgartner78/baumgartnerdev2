
export default {
  async redirects() {
    return [
 
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'myiq.ch',
          },
        ],
        destination: 'https://www.myiq.ch/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.myiq.ch',
          },
        ],
        destination: 'https://www.myiq.ch/:path*',
        permanent: true,
      },
    ];
  },
};

