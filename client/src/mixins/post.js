import Post from '@/models/Post'

export default {
  methods: {
    createPost({ title, content }) {
      let post = new Post(this.$root.axios, { title, content })
      return post.save()
    },
    fetchPosts() {
      return Post.get(this.$root.axios)
    },
    fetchPostById(id) {
      return Post.get(this.$root.axios, { id })
    },
    async fetchPostBySlug(slug) {
      let posts = await Post.get(this.$root.axios, { where: { slug } })
      return posts[0] // slugs are unique
    },
    updatePost(post) {
      post = new Post(this.$root.axios, post)
      return post.save()
    }
  }
}
