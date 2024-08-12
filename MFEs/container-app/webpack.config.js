const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  // ...other configurations
  plugins: [
    new ModuleFederationPlugin({
      name: "containerApp",
      remotes: {
        taskManagementApp:
          "taskManagementApp@http://localhost:3001/remoteEntry.js",
        taskOverviewApp: "taskOverviewApp@http://localhost:3002/remoteEntry.js",
        userProfileApp: "userProfileApp@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};
