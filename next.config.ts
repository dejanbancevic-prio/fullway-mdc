
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.prioritytire.dev',
        pathname: '/media/catalog/product/**', 
      },
    ],
  },
};

export default nextConfig;
