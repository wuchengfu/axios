// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
import './rem/rem.js'
import axios from 'axios'
import {post,fetch,patch,put} from './axios/http.js'
Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.$post=post;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	
})

