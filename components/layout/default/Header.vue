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
          {{ option.name }}
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

type UserOption = {
  id: number
  name: string
}

const userImage = ref<string | null>(null)
const toggleState = ref(false)
const userOptionList = reactive<UserOption[]>([
  {
    id: 1,
    name: '登入'
  }
])
</script>

<style scoped></style>
