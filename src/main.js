// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue' ;
import App from './App' ;

var _ = require('lodash');

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyATCZ_g-h_tNu5qkG2xgnzcVRYGbkUh3Xs',
      v: '3.26',
      // libraries: 'places', //// If you need to use place input
    }
  });


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
