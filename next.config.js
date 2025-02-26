/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.hotelgloria.com.ar",
          },
        ],
        destination: "https://hotelgloria.ar/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "hotelgloria.com.ar",
          },
        ],
        destination: "https://hotelgloria.ar/:path*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

