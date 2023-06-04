import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "c8",
    },
    exclude: [
      ...configDefaults.exclude,
      "packages/template/*",
      "tests/e2e/**/*.ts",
    ],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
