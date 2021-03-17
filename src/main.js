import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {auth} from './firebase';  
console.log(auth);
createApp(App).use(router).mount('#app')