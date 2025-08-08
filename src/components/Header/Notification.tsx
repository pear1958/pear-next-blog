import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Badge } from 'antd'
import classNames from 'classnames'
import { useUserData } from '@/hooks/useUserData'
import Image from '@/components/Image'
import { getNoticeCount } from '@/api/modules/auth'

interface props {
  className?: string
}

const Notification = (props: props) => {
  const userData = useUserData((state) => state.data)
  const [badgeCount, setBadgeCount] = useState(0)

  useEffect(() => {
    if (!userData) return
    getCount()
  }, [userData])

  const getCount = useCallback(async () => {
    const { data } = await getNoticeCount()
    setBadgeCount(data)
  }, [])

  return (
    <Link
      href="/notification"
      rel="nofollow"
      className={classNames([props.className, 'flex items-center'])}
    >
      <Badge count={badgeCount} size="small">
        <Image
          className="cursor-pointer opacity-50 duration-300 hover:opacity-80"
          src="/icon/client/small-bell.png"
          height={24}
          width={24}
          alt="bell"
        />
      </Badge>
    </Link>
  )
}

export default Notification
