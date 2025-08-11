import { delay } from 'pear-common-utils'
import http from '..'
import { articleList, typeList } from './mock'

export const getTypeTree = async () => {
  // return http.get('/auth/publicKey')
  await delay(100)
  return typeList
}

export const getArticleList = async () => {
  // return http.get('/auth/publicKey')
  await delay(100)
  return articleList
}