/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    experimental: {
      serverActions: true,
    },
};
  
module.exports = nextConfig;