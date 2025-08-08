import http from '..'

export const getUserInfo = () => {
  return http.get('/auth/publicKey')
}

export const getNoticeCount = () => {
  return http.get('/notice/count')
}
