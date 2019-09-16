<template>
    <div id="navbar">
      <!--子路由显示-->
      <router-view style="padding-bottom: 200px"></router-view>
      <!--底部导航条-->
      <mt-tabbar>
        <mt-tab-item :id="item.title" class="navbar" v-for="(item,index) in msg" :key="index">
          <router-link :to="{name:item.name}" exact>
            <img :src="('../../static/images/icon/bavbar'+item.num+'.jpg')" alt="" :key="index">
            {{item.title}}
          </router-link>
        </mt-tab-item>

      </mt-tabbar>

    </div>
</template>

<script>

    export default {
        name: "Work",
      data(){
          return{
            'imgnum':2,
            msg:[
              {num:1,title:"首页",name:"Nav",denum:1},
              {num:2,title:"行程",name:"Journey",denum:2},
              {num:3,title:"旅拍",name:"Photo",denum:3},
              {num:4,title:"客服",name:"Help",denum:4},
              {num:5,title:"我的",name:"My",denum:5},
            ]
          }
      },
      created(){
          let tit=this.$route.meta;
          this.msg.map(function (item,index) {  //监听路由变化修改图标
          if( item.title===tit.title){
            item.num= tit.num+10
          }else{
            item.num= item.denum
          }
        });
      },
        watch:{
          $route(to,from){
            let tit=to.meta;
            this.msg.map(function (item,index) {  //监听路由变化修改图标
              if( item.title===tit.title){
                item.num= tit.num+10
              }else{
                item.num= item.denum
              }
            });
          }
        },
    }
</script>

<style lang="less">
  @import '~@/assets/less/base.less';

  #navbar{
    .isShow{
      color: #0086f7;
    }
    .mint-tabbar{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 162/@r;
      .mint-tab-item{
        width: 100%;
        height: 150/@r;
        a{
          display: block;
          font-size: 32/@r;
        }
        img{
          width: 70/@r;
          height: 100/@r;
          margin: 0 auto;
        }
      }
    }

  }
</style>
