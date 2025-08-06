import axios from 'axios'
import { getToken } from '@/utils/auth'
import { isClient } from '@/utils'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
})

apiClient.interceptors.request.use(
  (config) => {
    // 客户端才修改请求头
    if (isClient) {
      config.headers.authorization = getToken()
    }

    config.headers['Cache-Control'] = 'no-cache'

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    // 返回一个 pending 状态的 Promise，会中断 Promise 链
    // 后续的 .then() 和 .catch() 都不会执行，从而避免不必要的错误处理
    if (axios.isCancel(error)) {
      // 返回一个空 Promise 取消请求不触发 catch
      return new Promise(() => {})
    }

    return Promise.reject({
      ...error.response?.data,
      status: error.response?.status,
    })
  }
)

export default apiClient
