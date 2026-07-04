export const LOGIN_KEY = 'notes_app_logged_in'

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(LOGIN_KEY) === 'true'
}

export const setAuthenticated = (): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem(LOGIN_KEY, 'true')
}

export const clearAuthentication = (): void => {
  if (typeof window === 'undefined') return
  localStorage.removeItem(LOGIN_KEY)
}

export const validateCredentials = (username: string, password: string): boolean => {
  return username === 'admin' && password === 'admin123'
}
