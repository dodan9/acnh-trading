import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/acnh-trading/",
  plugins: [react(), tsconfigPaths(), mkcert(), visualizer()],
  server: {
    proxy: {
      "/acnh-trading/nooki": {
        target: "https://api.nookipedia.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/acnh-trading\/nooki/, ""),
      },
      "/acnh-trading/img": {
        target: "https://dodo.ac",
        changeOrigin: true,

        rewrite: (path) => path.replace(/^\/acnh-trading\/img/, ""),
      },

      "/nooki": {
        target: "https://api.nookipedia.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nooki/, ""),
      },
      "/img": {
        target: "https://dodo.ac",
        changeOrigin: true,

        rewrite: (path) => path.replace(/^\/img/, ""),
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          html2canvas: ["html2canvas"],
        },
      },
    },
  },
});
