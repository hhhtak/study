import { storiesOf } from '@storybook/vue';
import Logo from './../../app/components/Logo.vue';

storiesOf('Logo', module)
  .add('story as a template',
    () => '<Logo />'
  )
