<template>
  <NuxtLayout name="sign">
    <section class="w-full h-full flex justify-center items-center">
      <Card class="w-[400px] h-min">
        <CardHeader>
          <CardTitle class="text-center">登入商城</CardTitle>
        </CardHeader>
        <CardContent>
          <form @submit="onSubmit">
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name" class="mb-2">帳號</Label>
                <Input id="name" v-model="email.value" placeholder="帳號" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="password" class="mb-2">密碼</Label>
                <Input
                  id="password"
                  v-model="password.value"
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
          <Button type="submit">登入</Button>
        </CardFooter>
      </Card>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useForm } from 'vue-hooks-form'
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
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()
const userStore = useUserStore()
const { useField, handleSubmit } = useForm({
  defaultValues: {
    email: '',
    password: ''
  }
})
const email = useField('email', {
  rule: { required: true }
})
const password = useField('password', {
  rule: {
    required: true,
    min: 6,
    max: 10
  }
})

const onSubmit = handleSubmit(async (values) => {
  if (values.email && values.password) {
    const {
      data,
      pending,
      error: nuxtError
    } = await useAsyncData(() =>
      userStore.login({
        email: values.email || '',
        password: values.password || ''
      })
    )
    const error = nuxtError.value || data.value?.error
    if (error) {
      toast({
        title: '登入失敗',
        description: error.message,
        variant: 'destructive'
      })
    }
  }
})
</script>

<style scoped></style>
