import axios from 'axios'
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'
const instance = axios.create({
  baseURL: 'http://toutiao.itheima.net/'
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  // config表示请求的详细信息
  // console.log(config);
  return config
})
instance.interceptors.response.use(result => {
  // console.log(result.data.data);
  // result请求的数据
  return result.data.data
})
export default instance
