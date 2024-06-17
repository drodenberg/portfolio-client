/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'portfolio-server.services.divvit.co',
      port: '',
      pathname: '/assets/**'
    }]
  },
}

module.exports = nextConfig
