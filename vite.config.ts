import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,

    // 🔥 permite qualquer subdomínio do Cloudflare Tunnel
    allowedHosts: [
      ".trycloudflare.com",
    ],

    // 🔥 necessário para acesso externo (celular)
    host: true,
  },
});