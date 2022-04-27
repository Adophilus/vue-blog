<template>
  <section class="body-font">
    <div class="mb-8">
      <h2
        class="text-xl text-black font-bold border-b-4 border-primary inline py-2 ml-6"
      >
        Recent Posts
      </h2>
    </div>
    <div class="flex flex-col">
      <post-tab v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </section>
</template>

<script>
import PostMixin from '@/mixins/post'
import PostTab from '@/components/page/sidebar/RecentPostTab'

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
