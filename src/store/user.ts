import { create } from 'zustand'
import { getUserInfo } from '@/api/modules/auth'

export interface UserInfo {
  avatar_url: string
  id: number
  name: string
  auth: number
  avatar_file_name: string
  create_time: string
}

export type UserState = { data: UserInfo | null }

export type UserAction = {
  refreshData: () => void
  setData: (data: UserInfo | null) => any
}

export type UserStore = UserState & UserAction

export const defaultState: UserState = { data: null }

export const createUserStore = (initState: UserState = defaultState) => {
  return create<UserStore>((set) => ({
    ...initState,
    refreshData: async () => {
      try {
        const { data } = await getUserInfo()
        set(() => ({ data: data || null }))
      } catch (e) {
        set({ data: null })
      }
    },
    setData: (data: UserInfo | null) => set({ data }),
  }))
}
