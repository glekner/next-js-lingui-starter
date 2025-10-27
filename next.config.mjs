/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  transpilePackages: ["@docs/in-product-docs"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.wiz.io" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.vimeocdn.com" },
    ],
    qualities: [25, 50, 75, 100],
  },
  turbopack: { rules: { "*.po": { loaders: ["@lingui/loader"], as: "*.js" } } },
  // we already run tsc on the CI, so we don't need to run it on the build
  typescript: { ignoreBuildErrors: true },
  serverExternalPackages: [
    "shiki",
    "shiki/*",
    "@shikijs/*",
    "node-fetch",
    "@rspress/mdx-rs",
    "@apidevtools/json-schema-ref-parser",
  ],
  outputFileTracingIncludes: { "/": ["./content/**/*", "./i18n/**/*"] },
  outputFileTracingExcludes: {
    "/": ["./node_modules/**/*", "./.next/cache/**/*"],
  },
  cacheComponents: true,
  experimental: {
    clientSegmentCache: true,
    scrollRestoration: true,
    browserDebugInfoInTerminal: true,
    swcPlugins: [["@lingui/swc-plugin", {}]],
    optimizePackageImports: [
      "tailwindcss",
      "radix-ui",
      "@radix-ui/react-toggle-group",
      "@fortawesome/pro-light-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@awesome.me/kit-c530641f07",
    ],
    serverActions: {
      bodySizeLimit: "8mb",
      allowedOrigins: (() => {
        if (process.env.WIZ_PORTAL_ORIGIN) {
          const portalUrl = new URL(process.env.WIZ_PORTAL_ORIGIN);
          return [portalUrl.host];
        }
        return ["*.wiz.io", "*.wiz.us"];
      })(),
    },
    serverMinification: true,
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    serverComponentsHmrCache: true,
    turbopackFileSystemCacheForDev: true,
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
