<template>
  <aside class="mt-10 lg:mt-0">
    <recent-posts />
  </aside>
</template>

<script>
import RecentPosts from '@/components/page/sidebar/RecentPosts.vue'

export default {
  components: { RecentPosts },
  name: 'SideBar'
}
</script>
