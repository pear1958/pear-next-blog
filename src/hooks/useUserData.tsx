'use client'

import { createContext, useContext, useRef } from 'react'
import { StoreApi, useStore } from 'zustand'
import { UserState, UserStore, createUserStore, defaultState } from '@/store/user'

export const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)

export interface Props {
  children: any
  data: UserState
}

export const UserStoreProvider = ({ children, data = defaultState }: Props) => {
  const storeRef = useRef<StoreApi<UserStore>>(null)

  if (!storeRef.current) {
    // 储存整个store
    storeRef.current = createUserStore(data)
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  )
}

// 语法兼容处理  用于避免 TypeScript 解析器将 <T> 误判为 JSX 标签的开始
export const useUserData = <T,>(selector: (store: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext)

  if (!userStoreContext) {
    throw new Error('useUserData必须在UserStoreProvider中使用')
  }

  return useStore(userStoreContext, selector)
}
