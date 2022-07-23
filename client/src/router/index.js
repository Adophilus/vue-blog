import { createRouter, createWebHistory } from 'vue-router'
import admin from '@/router/admin'
import views from '@/router/views'

const routes = [...admin, ...views]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
