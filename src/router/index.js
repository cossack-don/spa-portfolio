import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import Error404 from '../views/Error404.vue'

import AboutMe from '../views/AboutMe.vue'
import VueProjects from '../views/VueProjects.vue'
import Developments from '../views/Developments.vue'
import Salmagundi from '../views/Salmagundi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },

  {
    path: '/vue-prodjects',
    name: 'VueProjects',
    component: VueProjects
  },
  {
    path: '/developments',
    name: 'Developments',
    component: Developments
  },
  {
    path: '/salmagundi',
    name: 'Salmagundi',
    component: Salmagundi
  },
  {
    path: "*",
    name: "error-404",
    component: Error404
}
] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
