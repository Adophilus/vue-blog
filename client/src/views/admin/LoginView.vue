<template>
  <!-- component -->
  <!-- This is an example component -->
  <div
    class="login_form border-2 border-primary p-10 pt-5 shadow-sm mx-auto flex rounded w-1/2"
  >
    <form @submit.prevent="onsubmit" class="sec flex-1">
      <span class="flex shadow-md mb-5 text-xs">
        <span
          class="bg-primary w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
          >Username</span
        ><input
          class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
          type="text"
          required
          placeholder=""
          v-model="username"
        />
      </span>
      <span class="flex shadow-md mb-5 text-xs">
        <span
          class="bg-primary w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
          >Password</span
        ><input
          class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
          type="password"
          required
          placeholder=""
          v-model="password"
        />
      </span>
      <!-- <a
        class="text-primary hover:underline font-bold text-xs ml-auto cursor-pointer"
        >Forgot Password?</a> -->
      <button
        type="submit"
        class="border-2 border-primary hover:bg-primary hover:text-gray-100 mt-3 text-primary text-center p-3 px-4 text-sm rounded cursor-pointer font-bold w-full"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import UserMixin from '@/mixins/user'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  mixins: [UserMixin],
  methods: {
    async onsubmit() {
      if (
        await this.loginUser({
          username: this.username,
          password: this.password
        })
      ) {
        this.$router.push({ name: 'dashboard' })
      }
    }
  }
}
</script>
