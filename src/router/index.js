import { createRouter, createWebHistory } from 'vue-router';
import Hello from '../views/Main_Landing.vue';
import User_login from '../components/User_login.vue'; 
import User_signup from '../components/User_signup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Hello 
  },
  {
    path: '/User_login',
    name: 'User_login',
    component: User_login 
  },
  {
    path: '/User_signup',
    name: 'User_signup',
    component: User_signup 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
