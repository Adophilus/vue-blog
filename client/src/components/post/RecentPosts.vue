<template>
  <section class="text-gray-600 body-font">
    <PostTabContainer>
      <PostTabItem />
    </PostTabContainer>
  </section>
</template>

<script>
import PostTabContainer from '@/components/post/PostTabContainer'
import PostTabItem from '@/components/post/PostTabItem'

export default {
  name: 'RecentPosts',
  components: { PostTabContainer, PostTabItem }
}
</script>
