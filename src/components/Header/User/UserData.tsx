import { useRouter } from 'next/navigation'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Image from '@/components/Image'

const { Button } = Dropdown

const UserData = () => {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <Button
        icon={<DownOutlined />}
        type="primary"
        placement="bottomLeft"
        arrow
        onClick={() => router.push('/creator')}
        open
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
              />
              <div className="text-gray-700">写文章</div>
            </div>

            <div
              className="cursor-pointer p-3"
              onClick={() => router.push('/creator/content/article?key=draft')}
            >
              <Image width={44} height={44} src="/icon/client/drafts.svg" alt="icon" />
              <div className="text-gray-700">草稿箱</div>
            </div>

            <div
              className="cursor-pointer p-3"
              onClick={() => router.push('/problem/editor')}
            >
              <Image width={44} height={44} src="/icon/client/problem.svg" alt="icon" />
              <div className="text-gray-700">提问题</div>
            </div>
          </div>
        )}
      >
        创作者中心
      </Button>
    </div>
  )
}

export default UserData
