import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Crt from './views/Crt.vue'
import My from './views/My.vue'
import City from './views/City.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/home',
      redirect:{name:'home'}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:About
    },
    {
      path:'/crt',
      name:'crt',
      component:Crt,
    },
    {
      path:'/my',
      name:'my',
      component:My,
    },
    {
      path:'/city',
      name:'city',
      component:City,
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    }
  ]
})
