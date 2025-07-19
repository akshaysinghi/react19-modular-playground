import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      manifest: true,
      remotes: {
        auth: {
          type: "module",
          name: "auth",
          entry: "http://localhost:5173/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3000,
  },
});
