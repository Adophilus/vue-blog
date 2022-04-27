<template>
  <base-page>
    <div class="flex flex-col lg:flex-row mt-4 lg:mt-12 gap-x-3">
      <div class="flex-grow"><slot></slot></div>
      <div class="md:w-1/3">
        <side-bar />
      </div>
    </div>
  </base-page>
</template>

<script>
import BasePage from '@/components/page/BasePage'
import SideBar from '@/components/page/sidebar/SideBar'

export default {
  name: 'BasePostPage',
  components: { BasePage, SideBar }
}
</script>
