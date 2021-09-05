const path = require("path")

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-backgrounds'
  ],
  webpackFinal: async(config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '..'),
    }
    return config;
  }
}