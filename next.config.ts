import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [360, 384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 288, 360, 540, 720],
  },
  experimental: {
    // Inline CSS into <style> to remove the render-blocking stylesheet round-trip (FCP/LCP).
    // Good fit for this Tailwind portfolio (~11 KiB CSS). Production builds only.
    inlineCss: true,
    optimizePackageImports: ["lucide-react", "@radix-ui/react-slot"],
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
