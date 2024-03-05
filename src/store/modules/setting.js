//小仓库:layout组件相关配置
import { defineStore } from 'pinia'
let userlayoutstore = defineStore('settingstore', {
  state: () => {
    return {
      fold: false,
      refsh: false,
    }
  },
})
export default userlayoutstore
