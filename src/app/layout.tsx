import { cookies } from 'next/headers'
import AntdProvider from '@/plugin/antd'
import './globals.css'

type Children = Readonly<{
  children: React.ReactNode
}>

const RootLayout = async ({ children }: Children) => {
  const cookie = await cookies()
  const token = cookie.get('token')

  return (
    <html lang="en">
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  )
}

export default RootLayout
