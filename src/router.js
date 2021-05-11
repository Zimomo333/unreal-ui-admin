import { createRouter, createWebHashHistory } from 'vue-router'
import store from './store'
import { getToken } from './utils/auth'

export const routes = [
  {
    path: '/',     // 转义 / ，防止自动省略为空
    component: () => import('./views/home.vue'),
    meta: { 
      title: '',
      icon: 'el-icon-s-order'
    },
    hidden: true,
    children: [
      {
        path: '/index',
        component: () => import('./views/index.vue'),
        meta: { 
          title: ' 首页',
          icon: '<svg t="1620738782826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8038" width="24" height="24"><path d="M556.586667 159.36l288.490666 183.914667A64 64 0 0 1 874.666667 397.248v392.746667a64 64 0 0 1-64 64l-224-0.021334V597.333333H448v256.64l-213.333333 0.042667a64 64 0 0 1-64-64V391.68a64 64 0 0 1 30.272-54.4l287.530666-178.346667a64 64 0 0 1 68.138667 0.426667z" p-id="8039" fill="#707070"></path></svg>'
        }
      },
      { 
        path: '/info',
        component: () => import('./views/info.vue'),
        meta: { 
            title: '个人中心',
            icon: '<svg t="1620738702225" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7795" width="24" height="24"><path d="M644.8 581.568l160.64 187.456A64 64 0 0 1 756.842667 874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667A254.805333 254.805333 0 0 0 512 618.666667c48.64 0 94.08-13.546667 132.8-37.098667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z" p-id="7796" fill="#707070"></path></svg>'
        }
      },
      {
        path: '/orders',        // 以 / 开头的嵌套路径会被当作根路径
        component: () => import('./views/orders/index.vue'),    // 可写成{render: (e) => e("router-view")}，避免新建空router-view文件
        meta: { 
            title: '信息管理',
            icon: '<svg t="1620738985968" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9143" width="24" height="24"><path d="M896 832v64H597.333333v-64h298.666667zM192 355.477333l300.373333 132.672-1.621333 375.978667a64.064 64.064 0 0 1-2.346667-1.002667l-258.389333-114.730666A64 64 0 0 1 192 689.898667V355.477333zM896 725.333333v64H597.333333v-64h298.666667z m0-106.666666v64H597.333333v-64h298.666667z m-59.264-259.626667V576h-280.746667l0.362667-86.122667 280.384-130.837333zM540.352 160.853333l258.346667 114.752c9.834667 4.373333 18.197333 11.008 24.533333 19.157334l-297.002667 139.114666-318.784-141.482666a63.914667 63.914667 0 0 1 22.570667-16.789334l258.389333-114.730666a64 64 0 0 1 51.946667 0z" p-id="9144" fill="#707070"></path></svg>'
        },
        children: [
          {
            path: 'my-orders',      // 子路由不要加 /
            component: () => import('./views/orders/myOrders.vue'),
            meta: { 
                title: '表格',
                icon: '<svg t="1620738906893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8756" width="24" height="24"><path d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666zM341.333333 693.333333h-106.666666V789.333333h106.666666v-96z m448 0H405.333333V789.333333h384v-96zM341.333333 533.333333h-106.666666v96h106.666666V533.333333z m448 0H405.333333v96h384V533.333333z m-448-160h-106.666666V469.333333h106.666666v-96z m448 0H405.333333V469.333333h384v-96z" p-id="8757" fill="#707070"></path></svg>'
            }
          },
          {
            path: 'tabs',
            component: () => import('./views/orders/tabs.vue'),
            meta: { 
                title: '标签页',
                icon: '<svg t="1620739018847" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9530" width="24" height="24"><path d="M168.106667 621.44l120.746666 57.962667 223.274667 108.138666 215.317333-104.32 128.768-61.674666a64 64 0 0 1-29.952 84.970666l-286.229333 138.624a64 64 0 0 1-55.808 0L197.994667 706.517333A64 64 0 0 1 168.106667 621.44z m687.829333-133.930667a64 64 0 0 1-29.674667 85.546667L540.010667 711.68a64 64 0 0 1-55.808 0L197.994667 573.056A64 64 0 0 1 166.826667 490.88l317.013333 149.525333 28.288 13.696 286.229333-138.624-0.149333-0.064 57.728-27.882666zM540.032 185.792l286.208 138.602667a64 64 0 0 1 0 115.2l-286.208 138.624a64 64 0 0 1-55.808 0L197.994667 439.594667a64 64 0 0 1 0-115.2L484.224 185.813333a64 64 0 0 1 55.808 0z" p-id="9531" fill="#707070"></path></svg>'
            }
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    component: () => import('./views/login.vue'),
    hidden: true
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // (缩写) 相当于 routes: routes
})

//路由全局前置守卫，验证token
router.beforeEach(async(to, from, next) => {
  
    // determine whether the user has logged in
    const hasToken = getToken()
  
    if (hasToken) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next('/')
      } else {
        const hasGetUserInfo = store.getters.name
        if (hasGetUserInfo) {
          next()
        } else {
          try {
            // get user info
            await store.dispatch('getInfo')
  
            next()
          } catch (error) {
            await store.dispatch('resetToken')
            next('/login')
          }
        }
      }
    } else {
        /* has no token*/
        if (to.path === '/login') {   //next()才能跳出循环
            next()
        } else {
            next('/login')
        }
    }
})

export default router