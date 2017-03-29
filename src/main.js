// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue' ;
import App from './App.vue' ;
import listView from './components/listView.vue' ;
import details from './components/details.vue' ;
import VueRouter from 'vue-router' ;


var _ = require('lodash');

Vue.use(VueRouter);

const routes = [
  { path: '/', component: listView },
  { path: '/details/:id', component: details }

];

const router = new VueRouter({
  routes,
  mode:'history',
});

Vue.config.productionTip = false ;

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
  router:router,
  template: '<App/>',
  components: { App }
})
