import { http } from '@/plugins/axios'

type Result = {
  token: string
}

export function login(data: { mobile: string; password: string }) {
  return http.request<Result>({
    url: `auth/login`,
    method: 'post',
    data,
  })
}

export function register(data: { mobile: string; password: string; password_confirmation: string }) {
  return http.request<Result>({
    url: `register`,
    method: 'post',
    data,
  })
}

export function forgetPassword(data: { mobile: string; password: string; password_confirmation: string }) {
  return http.request<Result>({
    url: 'forget-password',
    method: 'post',
    data,
  })
}
