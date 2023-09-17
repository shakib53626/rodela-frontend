import { createApp } from 'vue'
import axios from 'axios';
import { createPinia } from 'pinia'
import './style.css'
import './template.js'
import App from './App.vue'
import router from './router';
import "nprogress/nprogress.css"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
