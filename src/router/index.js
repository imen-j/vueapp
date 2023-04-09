import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../components/RegistrationForm.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginForm.vue')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import('../components/forgotPassword.vue')
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router