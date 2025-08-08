import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useUserData } from '@/hooks/useUserData'
import { Dropdown } from 'antd'
import Image from '@/components/Image'

const User = () => {
  // const userData = useUserData((state) => state.data)
  const userData = { data: { name: 'zzy' } }
  const router = useRouter()

  return (
    <div className="flex justify-end">
      {userData ? (
        <Dropdown.Button
          icon={<DownOutlined />}
          type="primary"
          placement="bottomLeft"
          arrow
          onClick={() => router.push('/creator')}
          dropdownRender={() => (
            <div className="flex items-center rounded-sm bg-white p-2 shadow-md">
              <div
                className="cursor-pointer p-3"
                onClick={() => router.push('/article/editor')}
              >
                <Image
                  width={44}
                  height={44}
                  src="/icon/client/write-article.svg"
                  alt="icon"
                  className="h-[44px]"
                />
                <div className="text-gray-700">写文章</div>
              </div>

              <div
                className="cursor-pointer p-3"
                onClick={() => router.push('/creator/content/article?key=draft')}
              >
                <Image
                  width={44}
                  height={44}
                  src="/icon/client/drafts.svg"
                  alt="icon"
                  className="h-[44px]"
                />
                <div className="text-gray-700">草稿箱</div>
              </div>

              <div
                className="cursor-pointer p-3"
                onClick={() => router.push('/problem/editor')}
              >
                <Image
                  width={44}
                  height={44}
                  src="/icon/client/problem.svg"
                  alt="icon"
                  className="h-[44px]"
                />
                <div className="text-gray-700">提问题</div>
              </div>
            </div>
          )}
        >
          创作者中心
        </Dropdown.Button>
      ) : (
        <Button type="primary" ghost>
          登录
        </Button>
      )}
    </div>
  )
}

export default User
