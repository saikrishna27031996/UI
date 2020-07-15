import Vue from 'vue'
import Main from './Main.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FormInputPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import {router} from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(FormInputPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
