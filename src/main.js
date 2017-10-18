// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyload from 'vue-lazyload'
import '@/config/rem'
Vue.config.productionTip = false

Vue.use(vueLazyload, {
  preLoad: 1.3,
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
  render (h) {
    return h(App)
  }
})
