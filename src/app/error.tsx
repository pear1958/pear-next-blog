'use client'

import { useRouter } from 'next/navigation'
import { Button, Result } from 'antd'
import HeadInfo from '@/components/HeadInfo'
import Header from '@/components/Header'

const Error = (err: any) => {
  let router = useRouter()

  return (
    <>
      <HeadInfo title={`加载错误-${process.env.NEXT_PUBLIC_SITE_NAME}`} />
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
