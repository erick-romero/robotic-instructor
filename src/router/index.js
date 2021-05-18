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
import DiseñoVideo1 from '../views/DiseñoVideo1.vue';
import DiseñoVideo2 from '../views/DiseñoVideo2.vue';
import DiseñoVideo3 from '../views/DiseñoVideo3.vue';
import DiseñoVideo4 from '../views/DiseñoVideo4.vue';
import DiseñoVideo5 from '../views/DiseñoVideo5.vue';
import ElectronicaVideo1 from '../views/ElectronicaVideo1.vue';
import ElectronicaVideo2 from '../views/ElectronicaVideo2.vue';
import ElectronicaVideo3 from '../views/ElectronicaVideo3.vue';
import ElectronicaVideo4 from '../views/ElectronicaVideo4.vue';
import ElectronicaVideo5 from '../views/ElectronicaVideo5.vue';
import ProgramacionVideo1 from '../views/ProgramacionVideo1.vue';
import ProgramacionVideo2 from '../views/ProgramacionVideo2.vue';
import ProgramacionVideo3 from '../views/ProgramacionVideo3.vue';
import ProgramacionVideo4 from '../views/ProgramacionVideo4.vue';
import ProgramacionVideo5 from '../views/ProgramacionVideo5.vue';

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
    path: '/DiseñoVideo1',
    name: 'DiseñoVideo1',
    component: DiseñoVideo1
    },
  {
      path: '/Programacion',
      name: 'Programacion',
      component: Programacion
  },
  {
    path: '/Electronica',
    name: 'electronica',
    component: electronica
  },
  {
    path: '/DiseñoVideo2',
    name : 'diseñoVideo2',
    component: DiseñoVideo2
  },
  {
    path: '/DiseñoVideo3',
    name : 'diseñoVideo3',
    component: DiseñoVideo3
  },
  {
    path: '/DiseñoVideo4',
    name : 'diseñoVideo4',
    component: DiseñoVideo4
  },
  {
    path: '/DiseñoVideo5',
    name : 'diseñoVideo5',
    component: DiseñoVideo5
  },
  {
    path: '/ElectronicaVideo1',
    name : 'electronicaVideo1',
    component: ElectronicaVideo1
  },
  {
    path: '/ElectronicaVideo2',
    name : 'electronicaVideo2',
    component: ElectronicaVideo2
  },
  {
    path: '/ElectronicaVideo3',
    name : 'electronicaVideo3',
    component: ElectronicaVideo3
  },
  {
    path: '/ElectronicaVideo4',
    name : 'electronicaVideo4',
    component: ElectronicaVideo4
  },
  {
    path: '/ElectronicaVideo5',
    name : 'electronicaVideo5',
    component: ElectronicaVideo5
  },
  {
    path: '/ProgramacionVideo1',
    name: 'programacionVideo1',
    component: ProgramacionVideo1
  },
  {
    path: '/ProgramacionVideo2',
    name: 'programacionVideo2',
    component: ProgramacionVideo2
  },
  {
    path: '/ProgramacionVideo3',
    name: 'programacionVideo3',
    component: ProgramacionVideo3
  },
  {
    path: '/ProgramacionVideo4',
    name: 'programacionVideo4',
    component: ProgramacionVideo4
  },
  {
    path: '/ProgramacionVideo5',
    name: 'programacionVideo5',
    component: ProgramacionVideo5
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router;