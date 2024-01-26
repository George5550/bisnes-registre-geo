// import './assets/main.css'
// import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import message from './locales/message'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faMagnifyingGlass, faX, faBan, faInfo, faBars, faRotateLeft, faHouse ,faFileArrowDown ,faPrint,  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faMagnifyingGlass, faX, faBan, faInfo,faBars,faRotateLeft,faHouse,faFileArrowDown,faPrint,)


// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css"

  const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'ka', // Set the default locale here
    fallbackLocale: 'ka', // Set the fallback locale here
    messages: message,
  })

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueAwesomePaginate)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"
