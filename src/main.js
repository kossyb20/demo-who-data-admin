// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import Axios from 'axios'
import VueAlertify from 'vue-alertify'

Vue.prototype.$http = Axios
Vue.use(VueAlertify)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// Sync store with router
sync(store, router)

Vue.config.productionTip = false

Vue.mixin({
  data () {
    return {
      urls: {
        // getAllEntries: 'https://ngwho-data.herokuapp.com/api/get-all',
        // postEntry: 'https://ngwho-data.herokuapp.com/api/post',
        // createCenter: 'https://ngwho-data.herokuapp.com/api/create-center',
        // getCenters: 'https://ngwho-data.herokuapp.com/api/get-centers',
        // register:  'https://ngwho-data.herokuapp.com/users/register',
        // login:  'https://ngwho-data.herokuapp.com/users/login',
        getAllEntries: process.env.VUE_APP_BASE_URL + '/api/get-all',
        postEntry: process.env.VUE_APP_BASE_URL + '/api/save-entry',
        createCenter: process.env.VUE_APP_BASE_URL + '/api/create-center',
        getCenters: process.env.VUE_APP_BASE_URL + '/api/get-centers',
        register: process.env.VUE_APP_BASE_URL + '/users/register',
        login: process.env.VUE_APP_BASE_URL + '/users/login-admin',
        getCenterEntries: process.env.VUE_APP_BASE_URL + '/api/get-center-entries',
        getDateFilteredEntries: process.env.VUE_APP_BASE_URL + '/api/get-entries-by-date',
        getDateRangeFilteredEntries: process.env.VUE_APP_BASE_URL + '/api/get-entries-by-daterange'
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
