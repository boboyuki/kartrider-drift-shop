<template>
  <header
    class="bg-black text-white min-h-20 p-5 flex flex-row justify-between items-center"
  >
    <h1>跑跑飄移商城</h1>
    <DropdownMenu v-model:open="toggleState">
      <DropdownMenuTrigger>
        <Avatar class="w-[35px] h-[35px] bg-slate-400">
          <AvatarImage v-if="userImage" :src="userImage" alt="@radix-vue" />
          <AvatarFallback>
            <Icon icon="mdi:user" width="20px" height="20px" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="mr-3">
        <DropdownMenuItem v-for="option in userOptionList" :key="option.id">
          <NuxtLink :to="option.link" class="inline-block w-full">
            {{ option.name }}
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const userStore = useUserStore()

type UserOption = {
  id: number
  name: string
  link: string
}

const userImage = ref<string | null>(null)
const toggleState = ref(false)
const notSignInMenu = [
  {
    id: 1,
    name: '登入',
    link: '/signin'
  },
  {
    id: 2,
    name: '註冊',
    link: '/signup'
  }
]
const signInMenu = [
  {
    id: 1,
    name: '個人資料',
    link: '/profile'
  },
  {
    id: 2,
    name: '購物車',
    link: '/cart'
  }
]
const userOptionList = reactive<UserOption[]>(
  userStore.userData.userName ? signInMenu : notSignInMenu
)
</script>

<style scoped></style>
