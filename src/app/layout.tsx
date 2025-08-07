import { cookies } from 'next/headers'
import AntdProvider from '@/plugin/antd'
import { getUserInfo } from '@/api/modules/auth'
import { UserStoreProvider } from '@/hooks/useUserData'
import '@/styles/index.scss'
import '@/styles/reset.css'

type Children = Readonly<{
  children: React.ReactNode
}>

const RootLayout = async ({ children }: Children) => {
  const cookie = await cookies()
  const token = cookie.get('token')
  let userInfo = { data: null }

  // try {
  //   const { data } = await getUserInfo()
  //   userInfo = data
  // } catch (e) {}

  return (
    <html lang="en">
      <body>
        <UserStoreProvider data={userInfo}>
          <AntdProvider>{children}</AntdProvider>
        </UserStoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
