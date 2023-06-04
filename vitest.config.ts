import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: [
      ...configDefaults.exclude,
      "packages/template/*",
      "test/e2e/**/*.ts",
    ],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
