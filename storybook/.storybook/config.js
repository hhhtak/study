import { configure, addDecorator } from "@storybook/vue";
import Decorator from "./Decorator.vue";

const req = require.context("../../src/components", true, /stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => ({
  components: { Decorator },
  template: `
    <decorator>
      <story slot="story"></story>
    </decorator>
  `
}));

configure(loadStories, module);
