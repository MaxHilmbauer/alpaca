import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const dark = {
  dark: true,
  colors: {
    background: '#111111',
    surface: '#151515',
    primary: '#2962FF',
    secondary: '#673AB7',
    error: '#F44336',
    info: '#3F51B5',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const light = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F6F8FA',
    primary: '#2962FF',
    secondary: '#673AB7',
    third: '#FFFFFF',
    error: '#F44336',
    info: '#3F51B5',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      dark,
      light
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
