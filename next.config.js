/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hotelgloria.ar", "www.hotelgloria.ar", "hotelgloria.com.ar", "www.hotelgloria.com.ar"],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar; style-src 'self' 'unsafe-inline' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar; script-src 'self' 'unsafe-inline' https://hotelgloria.ar https://www.hotelgloria.ar https://hotelgloria.com.ar https://www.hotelgloria.com.ar; img-src 'self' data: https: http:;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

