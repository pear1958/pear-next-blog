import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Input } from 'antd'

const { Search } = Input

const SearchInput = () => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onSearch = (val: string) => {
    // 检查字符串中是否至少包含一个非空白字符
    if (!/^[\s\S]*.*[^\s][\s\S]*$/.test(val)) return
    router.push(`/search?keyword=${val}`)
  }

  // 搜索页面回填字符串
  useEffect(() => {
    const text = searchParams.get('keyword')
    if (pathname == '/search' && text) setKeyword(text)
  }, [])

  return (
    <Search
      value={keyword}
      className="sm:hidden"
      placeholder="搜索"
      allowClear
      onSearch={(val) => onSearch(val)}
      maxLength={30}
      style={{ width: 200 }}
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

export default SearchInput
