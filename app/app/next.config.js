/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Desativar a minificação SWC para evitar o erro SIGSEGV
  swcMinify: false, 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
