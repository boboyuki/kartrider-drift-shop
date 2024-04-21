import { defineStore } from 'pinia'

import { supabase } from '@/lib/supabase'

type LoginResponse = {
  isSuccess: boolean
  error?: Error
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
    userSession: ''
  }),
  actions: {
    setUserName(name: string) {
      this.userName = name
    },
    async login({
      email,
      password
    }: {
      email: string
      password: string
    }): Promise<LoginResponse> {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (error) {
          throw error
        }
        this.userName = data?.user?.email || ''
        this.userSession = data.session?.access_token || ''
        return { isSuccess: true }
      } catch (error) {
        if (error instanceof Error) {
          return { isSuccess: false, error }
        } else {
          return { isSuccess: false, error: new Error(String(error)) }
        }
      }
    }
  },
  persist: {
    key: 'user-sessions'
  }
})
