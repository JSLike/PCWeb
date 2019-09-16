import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Help from '@/components/Help/Help'
import Index from '@/components/Index/Index'
//首页跳转页面
import City from '@/components/Index/Indexfn/City'
import Second from '@/components/Index/Indexfn/Second'


import Journey from '@/components/Journey/Journey'
import My from '@/components/My/My'
import Photo from '@/components/Photo/Photo'
//首页当季热门
import jingxuan from '@/components/Index/Indexhot/jingxuan'
import qingliang from '@/components/Index/Indexhot/qingliang'
import qingzi from '@/components/Index/Indexhot/qingzi'
//当季热门模板
import Pbcomponent from '@/components/Index/Indexhot/Pbcomponent'

//登录
import Login from '@/components/Login/Login'
import Loginpho from '@/components/Login/Loginpho'

import Test from '@/components/Test'
Vue.use(Router);

const router= new Router({
  mode:'history',
  linkActiveClass:'isShow',
  routes: [
    {
      path:'/test',
      name:'Test',
      component:Test
    },
    {
      path: '/',
      component: Nav,
      children:[
        {
          path: '',
          // name: 'Nav',
          component: Index,
          meta:{
            title:'首页',
            num:1
          },
          children:[
            {
              path: '',
              // name: 'jingxuan',
              name: 'Nav',
              component: jingxuan,
              meta:{
                title:'首页',
                num:1
              },
            },
            {
              path: '/qingliang',
              name: 'qingliang',
              component: qingliang,
              meta:{
                title:'首页',
                num:1
              },
            },
            {
              path: '/qingzi',
              name: 'qingzi',
              component: qingzi,
              meta:{
                title:'首页',
                num:1
              },
            }
          ]
        },
        {
          path: '/journey',
          name: 'Journey',
          component: Journey,
          meta:{
            title:'行程',
            num:2
          }
        },
        {
          path: '/photo',
          name: 'Photo',
          component: Photo,
          meta:{
            title:'旅拍',
            num:3
          }
        },
        {
          path: '/help',
          name: 'Help',
          component: Help,
          meta:{
            title:'客服',
            num:4
          }
        },
        {
          path: '/my',
          name: 'My',
          component:My,
          meta:{
            title:'我的',
            num:5
          }
        },
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/loginpho',
      name:'Loginpho',
      component:Loginpho
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path:'/second',
      name:'Second',
      component:Second
    }
  ]
});


export default router
router.beforeEach((to,from,next)=>{ //解决切换路由跳转之后滚动条不回顶部的bug
  document.documentElement.scrollTop=0;  //？？？影响到了下方的当季热门路由
next()
});
