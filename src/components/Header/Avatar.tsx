import { FC, memo, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dropdown, Avatar } from 'antd'
import classNames from 'classnames'
import { useUserData } from '@/hooks/useUserData'
import { removeToken } from '@/utils/auth'

interface Props {
  className?: string
  notOpen?: boolean
}

interface ItemProps {
  isValidating: boolean
  data: number
}

const Item: FC<ItemProps> = ({ isValidating, data }) => {
  return <>{isValidating ? <span className="bg-slate-300 px-1 py-0.5"></span> : data}</>
}

const _Avatar: FC<Props> = memo((props) => {
  const router = useRouter()
  const refreshData = useUserData((s) => s.refreshData)

  const userData = useUserData((state) => state.data) || {
    avatar_url: 'https://static.blogweb.cn/avatar/9758763965712.webp',
    id: 'idwjadopaw',
    name: 'Pear-Test',
  }

  const data = {
    funs_count: 11,
    article_collection_count: 24,
    article_count: 26,
  }
  const isLoading = false

  return (
    <Dropdown
      popupRender={() => (
        <div className="mb-6 w-60 rounded-xl border border-solid border-gray-200 bg-white p-4 shadow-md">
          {/* 顶部 */}
          <div className="flex">
            <Link href={`/user/${userData?.id}`}>
              <Avatar
                size={48}
                src={userData?.avatar_url}
                alt={`${userData?.name}头像`}
              />
            </Link>
            <div className="ml-4 truncate text-lg">{userData?.name}</div>
          </div>

          {/* 中间 */}
          <div className="mt-4 flex justify-around">
            <div className="text-center">
              <div className="text-base">关注者</div>
              <div>
                <Item isValidating={isLoading} data={data?.funs_count} />
              </div>
            </div>

            <div className="text-center">
              <div className="text-base">被收藏</div>
              <div>
                <Item isValidating={isLoading} data={data?.article_collection_count} />
              </div>
            </div>

            <div className="text-center">
              <div className="text-base">文章</div>
              <div>
                <Item isValidating={isLoading} data={data?.article_count} />
              </div>
            </div>
          </div>

          {/* 底部 */}
          <div className="mt-8 flex justify-between text-gray-400">
            <div
              className="cursor-pointer"
              onClick={() => router.push('/user/settings/profile')}
            >
              账号设置
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                removeToken()
                refreshData()
              }}
            >
              退出登录
            </div>
          </div>
        </div>
      )}
      placement="bottomRight"
      trigger={props.notOpen ? [] : ['click']}
    >
      <img
        src={userData?.avatar_url}
        className={classNames([
          'cursor-pointer',
          'rounded-full',
          'w-[30px]',
          'h-[30px]',
          props.className,
        ])}
        alt="头像"
      />
    </Dropdown>
  )
})

export default _Avatar
