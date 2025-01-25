import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    swcPlugins: [
      [
        "swc-plugin-coverage-instrument",
        {
          compact: true,
          unstableExclude: ["**/node_modules/**/*"],
        },
      ],
    ],
  },
}

export default nextConfig
