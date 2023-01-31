import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser,faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import {DatePicker} from 'v-calendar';
import router from './router'
import store from './store'
import './assets/tailwind.css'

library.add(faUserSecret,faUser,faBook,faCircleQuestion,faRectangleList)

createApp(App)
    .use(store)
    .use(router)
    .component('DatePicker', DatePicker)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
