import request from '@/utils/axios'
// 获取评论列表
export const totalcomment = (type, source, offset, limit) => {
  return request({
    url: '/v1_0/comments',
    params: {
      type,
      source,
      offset,
      limit
    }
  })
}
export const Postcomment = (target, content, artIid) => {
  return request({
    url: '/v1_0/comments',
    method: 'POST',
    data: {
      target,
      content,
      art_id: artIid
    }
  })
}
