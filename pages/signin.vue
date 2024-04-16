<template>
  <NuxtLayout name="sign">
    <section class="w-full h-full flex justify-center items-center">
      <Card class="w-[400px] h-min">
        <CardHeader>
          <CardTitle class="text-center">登入商城</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name" class="mb-2">帳號</Label>
                <Input id="name" v-model="loginData.name" placeholder="帳號" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="password" class="mb-2">密碼</Label>
                <Input
                  id="password"
                  v-model="loginData.password"
                  type="password"
                  placeholder="密碼"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-center px-6 pb-6 gap-4">
          <Button variant="outline" as-child>
            <NuxtLink to="/">返回首頁</NuxtLink>
          </Button>
          <Button>登入</Button>
        </CardFooter>
      </Card>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const loginData = reactive({
  name: '',
  password: ''
})
</script>

<style scoped></style>
