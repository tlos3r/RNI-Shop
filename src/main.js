import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { firebaseApp } from './firebase'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'nice-forms.css'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(firebaseApp)
app.use(createPinia())
app.use(Vue3Toasity, {
  autoClose: 2000
})
app.use(router)

app.mount('#app')
