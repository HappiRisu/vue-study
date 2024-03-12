import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductList,
      meta : {
        layout: "DefaultLayout"
      }
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/ProductDetail.vue"),
      meta : {
        layout: "DefaultLayout"
      }
    },
    {
      path: "/community",
      name: "community",
      component: () => import("../views/CommunityList.vue"),
      meta : {
        requiresAuth: true,
        layout: "DefaultLayout"
      }
    },
    {
      path: "/community/:language/posts/:id",
      name: "communityDetail",
      component: () => import("../views/CommunityDetail.vue"),
      meta : {
        requiresAuth: true,
        layout: "DefaultLayout"
      }
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/LayoutHome.vue"),
      meta : {
        requiresAuth: true,
        layout: "DefaultLayout"
      }
    },
    {
      path: "/layout/about",
      name: "layoutAbout",
      component: () => import("../views/LayoutAbout.vue"),
      meta : {
        requiresAuth: true,
        layout: "AsideLayout"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
      meta: {
        layout: "DefaultLayout"
      }
    }
  ]
})

export default router
