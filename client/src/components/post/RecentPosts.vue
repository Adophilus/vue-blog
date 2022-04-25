<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <recent-post-tab
          v-for="post in posts"
          :key="post._id"
          :post="post"
        ></recent-post-tab>
      </div>
    </div>
  </section>
</template>

<script>
import PostMixin from '@/mixins/post'
import RecentPostTab from '@/components/post/RecentPostTab'

export default {
  name: 'RecentPosts',
  components: {
    RecentPostTab
  },
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
