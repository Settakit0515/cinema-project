import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Dashboard from '@/Layouts/Dashboard.vue'
import More from '@/components/More.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'more',
          name: 'more',
          component: More
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
