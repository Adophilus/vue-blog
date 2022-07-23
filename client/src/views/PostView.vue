<template>
  <base-post-page>
    <div class="mb-4">
      <header
        class="inline-block font-title-sm sm:font-title-md md:font-title-lg pb-4"
      >
        {{ post.title }}
      </header>
      <div class="border-b-8 border-b-primary w-1/5"></div>
    </div>
    <div class="mt-8 text-sm sm:text-md md:text-lg" v-html="post.content"></div>
  </base-post-page>
</template>

<script>
import BasePostPage from '@/components/page/BasePostPage'
import PostMixin from '@/mixins/post'

export default {
  name: 'PostView',
  components: { BasePostPage },
  mixins: [PostMixin],
  data() {
    return {
      post: {}
    }
  },
  async mounted() {
    this.post = await this.fetchPostBySlug(this.$route.params.slug)
  }
}
</script>
