const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  // ...other configurations
  plugins: [
    new ModuleFederationPlugin({
      name: "taskManagementApp",
      filename: "remoteEntry.js",
      exposes: {
        "./TaskManagement": "./src/App",
      },
      shared: {
        ...deps,
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
