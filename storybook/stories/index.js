import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

// import MyButton from './Button.vue';
import Logo from './../../app/components/Logo.vue';

storiesOf('Logo', module)
  .add('story as a template',
    // () => '<my-button :rounded="true">story as a function template</my-button>'
    () => '<Logo />'
  )
  // .add('story as a component', () => ({
  //   components: { MyButton },
  //   template: '<my-button :rounded="true">rounded</my-button>'
  // }));