/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Eliminamos la sección de redirects ya que queremos mantener ambos dominios activos
}

module.exports = nextConfig

