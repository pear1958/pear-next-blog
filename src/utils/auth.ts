import cookie from 'js-cookie'

const getDomain = (host: string) => {
  // 处理不同的环境和域名
  if (
    host.startsWith('http://localhost') ||
    host.startsWith('http://127.0.0.1') ||
    host.startsWith('http://192.168')
  ) {
    return 'localhost' // 开发环境使用 localhost
  }

  const url = new URL(host)
  const domainParts = url.hostname.split('.').slice(-2)

  // 返回带点的域名，例如 .example.com
  // 确保所有子域名都能访问该 Cookie
  return `.${domainParts.join('.')}`
}

const option = {
  expires: 365, // 365 天
  domain: getDomain(process.env.NEXT_PUBLIC_HOST),
}

export const getToken = () => {
  return cookie.get('token')
}

export const setToken = (token: string) => {
  cookie.set('token', token, option)
}

export const removeToken = () => {
  cookie.remove('token')
}
