import dotenv from "dotenv"
import { defineConfig } from "cypress"
import codeCoverage from "@cypress/code-coverage/task"

dotenv.config({ path: ".env.development" })

export default defineConfig({
  env: {
    coverage: String(process.env.CYPRESS_COVERAGE) === "true",
    codeCoverage: {
      url: String(process.env.CYPRESS_COVERAGE_API_URL),
    },
  },

  e2e: {
    baseUrl: String(process.env.CYPRESS_BASE_URL),
    setupNodeEvents(on, config) {
      codeCoverage(on, config)
      return config
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
})
