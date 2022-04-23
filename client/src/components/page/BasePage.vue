<template>
  <div class="flex flex-col h-screen justify-between font-Lato">
    <nav-bar />
    <div class="flex flex-col lg:flex-row mt-4 lg:mt-12 gap-x-3">
      <div class="flex-grow"><slot></slot></div>
      <div class="md:w-1/3">
        <side-bar />
      </div>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '@/components/page/FooterBar'
import NavBar from '@/components/page/NavBar'
import SideBar from '@/components/sidebar/SideBar'

export default {
  name: 'BasePage',
  components: { FooterBar, NavBar, SideBar }
}
</script>
