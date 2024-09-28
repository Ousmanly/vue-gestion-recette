import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import  fr  from './locale/fr.json'
import  en  from './locale/en.json'
import Lang from './components/lang.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);



const i18n = createI18n({
    locale: 'en', 
    fallbackLocale: 'en', 
    messages: {
      en,
      fr
    }
  });

  app.component('Lang', Lang);

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
