import Vue from 'vue'
import VueRouter from 'vue-router'
import manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import( '../pages/Login.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: manager,
    children:[{
      path:'home',
      component: () => import( '../pages/manager/Home.vue')
    },{
      path:'user',
      component: () => import( '../pages/manager/User.vue'),
    },{
      path:'order',
      component: () => import( '../pages/manager/Order.vue')
    },]
  },
  {
    path: '/revenue',
    name: 'revenue',
    component: () => import( '../pages/manager/Revenue.vue')
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import( '../pages/manager/Myorder.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
