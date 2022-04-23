<template>
  <div>
    <nav-bar />
    <div class="grid grid-cols-2">
      <div class="col-span-8"><slot></slot></div>
      <div class="col-span-4">
        <side-bar />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/page/NavBar'
import SideBar from '@/components/sidebar/SideBar'

export default {
  name: 'BasePage',
  components: { NavBar, SideBar }
}
</script>
