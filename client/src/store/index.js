import Vue from 'vue';
import Vuex from 'vuex';

import feathersVuex from './feathersVuex';

import localAuth from './localAuth';
import board from './board';

const {
  service,
  auth,
  FeathersVuex,
} = feathersVuex;

Vue.use(Vuex);
Vue.use(FeathersVuex);

export default new Vuex.Store({
  plugins: [
  auth({
    userService: 'users',
  })
],
});