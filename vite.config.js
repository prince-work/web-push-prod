import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  base: "/web-push",
  server: { https: true }, // Not needed for Vite 5+
  plugins: [mkcert()],
});
