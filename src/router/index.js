import { createRouter, createWebHistory } from 'vue-router'
import { AdminView, DashboardView, HomeView, ProductView, UserView } from '@/views'
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
      children: [
        {
          path: '',
          component: AdminView
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: 'products',
          name: 'products',
          component: ProductView
        },
        {
          path: 'users',
          name: 'users',
          component: UserView
        }
      ]
    }
  ]
})

export default router
