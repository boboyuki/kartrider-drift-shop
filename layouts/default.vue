<template>
  <div class="flex flex-col h-screen w-100">
    <LayoutDefaultHeader></LayoutDefaultHeader>
    <div class="flex-grow">
      <slot />
    </div>
    <LayoutDefaultFooter></LayoutDefaultFooter>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>