import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Diseño from '../views/Diseño.vue';
import Login from '../views/Login.vue';
import Logeado from '../views/Logeado.vue';
import Registro from '../views/Registro.vue';
import firebase from 'firebase';


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
    path: '/logeado',
    name: 'logeado',
    component: Logeado,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          alert('You must be logged in to see this page');
          next({
              path: '/',
          });
      }
  } else {
      next();
  }
});

export default router;