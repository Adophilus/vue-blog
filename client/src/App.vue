<template>
  <router-view />
</template>

<script>
import axios from "axios"

export default {
  name: "App",
  data () {
    return {
      server: axios.create({
        baseUrl: "http://localhost:3000/api/"
      })
    }
  }
}
</script>
