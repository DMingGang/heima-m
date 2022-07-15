import request from '@/utils/axios.js'
export const search = (page, perPage, q) => {
  return request({
    url: '/v1_0/search',
    params: {
      page,
      per_page: perPage,
      q
    }
  })
}
