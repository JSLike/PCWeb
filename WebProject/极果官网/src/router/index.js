import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Guid from '@/components/Guid/Guid'
import Play from '@/components/Play/Play'
import Report from '@/components/Report/Report'
import Tryuse from '@/components/Tryuse/Tryuse'

import Renew from '@/components/Report/Renew'
import Rehot from '@/components/Report/Rehot'

Vue.use(Router);

export default new Router({
  linkActiveClass:'isShow',
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index
    },
    {
      path:'/Guid',
      name:'Guid',
      component:Guid
    },
    {
      path:'/Play',
      name:'Play',
      component:Play
    },
    {
      path:'/Report',
      component:Report,
      children:[
        {
          path:'rehot',
          name:'Rehot',
          component:Rehot
        },
        {
          path:'',
          name:'Report',

          // name:'Renew',
          component:Renew
        }
      ]
    },
    {
      path:'/Tryuse',
      name:'Tryuse',
      component:Tryuse
    },
  ]
})
