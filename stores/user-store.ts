import { defineStore } from 'pinia'

type LoginParams = {
  email: string
  password: string
}

type LoginResponse = {
  isSuccess: boolean
  error?: Error
}

export const useUserStore = defineStore('user', () => {
  const supabase = useSupabaseClient()
  const userData = reactive({
    userName: '',
    userSession: ''
  })

  const setUserName = (name: string) => {
    userData.userName = name
  }

  const initialize = () => {}

  const login = async ({
    email,
    password
  }: LoginParams): Promise<LoginResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        throw error
      }
      userData.userName = data?.user?.email || ''
      userData.userSession = data.session?.access_token || ''
      return { isSuccess: true }
    } catch (error) {
      if (error instanceof Error) {
        return { isSuccess: false, error }
      } else {
        return { isSuccess: false, error: new Error(String(error)) }
      }
    }
  }

  const signup = async ({
    email,
    password
  }: LoginParams): Promise<LoginResponse> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) {
        throw error
      }
      userData.userName = data?.user?.email || ''
      userData.userSession = data.session?.access_token || ''
      return { isSuccess: true }
    } catch (error) {
      if (error instanceof Error) {
        return { isSuccess: false, error }
      } else {
        return { isSuccess: false, error: new Error(String(error)) }
      }
    }
  }

  return {
    userData,
    setUserName,
    login,
    signup
  }
})
