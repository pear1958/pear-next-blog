import { FC, useMemo } from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

interface porpsType extends LinkProps {
  className?: string
  // 如果路径一致设置classNames
  activeClassName?: string
  children: React.ReactNode
  // 是否对a标签设置不跟踪属性
  noFollow?: boolean
}

/**
 * 如果 当前路径 和 href 一样, 会默认添加类名
 */
const ActiveLink: FC<porpsType> = (props) => {
  const pathname = usePathname()

  const activeClassName = useMemo(() => {
    const clsName = props.activeClassName || 'active-link'
    return pathname == props.href ? clsName : null
  }, [pathname])

  return (
    <Link
      href={props.href}
      className={classNames([props.className, activeClassName])}
      target={props.noFollow ? '_blank' : undefined}
      // nofollow: 告诉搜索引擎不跟随链接，不传递页面权重
      // noreferrer: 阻止发送来源页面信息（Referer 头）
      rel={props.noFollow ? 'noreferrer nofollow' : undefined}
    >
      {props.children}
    </Link>
  )
}

export default ActiveLink
