import http from '..'

export const getUserInfo = () => {
  return http.get('/auth/publicKey')
}
