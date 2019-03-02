const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias['@storybook/vue$'] = path.resolve(__dirname, '../node_modules/@storybook/vue')
  defaultConfig.resolve.alias['@'] = path.resolve(__dirname, '../../app');
  defaultConfig.resolve.alias['~'] = path.resolve(__dirname, '../../app');
  return defaultConfig;
}