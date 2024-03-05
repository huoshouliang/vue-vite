import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要的代码
import 'virtual:svg-icons-register'
import user from './components/user.vue'

import gloalcomponents from '@/components'
// import axios from 'axios'
import pinia from './store'
import router from './router'

import './permisstion'
// import mitt from 'mitt'

// axios({
//   url: '/api/news/zhuce',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })
const app = createApp(App)
app.use(ElementPlus, { locale: zhCn, size: 'small', zIndex: 3000 })
console.log(import.meta.env)
app.component('user', user)
app.use(gloalcomponents)
app.use(pinia)
app.use(router)
// app.config.globalProperties.$EventBus = new mitt()
//注册所有图标

app.mount('#app')
