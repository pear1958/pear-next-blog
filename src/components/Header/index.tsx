'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Navigation from './Navigation'
import SearchInput from './SearchInput'

const Header = () => {
  const [isShrink, setIsShrink] = useState(false)
  const first = useRef(true)

  const getScrollY = useCallback(
    () => document.documentElement.scrollTop || document.body.scrollTop,
    []
  )

  // 页面刷新时 还原 isShrink
  useEffect(() => {
    if (!first.current) return
    const scrollY = getScrollY()
    setIsShrink(scrollY > 600)
    first.current = false
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = getScrollY()
      // 大于600缩回，小于540伸出
      if (scrollY > 600) setIsShrink(true)
      if (scrollY < 540) setIsShrink(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames([
        ['h-12 w-full border-slate-100 duration-200', isShrink && '-mt-12'],
      ])}
    >
      <div className="fixed z-50 h-12 w-full bg-white shadow-sm">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between px-6">
          <Navigation />
          <SearchInput />
        </div>
      </div>
    </header>
  )
}

export default Header
