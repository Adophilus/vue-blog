<template>
  <section class="text-gray-600 body-font">
    <post-tab v-for="post in posts" :key="post._id" :post="post" />
  </section>
</template>

<script>
import PostMixin from '@/mixins/post'
import PostTab from '@/components/sidebar/RecentPostTab'

export default {
  name: 'RecentPosts',
  components: { PostTab },
  mixins: [PostMixin],
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async loadPosts() {
      this.posts = await this.fetchPosts()
    }
  },
  mounted() {
    this.loadPosts()
  }
}
</script>
