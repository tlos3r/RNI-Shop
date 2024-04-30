import { createRouter, createWebHistory } from 'vue-router'
import {
  AdminView,
  DashboardView,
  HomeView,
  LoginView,
  UserView,
  RegisterView,
  NotFound,
  ProductUserView,
  ProductDetailView
} from '@/views'
import ProductView from '@/views/admin/ProductView.vue'
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
          name: 'adminPanel',
          component: AdminView
        },
        {
          path: 'dashboard',
          name: 'dashboardview',
          component: DashboardView
        },
        {
          path: 'products',
          name: 'productsview',
          component: ProductView
        },
        {
          path: 'users',
          name: 'users',
          component: UserView
        }
      ]
    },
    {
      path: '/auth',
      name: 'authenticator',
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    },
    {
      path: '/products',
      name: 'products',
      children: [
        {
          path: '',
          name: 'productsUser',
          component: ProductUserView
        },
        {
          path: ':id',
          name: 'productDetail',
          component: ProductDetailView
        }
      ]
    }
  ]
})

export default router
