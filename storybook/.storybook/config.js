import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins をインポートします

// Import your custom components.
// Custom Component を import します。
// import Mybutton from '../src/stories/Button.vue';
import Logo from '../../app/components/Logo.vue';

// Install Vue plugins.
// Vue plugin をインストールします。
Vue.use(Vuex);

// Register custom components.
// Custom Component を登録します。
// Vue.component('my-button', Mybutton);
Vue.component('Logo', Logo);

function loadStories() {
  // 必要な Story を require します。
  // You can require as many stories as you need.
  // require('../src/stories');
  require('../stories');
  // require('../../app/components');
  // require('../../app/components');
}

configure(loadStories, module);

// import { configure } from "@storybook/vue";
//
// const req = require.context("../../app/components", true, /stories.js$/); // ①
//
// function loadStories() {
//   req.keys().forEach(filename => req(filename)); // ②
// }
//
// configure(loadStories, module);