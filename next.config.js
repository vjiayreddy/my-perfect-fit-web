/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mpf-public-data.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.indianweddingsaree.com",
      },
      {
        protocol:"https",
        hostname:"i.pinimg.com"
      },
      {
        protocol:"https",
        hostname:"plus.unsplash.com"
      }
    ],
  },
};

module.exports = nextConfig;
