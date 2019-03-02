import { configure } from '@storybook/vue';

const req = require.context("../../app/components", true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename)); // ②
}
configure(loadStories, module);
