import { LoginData, User } from "@/types"

export const setLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key)
  return storedValue != null ? (JSON.parse(storedValue) as T) : defaultValue
}
export const getToken = (): string | null => {
  //to get the token from the localstorage
  const dataFormLocalStorage = getLocalStorage<LoginData>("loginData", {
    userData: null,
    token: "",
    isLoggedIn: false
  })
  return dataFormLocalStorage.token
}