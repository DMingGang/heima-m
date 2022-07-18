import request from '@/utils/axios'
export const sendcoded = (mobile) => {
  return request({
    // url: '/v1_0/sms/codes/' + mobile
    url: `/v1_0/sms/codes/${mobile}`
  })
}
