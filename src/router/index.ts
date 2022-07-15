import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: import('@/pages/test1/test1.vue')
  },
  {
    path: '/test2',
    component: import('@/pages/test2/test2.vue')
  }
];

export const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;