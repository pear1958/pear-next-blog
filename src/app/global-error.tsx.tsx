'use client'

import { useRouter } from 'next/navigation'
import { Button, Result } from 'antd'
import HeadInfo from '@/components/HeadInfo'
import Header from '@/components/Header'

const Error = (err: any) => {
  let router = useRouter()

  return (
    <>
      <HeadInfo title="哎呀，服务器出了点小问题 😢" />
      <Header />
      <Result
        className="w-full mt-16"
        status="error"
        title="页面加载出现错误"
        subTitle="页面加载出现错误，请稍后再试、"
        extra={
          <Button type="primary" onClick={() => router.replace('/')}>
            回到首页
          </Button>
        }
      />
    </>
  )
}

export default Error
