import { createApp } from 'vue'
import App from './App.vue'

// Si tenías import router from './router', elimínalo
const app = createApp(App)
// app.use(router) <-- Quita o comenta esta línea
app.mount('#app')