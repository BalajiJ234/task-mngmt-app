const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  // ...other configurations
  plugins: [
    new ModuleFederationPlugin({
      name: "userProfileApp",
      filename: "remoteEntry.js",
      exposes: {
        "./UserProfile": "./src/App",
      },
      shared: {
        ...deps,
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
