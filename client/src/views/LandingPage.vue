<template>
  <BasePage>
    <RecentPosts />
  </BasePage>
</template>

<script>
import BasePage from '@/components/page/BasePage'
import RecentPosts from '@/components/post/RecentPosts'

export default {
  name: 'LandingPage',
  components: { BasePage, RecentPosts }
}
</script>
