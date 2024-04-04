<template>
  <NuxtLayout>
    <section class="bg-zinc-900 h-full flex-col">
      <div class="flex justify-around items-center py-10 px-5">
        <Card
          v-for="productCategory in productCategories"
          :key="productCategory.id"
          class="h-[450px] w-[350px] bg-gray-700 text-slate-300"
        >
          <CardContent>
            <img src="" alt="" srcset="" />
          </CardContent>
          <CardFooter class="flex-col gap-3">
            <CardTitle>{{ productCategory.name }}</CardTitle>
            <CardDescription>{{ productCategory.description }}</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div class="flex justify-center items-center p-10 flex-shrink-0 gap-2">
        <Button>查看介紹</Button>
        <Button>進入介紹</Button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
const productCategories = ref([
  {
    id: 1,
    name: '卡丁車',
    description: '極速冒險，卡丁車將帶您飆速贏得冠軍！',
    imgUrl: ''
  },
  {
    id: 2,
    name: '道具',
    description: '挑戰更加刺激，使用我們的道具讓您在遊戲中獲勝無數！',
    imgUrl: ''
  },
  {
    id: 3,
    name: '人物',
    description: '多種的人物選擇供您在遊戲中體驗！',
    imgUrl: ''
  }
])
</script>

<style scoped></style>
