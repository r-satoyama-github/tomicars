/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tomicars.vercel.app", "api.aaamoyst.com", "static.aaamoyst.com"],
  },
};

module.exports = nextConfig;
