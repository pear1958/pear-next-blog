'use client'

import { ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import "@ant-design/v5-patch-for-react-19"

interface propsType {
  children: ReactNode
}

const AntdProvider = ({ children }: propsType) => {
  return (
    <AntdRegistry>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </AntdRegistry>
  )
}

export default AntdProvider