import { createRouter, createWebHashHistory } from 'vue-router'
import { constantroute, anyroute, asnycroute } from './router'
console.log('all', [...constantroute, ...asnycroute, ...anyroute])
let rouder = createRouter({
  history: createWebHashHistory(),
  routes: [...constantroute, ...asnycroute, ...anyroute],
  scrollBehavior() {
    //保持滚动位置
    return {
      left: 0,
      top: 0,
    }
  },
})
export default rouder
