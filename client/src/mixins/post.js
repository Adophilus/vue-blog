import Post from '@/models/Post'

export default {
  methods: {
    fetchPosts() {
      return Post.get(this.$root.axios)
    },
    fetchPostById(id) {
      return Post.get(this.$root.axios, { id })
    }
  }
}
