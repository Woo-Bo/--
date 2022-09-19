import { CacheKey } from '@/enum/CacheKey'

import router from '@/router'
import storage from '@/utils/storage'

//是否登录
export function isLogin(): boolean {
  return !!storage.get(CacheKey.TOKEN_NAME)
}

//退出登录
export async function logout() {
  storage.remove(CacheKey.TOKEN_NAME)
  location.href = '/'
}

/**
 * 登录与注册后记录token
 * @param token
 */
export async function loginCallback(token: string) {
  storage.set(CacheKey.TOKEN_NAME, token)
  router.push(storage.get(CacheKey.REDIRECT_ROUTE_NAME, '/'))
  storage.remove(CacheKey.REDIRECT_ROUTE_NAME)
}

/**
 * 限制点击频繁
 * @param fn 回调函数
 * @returns
 */
export function request(fn: (args: any) => Promise<any>) {
  let isSubmit = false
  return (args: any) => {
    if (isSubmit) return
    isSubmit = true
    return fn(args).finally(() => (isSubmit = false))
  }
}

//根据URL生成样式类名
export function className() {
  return router.currentRoute.value.fullPath.replace(/\//g, '-').replace(/^\-|\-$/g, '')
}

export function open(url: string) {
  window.open(url)
}
