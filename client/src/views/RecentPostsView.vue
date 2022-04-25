<template>
  <base-page>
    <recent-posts />
  </base-page>
</template>

<script>
import BasePage from '@/components/page/BasePage'
import RecentPosts from '@/components/post/RecentPosts'

export default {
  name: 'RecentPostsView',
  components: { BasePage, RecentPosts }
}
</script>
