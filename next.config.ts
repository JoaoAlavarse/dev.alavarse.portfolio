import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline CSS into <style> to remove the render-blocking stylesheet round-trip (FCP/LCP).
    // Good fit for this Tailwind portfolio (~11 KiB CSS). Production builds only.
    inlineCss: true,
  },
  // Drop Next's unconditional legacy polyfill chunk for modern browser targets.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/modern-polyfill.ts",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/modern-polyfill.ts",
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": false,
      "next/dist/build/polyfills/polyfill-module": false,
    };
    return config;
  },
};

export default nextConfig;
