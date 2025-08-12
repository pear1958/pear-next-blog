import type { NextConfig } from 'next'
import { RemotePattern } from 'next/dist/shared/lib/image-config'

const { NEXT_PUBLIC_CDN: cdn } = process.env

const nextConfig: NextConfig = {
  reactStrictMode: false, // 禁用严格模式
  experimental: {
    scrollRestoration: true,
  },
  // 允许加载指定 cdn 下的图片
  images: cdn
    ? {
        remotePatterns: [
          {
            protocol: new URL(cdn).protocol.replace(':', '') as RemotePattern['protocol'], // 获取协议并去掉末尾的冒号
            hostname: new URL(cdn).hostname,
            pathname: '/**',
          },
        ],
      }
    : undefined,
  async rewrites() {
    return [
      {
        source: '/sitemap/[type]/index:path*.xml',
        // 实际路由文件名是 index[index].xml
        destination: '/sitemap/[type]/index[index].xml',
      },
    ]
  },
}

export default nextConfig
