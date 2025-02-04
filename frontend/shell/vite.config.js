import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "shell",
      remotes: {
        dashboard: "http://localhost:3001/assets/remoteEntry.js",
        tasks: "http://localhost:3002/assets/remoteEntry.js",
        auth: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
