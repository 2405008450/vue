import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/Manage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import( '../views/Manage.vue'),
    redirect:"/login",
    children:[
      {        path:'home', name:'Home', component: () => import('../views/Home.vue')},
      {        path:'user', name:'User', component: () => import('../views/User.vue')},
      {
        path: '/mv',
        name: 'mv',
        component: () => import( '../views/mv.vue')
      },
      {
        path: '/mv3',
        name: 'mv3',
        component: () => import( '../views/mv3.vue')
      },
      {
        path: '/mv2',
        name: 'mv2',
        component: () => import( '../views/mv2.vue')
      },
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
