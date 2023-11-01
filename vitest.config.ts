/** @type {import('vite').UserConfig} */
import react from "@vitejs/plugin-react";
const config = {
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react()],
};

export default config;
