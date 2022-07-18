import request from '@/utils/axios'
// import store from '@/store/index'
export const logininfo = () => {
  return request({
    url: '/v1_0/user/profile'
  })
}
