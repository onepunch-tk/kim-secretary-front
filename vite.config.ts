import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@graphql": path.resolve(__dirname, "./src/graphql"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
