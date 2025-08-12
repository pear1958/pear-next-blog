import { MetadataRoute } from 'next'
import { type UnsafeUnwrappedHeaders, headers } from 'next/headers'

/**
 * 控制搜索引擎爬虫的访问范围，避免敏感页面（如后台、编辑页）被收录
 * 主要作用是告诉搜索引擎爬虫哪些页面可以访问、哪些页面禁止访问
 * 禁止搜索引擎爬虫去爬取 CDN 上的内容，这么做是为了让爬虫 “专注” 于网站的核心内容，避免做无用功
 */
function robots(): MetadataRoute.Robots {
  const headersList = headers() as unknown as UnsafeUnwrappedHeaders
  const isCDN = headersList.get('x-from-cdn')
  return isCDN
    ? {
        rules: {
          userAgent: '*', // 所有爬虫都需遵守以下规则
          disallow: '/', // 禁止搜索引擎爬虫访问 CDN 里的所有内容
        },
      }
    : {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: [
            // 文章修改和发布
            '/article/editor',
            // 开发者中心
            '/creator',
            // 文章搜索
            '/search',
            // 用户信息
            '/user',
            // 消息提示
            '/notification',
            // oauth登录重定向
            '/oauth',
            // 部分链接的结果展示
            '/result',
            // 友链页面
            '/friendly-link',
            // 中转页面
            '/link',
            // 提问
            '/problem/editor',
            // 收藏页面
            '/collection',
            // 管理员
            '/admin',
            // 找回密码
            '/forget-password',
          ],
        },
        sitemap: [
          `${process.env.NEXT_PUBLIC_HOST}/sitemap/article/index.xml`,
          `${process.env.NEXT_PUBLIC_HOST}/sitemap/problem/index.xml`,
        ],
      }
}

export default robots
