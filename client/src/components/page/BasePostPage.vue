<template>
  <base-page>
    <div
      class="flex flex-col lg:flex-row mt-4 lg:mt-12 mx-4 sm:mx-12 lg:mx-8 mt-4 gap-y-10 gap-x-24"
    >
      <div class="w-2/3">
        <slot></slot>
      </div>

      <side-bar class="flex-grow" />
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
