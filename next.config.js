/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
  },
  reactStrictMode: true,
};
  
module.exports = nextConfig;