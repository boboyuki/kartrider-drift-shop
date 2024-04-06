<template>
  <NuxtLayout>
    <section class="bg-zinc-900 h-full flex-col">
      <div class="flex justify-around items-center py-10 px-5">
        <Card
          v-for="productCategory in productCategories"
          :key="productCategory.id"
          class="flex flex-col h-[450px] w-[350px] bg-gray-700 text-slate-300 cursor-pointer"
        >
          <CardContent class="flex flex-grow justify-center items-center">
            <img
              :src="productCategory.imgUrl"
              :alt="productCategory.name"
              class="inline-block h-[250px] w-100"
            />
          </CardContent>
          <CardFooter class="flex-col gap-3">
            <CardTitle>{{ productCategory.name }}</CardTitle>
            <CardDescription>{{ productCategory.description }}</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div class="flex justify-center items-center p-10 flex-shrink-0 gap-2">
        <Button>查看介紹</Button>
        <Button>進入商城</Button>
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
  CardTitle
} from '@/components/ui/card'
type ProductCategory = {
  id: number
  name: string
  description: string
  imgUrl: string
}
const supabase = useSupabaseClient()
const productCategories = ref<ProductCategory[]>([])
const { data } = await useAsyncData(async () => {
  const { data } = await supabase.storage
    .from('kd-shop')
    .createSignedUrls(['karts/training.png', 'roles/bazzi.png'], 24 * 60 * 60)
  if (data?.length === 2 && data[0].signedUrl && data[1].signedUrl) {
    return [
      {
        id: 1,
        name: '卡丁車',
        description: '極速冒險，卡丁車將帶您飆速贏得冠軍！',
        imgUrl: data[0].signedUrl
      },
      {
        id: 2,
        name: '人物',
        description: '多種的人物選擇供您在遊戲中體驗！',
        imgUrl: data[1].signedUrl
      }
    ]
  }
})
onMounted(() => {
  if (data.value) {
    productCategories.value = data.value
  }
})
</script>

<style scoped></style>
