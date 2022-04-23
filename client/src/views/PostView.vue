<template>
  <base-page>
    <section class="container mx-4 mt-4">
      <div class="mb-4">
        <header
          class="inline-block font-title-sm sm:font-title-md md:font-title-lg pb-4"
        >
          {{ post.title }}
        </header>
        <div class="border-b-8 border-b-primary w-1/5"></div>
      </div>
      <div class="mt-8">
        {{ post.content }}
      </div>
    </section>
  </base-page>
</template>

<script>
import BasePage from '@/components/page/BasePage'
import PostMixin from '@/mixins/post'

export default {
  name: 'PostView',
  components: { BasePage },
  mixins: [PostMixin],
  data() {
    return {
      post: {}
    }
  },
  async mounted() {
    this.post = await this.fetchPostById(this.$route.params.id)
    console.log(this.post)
  }
}
</script>
