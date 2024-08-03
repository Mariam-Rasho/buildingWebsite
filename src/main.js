
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// Import all of Bootstrap's JS
import App from './App.vue'
// import myPlugin from '@vitejs/plugin-vue'; 
const app = createApp(App)
// app.use(myPlugin)
app.mount('#app')
