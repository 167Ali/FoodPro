import { createRouter, createWebHistory } from 'vue-router';
import Hello from '../views/Main_Landing.vue';
import User_login from '../components/User_login.vue'; 
import User_signup from '../components/User_signup.vue';
import Bussiness_Landing from '../views/Bussiness_Landing.vue';
import RestaurantOwner_Dashboard from '../views/RestaurantOwner_Dashboard.vue';
const routes = [
  {
    path: '/home',
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
  },
  {
    path: '/BL',
    name: 'Bussiness_Landing',
    component: Bussiness_Landing 
  },
  {
    path:'/RO',
    name:'RestaurantOwner',
    component:RestaurantOwner_Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
