//路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import useUserStore from '@/store/modules/user'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
import pinia from './store'
let userstore = useUserStore(pinia)
console.log('userstore', userstore)
console.log('router', router)
//全局前置守卫:项目当中任意路由切换都会触发的钩子
router.beforeEach((to, from, next) => {
  //to:你将要访问那个路由
  //form:你从那个路由来
  //next：路由的放行函数
  document.title = to.meta.title
  nprogress.start()
  console.log('beforeEach', to, from)
  console.log(userstore.token)
  let token = userstore.token
  console.log(token)
  if (token) {
    console.log('token', token)
    if (to.path == '/login') {
      console.log('token', to.path)
      next({ path: '/home' })
    } else {
      console.log('token next')
      next()
    }
  } else {
    if (to.path == '/login') {
      console.log('!token next')
      next()
    } else {
      console.log('!token', to.path)
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
//全局后置守卫
router.afterEach((to, from) => {
  // to and from are both route objects.
  nprogress.done()
  console.log('afterEach', to, from)
})
