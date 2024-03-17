import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      component: () => import('../views/product/ProductHome.vue'),
      children: [
        {
          path: '',
          name: 'detail',
          component: () => import('../views/product/ProductDetail.vue')
        },
        {
          path: 'color',
          name: 'color',
          component: () => import('../views/product/ProductColor.vue')
        },
      ]
    },
    {
      path: '/bank',
      name: "bank",
      component: () => import("../views/bank/BankPortal.vue")
    },
    {
      path: '/bank/:id',
      name: "eachBank",
      component: () => import("../views/bank/EachBank.vue")
    },

  ]
})

export default router
