/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Scoliscan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Scoliscan/' : '',
  images: {
    unoptimized: true,
    domains: [],
  },
  poweredByHeader: false,
}

module.exports = nextConfig