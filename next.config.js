/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    images: {
      domains:['cdn.dummyjson.com'],
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
