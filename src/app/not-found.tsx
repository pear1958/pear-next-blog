'use client'

import { useRouter } from 'next/navigation'
import { Button, Result } from 'antd'
import HeadInfo from '@/components/HeadInfo'
import Header from '@/components/Header'

const NotFound = () => {
  const router = useRouter()

  return (
    <>
      <HeadInfo title={`404-没有找到页面`} description={'404'} keywords={['404']} />
      <Header />
      <Result
        className='mt-16'
        status={'404'}
        title={'404'}
        subTitle="页面加载错误"
        extra={
          <Button type="primary" onClick={() => router.replace('/')}>
            回到首页
          </Button>
        }
      />
    </>
  )
}

export default NotFound
