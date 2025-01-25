import dotenv from "dotenv"
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

dotenv.config({ path: ".env.development" })

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    coverage: {
      include: [String(process.env.COVERAGE_GLOB)],
    },
  },
})
