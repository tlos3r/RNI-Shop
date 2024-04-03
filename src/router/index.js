import { createRouter, createWebHistory } from 'vue-router'
import { AdminView, DashboardView } from '@/views/admin'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

export default router
