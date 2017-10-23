// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import '@/config/rem'
import './assets/style/common.scss'



Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(vueLazyload, {
  preLoad: 1.1,
  error: require('./assets/404.png'),
  loading: require('./assets/loading-spin.svg'),
  attempt: 1
})

// 解决点击300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    require('fastclick').attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render (h) {
    return h(App)
  }
})
