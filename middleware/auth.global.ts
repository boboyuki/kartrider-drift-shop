import { ROUTE } from '@/constants/route'

export default defineNuxtRouteMiddleware((to, _from) => {
  const userStore = useUserStore()
  if (!userStore?.userData?.userSession) {
    userStore.initialize()
    if (to.path !== ROUTE.HOME) {
      return navigateTo(ROUTE.SIGN_IN)
    } else if (to.path === ROUTE.SIGN_IN || to.path === ROUTE.SIGNUP) {
      return navigateTo(ROUTE.HOME)
    }
  }
})
