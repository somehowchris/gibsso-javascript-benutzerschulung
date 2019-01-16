// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuesax from 'vuesax'
import VueScrollTo from 'vue-scrollto'
import 'vuesax/dist/vuesax.css' // Vuesax styles
import App from './App'
import router from './router'
import 'material-icons/iconfont/material-icons.css'
import './assets/fonts/SansPro.css'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#1781E3',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
