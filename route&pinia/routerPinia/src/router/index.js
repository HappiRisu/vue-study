import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // 해쉬 라우팅 방식 -> createWebHashHistory
  // 브라우저 라우팅 방식 -> createWebHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jp',
      name: 'jpbank',
      component: () => import('../views/bank/JpBank.vue'),
    },
    {
      path: '/mb',
      name: 'mitubishibank',
      component: () => import('../views/bank/MitubishiBank.vue'),
    },
    {
      path: '/about/:id',
      // name: 'about', // name 속성 값을 중복되지 않게 해야한다 // children 속성이 같이 쓰이게 되면 name을 삭제
      component: () => import('../views/AboutView.vue'), //lazy loading -> 초기의 접속 속도를 빠르게 하고 싶다면 이런 방식으로 해준다
      children: [
        {
          path: '',
          name: 'aboutHome',
          component: () => import('../views/AboutHome.vue'),
        },
        {
          path: 'fruit',
          name: 'fruit',
          component: () => import('../views/FruitView.vue'),
        },
        {
          path: 'number',
          name: 'number',
          component: () => import('../views/NumberView.vue'),
        },
      ],
    },
    // {
    //   path: '/about/:id/fruit',
    //   name: 'fruit', // name 속성 값을 중복되지 않게 해야한다
    //   component: () => import('../views/FruitView.vue'), //lazy loading -> 초기의 접속 속도를 빠르게 하고 싶다면 이런 방식으로 해준다
    // },
    {
      path: '/about/:id/number',
      name: 'number', // name 속성 값을 중복되지 않게 해야한다
      component: () => import('../views/NumberView.vue'), //lazy loading -> 초기의 접속 속도를 빠르게 하고 싶다면 이런 방식으로 해준다
    },
  ],
});

export default router;
