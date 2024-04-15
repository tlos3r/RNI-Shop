import { createRouter, createWebHistory } from 'vue-router'
import { AdminView, DashboardView, ProductView } from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/admin/products',
      name: 'products',
      component: ProductView
    }
  ]
})

export default router
