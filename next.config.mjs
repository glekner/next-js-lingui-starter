/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  turbopack: {
    rules: {
      "*.po": {
        loaders: ["@lingui/loader"],
        as: "*.js",
      },
    },
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
