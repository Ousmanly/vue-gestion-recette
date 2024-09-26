import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import  fr  from './lang/fr.json'
import  en  from './lang/en.json'
const app = createApp(App)

const i18n = createI18n({
    lang: 'en', // Langue par défaut
    fallbacklang: 'en', // Langue de secours
    messages: {
      en,
      fr
    }
  });

app.use(createI18n())
app.use(createPinia())
app.use(router)

app.mount('#app')
