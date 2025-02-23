/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/habitaciones/:slug",
          destination: "/habitaciones/:slug",
        },
      ],
    }
  },
}

module.exports = nextConfig

