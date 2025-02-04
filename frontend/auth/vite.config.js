import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./Auth": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3003,
  },
});
