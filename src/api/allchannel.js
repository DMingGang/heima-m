import request from '@/utils/axios'
export const allchannel = () => {
  return request({
    url: '/v1_0/channels'
  })
}
// 获取用户修改频道接口
export const userchannel = (channels) => {
  return request({
    url: '/v1_0/user/channels',
    method: 'PUT',
    data: {
      channels
    }
  })
}
// 修改文章
export const Patchchannel = ({ name, gender, birthday, realName, intro }) => {
  return request({
    url: '/v1_0/user/profile',
    method: 'PATCH',
    data: {
      name,
      gender,
      birthday,
      real_name: realName,
      intro
    }
  })
}
