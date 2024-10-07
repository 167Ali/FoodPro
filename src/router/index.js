import { createRouter, createWebHistory } from 'vue-router';
import LoginHeader from '../components/LoginHeader.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: LoginHeader // Lazy-loaded
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;