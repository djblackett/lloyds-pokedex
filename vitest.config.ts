import path from "path";
/** @type {import('vite').UserConfig} */
import react from "@vitejs/plugin-react";
const config = {
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
};

export default config;
