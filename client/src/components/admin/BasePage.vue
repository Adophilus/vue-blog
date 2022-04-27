<template>
  <div>
    <side-bar />

    <div class="md:pl-64 flex flex-col flex-1">
      <nav-bar />

      <main>
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <slot></slot>
          </div>
        </div>
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
