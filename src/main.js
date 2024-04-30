import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { firebaseApp } from './firebase'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nice-forms.css'
const app = createApp(App)

app.use(firebaseApp)
app.use(createPinia())
app.use(router)

app.mount('#app')
