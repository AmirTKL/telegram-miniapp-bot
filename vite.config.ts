import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/telegram-miniapp-bot/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },

  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    basicSsl(),
    tsconfigPaths(),
  ],
  build: {
    target: "esnext",
    copyPublicDir: true,
    outDir: "dist",
  },
  // publicDir: "public",
  server: {
    host: true,
  },
});
