import User from '@/models/User'

export default {
  methods: {
    fetchCurrentUser() {},
    loginUser(login) {
      return User.login(this.$root.axios, login)
    }
  }
}
