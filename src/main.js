// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import './mock/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './utils/rem';
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // router,
  // components: { App },
  // render: h => h(App),
  // template: '<App/>'
  el: '#app',
  router,
  render: h => h(App)
})
