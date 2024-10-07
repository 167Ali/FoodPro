import { createRouter, createWebHistory } from 'vue-router';
import Restaurantpage from '../views/Restaurantpage.vue'
const routes = [
    {
        path: '/',
        name: 'restaurant-page',
        component: Restaurantpage
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;