export function getCookie(name: string): string | null {
  const cookie = document.cookie.split('; ').find((row) => row.startsWith(name))
  return cookie ? cookie.split('=')[1] : null
}

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/`
}
