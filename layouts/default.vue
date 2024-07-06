<template>
  <div class="flex flex-col h-screen w-100">
    <Header></Header>
    <div class="flex-grow bg-zinc-900">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<style scoped></style>
