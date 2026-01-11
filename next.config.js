// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export
  trailingSlash: true,
  images: {
    unoptimized: true,  // Required for static export if using Next.js Image
  },
};

module.exports = nextConfig;


