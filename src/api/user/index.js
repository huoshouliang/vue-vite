import request from '@/utils/request'
import useUserStore from '@/store/modules/user'
// import { loginForm, loginresponsedata } from './type'
const API = {
  LOGIN_URL: '/news/zhuce/',
  USERINFO_URL: '/news/test/',
}
//登录接口方法
export const reqLogin = (data) => request.post(API.LOGIN_URL, data)
//获取用户信息接口
export const reqUserInfo = () =>
  request.get(API.USERINFO_URL + '?token=' + useUserStore().token)
