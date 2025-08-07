import { Button } from 'antd'
import { useUserData } from '@/hooks/useUserData'
import UserData from './UserData'

const User = () => {
  // const userData = useUserData((state) => state.data)
  const userData = { data: { name: 'zzy' } }

  return (
    <div className="flex w-80 justify-end">
      {userData ? (
        <UserData />
      ) : (
        <Button type="primary" ghost>
          登录
        </Button>
      )}
    </div>
  )
}

export default User
