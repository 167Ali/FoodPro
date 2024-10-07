import {
  createRouter,
  createWebHistory
} from 'vue-router';
import ProfileSettings from '../views/ProfileSettings.vue';
import FavoritesPage from '../views/favs.vue'
const routes = [{
    path: '/',
    name: 'ProfileSettings',
    component: ProfileSettings // Lazy-loaded
  },
  {
    path: '/fav',
    name: 'Favorites',
    component: FavoritesPage, // Add the FavoritesPage route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;