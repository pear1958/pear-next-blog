import ActiveLink from '../ActiveLink'
import style from '@/styles/common.module.scss'

const Navigation = () => {
  return (
    <nav className="flex">
      <h1 className="hidden">{process.env.NEXT_PUBLIC_SITE_NAME}</h1>

      <ActiveLink href="/">
        <img src="/favicon.svg" className="h-6" alt="logo" />
      </ActiveLink>

      <ActiveLink
        href="/"
        className="ml-4 text-zinc-800"
        activeClassName={style['type-active']}
      >
        首页
      </ActiveLink>

      <ActiveLink
        href="/problem"
        className="ml-4 text-zinc-800"
        activeClassName={style['type-active']}
      >
        问答
      </ActiveLink>

      <ActiveLink
        href="/friendly-link"
        className="ml-4 text-zinc-800"
        noFollow={true}
        activeClassName={style['type-active']}
      >
        友情链接
      </ActiveLink>
    </nav>
  )
}

export default Navigation
