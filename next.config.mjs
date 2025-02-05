/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "myiq.ch",
          },
        ],
        destination: "https://www.myiq.ch/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
