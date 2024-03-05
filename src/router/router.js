export const constantroute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Plus', //菜单图标
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: true,
      icon: 'Plus', //菜单图标
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Plus', //菜单图标
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'Plus', //菜单图标
        },
      },
      {
        path: '/test',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试',
          hidden: false,
          icon: 'Plus', //菜单图标
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: false,
      icon: 'Plus', //菜单图标
    },
  },
]

export const asnycroute = [
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'acl',
    meta: {
      title: '权限管理',
      hidden: true,
      icon: 'Plus', //菜单图标
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'user',
        meta: {
          title: '角色管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'role',
        meta: {
          title: '角色权限管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'permission',
        meta: {
          title: '权限管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'product',
    meta: {
      title: '商品管理',
      hidden: true,
      icon: 'Plus', //菜单图标
    },
    redirect: '/product/attr',
    children: [
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'attr',
        meta: {
          title: '品牌管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'sku',
        meta: {
          title: 'sku管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'spu',
        meta: {
          title: 'spu管理',
          hidden: true,
          icon: 'Plus', //菜单图标
        },
      },
    ],
  },
]
export const anyroute = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: false,
      icon: 'Plus', //菜单图标
    },
  },
]
