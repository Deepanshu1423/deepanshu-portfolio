const nextConfig = {
  images: {
    qualities: [75],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};

export default nextConfig;