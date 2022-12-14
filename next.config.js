/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com", "example2.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
