/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
  output: 'export',
    images: {
      domains:['i.dummyjson.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.dummyjson.com',
          port: '',
          pathname: '/',
        },
      ],
    },
  }