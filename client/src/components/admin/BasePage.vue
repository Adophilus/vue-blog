<template>
  <div>
    <side-bar />

    <div class="md:pl-64 flex flex-col flex-1">
      <nav-bar />

      <main class="overflow-hidden">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/admin/NavBar'
import SideBar from '@/components/admin/SideBar'

export default {
  name: 'BasePage',
  components: { NavBar, SideBar }
}
</script>

<style>
@import url('https://rsms.me/inter/inter.css');
</style>
