import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './pages/WelcomePage.vue'


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
    meta: { requiresAuth: true }
  }
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

export default router
