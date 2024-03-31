<template>
  <header
    class="bg-black text-white min-h-20 p-5 flex flex-row justify-between items-center"
  >
    <div>
      <h1>跑跑飄移商城</h1>
    </div>
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar size="sm">
            <AvatarImage v-if="userImage" :src="userImage" alt="@radix-vue" />
            <AvatarFallback>
              <span class="pi pi-user"></span>
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <ul>
            <li>🇹🇼 繁體中文</li>
            <li>🇨🇳 简体中文</li>
            <li>🇺🇸 English</li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const userImage = ref<string | null>('null')
</script>

<style scoped></style>
