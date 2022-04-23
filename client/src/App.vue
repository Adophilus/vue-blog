<template>
  <router-view />
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api/'

export default {
  name: 'App',
  data() {
    return {
      axios: axios.create({
        baseUrl: 'http://localhost:3000/api/'
      }),
      config: {
        site: {
          name: 'Company Name',
          title: 'Title'
        },
        social: {
          twitter: 'https://twitter.com/adophilus'
        }
      }
    }
  }
}
</script>
