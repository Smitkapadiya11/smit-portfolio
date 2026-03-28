/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
