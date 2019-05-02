// https://vuex.vuejs.org/en/actions.html

import axios from 'axios'
export default {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: process.env.VUE_APP_BASE_URL+'/users/login-admin', data: user, method: 'POST' })
        .then(res => {

        if (res.data.result !== 'Success'){
            alert(res.data.result)
        }
        else{
            const token = res.data.token
            const user = res.data.user
            user.token = token
            localStorage.setItem('token', token)
            localStorage.setItem('email', user.email)
            localStorage.setItem('userid', user._id)
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', user)
            resolve(res)
        }
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('userid')
      localStorage.removeItem('email')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}
