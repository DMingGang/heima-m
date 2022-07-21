import request from '@/utils/axios'
export const getartical = (channelId, timestamp) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id: channelId,
      timestamp
    }
  })
}
export const getuserartical = (articleId) => {
  return request({
    url: '/v1_0/articles/' + articleId
  })
}
// 关注作者
export const followrartical = (target) => {
  return request({
    url: '/v1_0/user/followings',
    method: 'POST',
    data: {
      target
    }
  })
}
// 取关作者
export const delartical = (target) => {
  return request({
    url: '/v1_0/user/followings/' + target,
    method: 'DELETE'
  })
}
// 修改用户头像
export const putava = (data) => {
  return request({
    url: '/v1_0/user/photo',
    method: 'PATCH',
    data
  })
}
