import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from './components/Signup'
import Login from './components/Login'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/signup', component: Signup,
      
    },
    {
      path: '/', component: Login,
    }
  ]
})
