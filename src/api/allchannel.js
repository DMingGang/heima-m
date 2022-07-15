import request from '@/utils/axios'
export const allchannel = () => {
  return request({
    url: '/v1_0/channels'
  })
}
