<template>
  <aside>
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
