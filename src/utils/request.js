import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
// import { ca } from 'element-plus/es/locale'
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
})
request.interceptors.request.use((config) => {
  //拦截器

  console.log('config', config)
  console.log('useUserStore', useUserStore.token)
  if (useUserStore.token) {
    config.headers.token = useUserStore.token
  }
  console.log('config', config)
  return config
})
request.interceptors.response.use(
  //回调拦截器
  (response) => {
    //成功回调
    console.log('response', response)
    return response.data
  },
  (error) => {
    let message = ''
    console.log(error.response)
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    // return Promise.reject(error)
  },
)
export default request
