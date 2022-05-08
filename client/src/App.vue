<template>
  <router-view />
</template>

<script>
import AppMixin from '@/mixins/app'

export default {
  name: 'App',
  mixins: [AppMixin]
}
</script>
