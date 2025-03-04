import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import SigninForm from './components/SigninForm.vue';
import HomePage from './components/HomePage.vue';
import ActivityHistory from './components/ActivityHistory.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/signin', component: SigninForm},
  { path: '/home', component: HomePage },
  { path: '/activities', component: ActivityHistory}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Verifica se há um usuário logado antes de acessar as páginas
router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('loggedUser');
  
    if (!user && to.path !== '/login' && to.path !== '/signin') {
      next('/login'); // Permite acesso ao login e cadastro sem estar autenticado
    } else if (user && (to.path === '/login' || to.path === '/signin')) {
      next('/home'); // Se estiver logado, não pode acessar login nem cadastro
    } else {
      next();
    }
});

export default router;