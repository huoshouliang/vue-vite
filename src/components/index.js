import user from './user.vue'
//注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allgloablcomponent = { user }
export default {
  install(app) {
    console.log(app)
    Object.keys(allgloablcomponent).forEach((key) => {
      app.component(key, allgloablcomponent[key])
    })
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
