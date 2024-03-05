//小仓库
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user/index'
import { constantroute, anyroute, asnycroute } from '@/router/router'
// import { SET_TOKEN, GET_TOKEN } from '@/ /token'
import cloneDeep from 'lodash/cloneDeep'
//过滤异步路由
function filterasyncroute(asnycroute, routers) {
  return asnycroute.filter((item) => {
    if (routers.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        filterasyncroute(item.children, routers)
      }
      return true
    }
  })
}

let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), //用户唯一标识
      menuRoutes: constantroute, //仓库存储生成菜单需要数组
      username: '',
      avatar: '',
    }
  },
  actions: {
    //异步
    async userlogin(data) {
      let result = await reqLogin(data)
      console.log(result)
      if (result.code == 200) {
        this.token = result.data[0].token
        console.log('result', result.data[0])
        this.menuRoutes = [
          ...constantroute,
          ...filterasyncroute(cloneDeep(asnycroute), result.data[0].routers),
          ...anyroute,
        ]
        console.log('menuRoutes', this.menuRoutes)
        console.log(result.data[0].token)
        localStorage.setItem('TOKEN', result.data[0].token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userinfo() {
      let result = await reqUserInfo()
      //获取用户信息进行存储仓库当中[用户头像，名字]
      console.log('result', result)
      if (result.code == 200) {
        this.username = result.data[0].name
        this.avatar =
          'http://localhost:5173/api/news/media/static/media/' +
          result.data[0].avatar
        this.menuRoutes = [
          ...constantroute,
          ...filterasyncroute(cloneDeep(asnycroute), result.data[0].routers),
          ...anyroute,
        ]
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    userlogout() {
      this.username = ''
      this.avatar = ''
      localStorage.removeItem('TOKEN')
      this.token = ''
      alert(123456)
    },
  },
  getters: {},
})
export default useUserStore
