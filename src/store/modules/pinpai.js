import { defineStore } from 'pinia'
import { reqhasTrademark, pinpaidata, deleteurl } from '@/api/project/index'
import { constantroute } from '@/router/router'
import { ElMessage } from 'element-plus'

let useUserStore = defineStore('pinpai', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), //用户唯一标识
      menuRoutes: constantroute, //仓库存储生成菜单需要数组
      data: [],
    }
  },
  actions: {
    //异步
    async reqhasTrademark(pageno, limit) {
      let result = await reqhasTrademark(pageno, limit)
      if (result.code == 200) {
        this.data = result.data
        console.log(result.data)
        return result.data
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async pinpaidata_url(data) {
      let result = await pinpaidata(data)
      console.log('pinpaidata_url', result)
      if (result.code == 200) {
        return result
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async delete_url(data) {
      console.log(data)
      let result = await deleteurl(data)
      console.log('deleteurl', result)
      if (result.code == 200) {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
        return result
      } else {
        ElMessage({
          type: 'error',
          message: '删除失败',
        })
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
