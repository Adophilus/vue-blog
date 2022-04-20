<template>
  <div class="grid grid-cols-2">
    <div class="col-span-"><slot></slot></div>
    <div class="col-span-4">
    <SideBar />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/page/SideBar'

export default {
  name: 'BasePage',
  components: { SideBar }
}
</script>
