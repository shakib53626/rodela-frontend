import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './template.js'
import App from './App.vue'
import router from './router';
import "nprogress/nprogress.css"

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
