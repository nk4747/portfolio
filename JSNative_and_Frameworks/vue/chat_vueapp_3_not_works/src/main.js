import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './router/routes'


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({

routes: Routes,
mode: 'history'

});




new Vue({

  router,
  el: '#app',
  render: h => h(App),
 
})
