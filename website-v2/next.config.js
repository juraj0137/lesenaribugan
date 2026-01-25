/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_PAGES === 'true' ? '/lesenaribugan' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/lesenaribugan/' : '',
}

module.exports = nextConfig
