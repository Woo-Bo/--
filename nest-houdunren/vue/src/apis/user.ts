import { http } from '@/plugins/axios'

export async function currentUserInfo() {
  const res = await http.request<UserModel>({
    url: `auth/current`,
  })
  return res.data
}

export async function userList() {
  return await http.request<UserModel, ApiPage<UserModel>>({ url: `user` })
}
