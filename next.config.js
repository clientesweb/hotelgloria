/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Add this section to handle multiple domains
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar; style-src 'self' 'unsafe-inline' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar; script-src 'self' 'unsafe-inline' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

