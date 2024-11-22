import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue';  // Your home page component
import SignUp from './components/SignUp.vue';  // The new sign-up page component

const routes = [
  { path: '/', component: Home },  // Home page
  { path: '/signup', component: SignUp }  // Sign up page
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
