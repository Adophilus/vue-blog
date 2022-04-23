<template>
  <base-page>
    <span>{{ $route.params.id }}</span>
  </base-page>
</template>

<script>
import BasePage from '@/components/page/BasePage'

export default {
  name: 'PostView',
  components: { BasePage }
}
</script>
