import request from '@/utils/axios'
export const tuijian = () => {
  return request({
    url: '/v1_0/user/channels'
  })
}
