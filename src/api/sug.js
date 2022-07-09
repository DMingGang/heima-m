import request from '@/utils/axios'
export const sug = (q) => {
  return request({
    url: '/v1_0/suggestion',
    params: {
      q
    }
  })
}
