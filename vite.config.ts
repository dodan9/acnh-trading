import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), mkcert()],
  server: {
    proxy: {
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
});
