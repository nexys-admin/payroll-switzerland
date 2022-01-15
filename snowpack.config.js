// Snowpack Configuration File
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/",
  },
  exclude: ["**/*.test.ts", "**/*.test.tsx", "lib/test/test-utils.tsx","**/node_modules/**/*", "LICENSE"],
  routes: [
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
};