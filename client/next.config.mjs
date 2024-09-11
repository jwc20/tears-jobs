/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      serverActions: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_URL || 'http://rails_app:10524'}/api/:path*`,
        },
      ]
    },
  }
  
  export default nextConfig