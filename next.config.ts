import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false, // 禁用严格模式
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig
