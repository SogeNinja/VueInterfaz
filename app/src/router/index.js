import { createRouter, createWebHistory } from '@ionic/vue-router';
import PaginaInicio from '../pages/PaginaInicio.vue';
import GenerarPassword from '../pages/GenerarPassword.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/inicio',
    component: PaginaInicio
  },
  {
    path: '/generador',
    component: GenerarPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
