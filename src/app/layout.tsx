import { cookies } from 'next/headers'
import AntdProvider from '@/plugin/antd'
import './globals.css'
import { getUserInfo } from '@/api/modules/auth'

type Children = Readonly<{
  children: React.ReactNode
}>

const RootLayout = async ({ children }: Children) => {
  const cookie = await cookies()
  const token = cookie.get('token')
  let userInfo = null

  // try {
  //   const { data } = await getUserInfo()
  //   userInfo = data
  // } catch (e) {}

  return (
    <html lang="en">
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  )
}

export default RootLayout
