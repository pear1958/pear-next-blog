import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { genUUID } from 'pear-common-utils'
import { Config, CustomAxiosRequestConfig, ResultData } from './types'
import { getToken, removeToken, setToken } from '@/utils/auth'

const config = {
  // baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: httpResEnum.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'trace-id': genUUID(),
  },
}

class Http {
  service: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const token = getToken()

        if (token) config.headers.Authorization = `Bearer ${token}`

        config.headers['Cache-Control'] = 'no-cache'

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        let { data, config } = response

        if (config.headers.fullResponse === 'true') return response

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
  }

  get<T = any>(
    url: string,
    params?: object,
    config: Config = {}
  ): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config })
  }

  post<T = any>(url: string, data?: object, config: Config = {}): Promise<ResultData<T>> {
    return this.service.post(url, data, config)
  }

  put<T = any>(
    url: string,
    params?: object,
    config: Config = {}
  ): Promise<ResultData<T>> {
    return this.service.put(url, params, config)
  }

  delete<T = any>(
    url: string,
    params?: any,
    config: Config = {}
  ): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ...config })
  }

  download(
    url: string,
    params?: object,
    config: Config = {}
  ): Promise<ResultData<BlobPart>> {
    return this.service.post(url, params, { ...config, responseType: 'blob' })
  }
}

const http = new Http(config)

export default http
