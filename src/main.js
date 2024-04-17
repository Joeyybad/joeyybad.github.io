import './assets/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from '../node_modules/vue/dist/vue.d.ts'
import App from './App.vue'


import router from "./router"
createApp(App).use(router).mount('#app')
