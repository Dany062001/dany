import SimpleLayout from 'layouts/SimpleLayout.vue';
import MainLayout from 'layouts/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: SimpleLayout, // Utiliza SimpleLayout para la página de inicio
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/menu-inicio',
    name: 'MenuInicio',
    component: MainLayout, // Mantén MainLayout para otras páginas
    children: [{ path: '', component: () => import('pages/MenuInicio.vue') }],
  },
  // Otras rutas...
];

export default routes;
