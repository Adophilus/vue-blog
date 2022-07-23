<template>
  <div class="flex flex-col h-screen justify-between font-Lato">
    <nav-bar />
    <slot></slot>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '@/components/page/FooterBar'
import NavBar from '@/components/page/NavBar'

export default {
  name: 'BasePage',
  components: { FooterBar, NavBar }
}
</script>
