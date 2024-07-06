<template>
  <div>
    <Toaster></Toaster>
    <NuxtPage />
  </div>
</template>
<script>
import Toaster from '@/components/ui/toast/Toaster.vue'
useHead({
  title: '跑跑飄移商城',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'kartrider-drift.ico'
    }
  ]
})
</script>
