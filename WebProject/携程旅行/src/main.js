// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false;
import axios from 'axios'
Vue.prototype.$axios = axios;
import 'font-awesome/css/font-awesome.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

import Vant from 'vant';
import 'vant/lib/index.css';
import { Overlay } from 'vant';
Vue.use(Vant);
Vue.use(Overlay);
import local from './lib/unitl' //全局引入unitl.js内的方法
Vue.use(local);                 //全局使用

//懒加载
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
Vue.use(VueAwesomeSwiper);



import 'bootstrap/dist/css/bootstrap.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
