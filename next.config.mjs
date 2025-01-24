export default {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-url',
        destination: '/new-url',
        permanent: true, // true bedeutet ein 301-Redirect
      },
    ];
  },
}
