// https://vuex.vuejs.org/en/mutations.html

export default {
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, admin) {
    state.status = 'success'
    state.token = admin.token
    state.admin = admin
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  },
}
