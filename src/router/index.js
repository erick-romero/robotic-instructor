import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Diseño from '../views/Diseño.vue';
import Login from '../views/Login.vue';
import Home_loged from '../views/Home_loged.vue';
import Registro from '../views/Registro.vue';
import Cuenta from '../views/Cuenta.vue';
import Programacion from '../views/Programacion.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/diseño',
    name: 'diseño',
    component: Diseño
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home_loged',
    name: 'home_loged',
    component: Home_loged,
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
  },
  {
    path: '/cuenta',
    name: 'cuenta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cuenta
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;