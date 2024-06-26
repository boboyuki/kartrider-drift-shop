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
                <Input
                  id="name"
                  v-model="email"
                  v-bind="emailAttrs"
                  placeholder="帳號"
                />
                <p v-if="errors.email" class="text-red-400">
                  {{ errors.email }}
                </p>
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="password" class="mb-2">密碼</Label>
                <Input
                  id="password"
                  v-model="password"
                  v-bind="passwordAttrs"
                  type="password"
                  placeholder="密碼"
                />
                <p v-if="errors.password" class="text-red-400">
                  {{ errors.password }}
                </p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-center px-6 pb-6 gap-4">
          <Button variant="outline" as-child>
            <NuxtLink to="/">返回首頁</NuxtLink>
          </Button>
          <Button type="submit" @click="onSubmit">登入</Button>
        </CardFooter>
      </Card>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import zod from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
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
import { ROUTE } from '@/constants/route'
const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(10)
})
const router = useRouter()
const { toast } = useToast()
const userStore = useUserStore()
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema)
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async () => {
  try {
    if (email.value && password.value) {
      const { error } = await userStore.login({
        email: email.value,
        password: password.value
      })
      if (!error) {
        toast({
          title: '登入成功',
          description: '歡迎回來',
          variant: 'default'
        })
        router.push(ROUTE.HOME)
      } else {
        toast({
          title: '登入失敗',
          description: error instanceof Error ? error.message : String(error),
          variant: 'destructive'
        })
      }
    }
  } catch (error) {
    toast({
      title: '登入失敗',
      description: error instanceof Error ? error.message : String(error),
      variant: 'destructive'
    })
  }
})
</script>

<style scoped></style>
