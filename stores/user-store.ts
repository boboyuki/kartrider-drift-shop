import { defineStore } from 'pinia'

type LoginParams = {
  email: string
  password: string
}

type LoginResponse = {
  isSuccess: boolean
  error?: Error
}

type SignUpParams = {
  email: string
  password: string
  name: string
}

type SignUpResponse = {
  isSuccess: boolean
  error?: Error
}

export const useUserStore = defineStore('user', () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const session = useSupabaseSession()
  const userData = reactive({
    userName: '',
    userSession: ''
  })

  const setUserName = (name: string) => {
    userData.userName = name
  }

  const initialize = () => {
    console.log('initialize', user.value, session.value)
    if (user.value || session.value) {
      userData.userName = user.value?.email || ''
      userData.userSession = session?.value?.access_token || ''
    }
  }

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
    password,
    name
  }: SignUpParams): Promise<SignUpResponse> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
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
    signup,
    initialize
  }
})
