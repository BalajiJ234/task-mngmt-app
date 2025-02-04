import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: "tasks",
      filename: "remoteEntry.js",
      exposes: {
        "./Tasks": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
});
