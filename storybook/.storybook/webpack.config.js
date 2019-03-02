const path = require('path')

module.exports = (baseConfig, env, config) => {
  config.resolve.alias['@storybook/vue'] = path.resolve(__dirname, '../node_modules/@storybook/vue')
  config.resolve.alias['@'] = path.resolve(__dirname, '../../app');
  config.resolve.alias['~'] = path.resolve(__dirname, '../../app');
  return config;
}