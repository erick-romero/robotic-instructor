import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Diseño from '../views/Diseño.vue';
import Login from '../views/Login.vue';
import Home_loged from '../views/Home_loged.vue';
import Registro from '../views/Registro.vue';
import Cuenta from '../views/Cuenta.vue';
import Programacion from '../views/Programacion.vue';
import electronica from '../views/electronica.vue';






import Blockly_zone from '../views/Blockly_zone.vue';
import DiseñoVideo from '../views/DiseñoVideo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blockly_zone',
    name: 'blockly_zone',
    component: Blockly_zone
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
    component: Cuenta
  },
  {
    path: '/DiseñoVideo',
    name: 'diseñoVideo',
    component: DiseñoVideo
    },
    {
        path: '/Programacion',
        name: 'Programacion',
        component: Programacion
    },
    {
      path: '/electronica',
      name: 'electronica',
      component: electronica
    },
  
    

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;