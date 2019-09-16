<template>
    <div id="help">
      <div class="header">
        <div class="serve" :class="{'serve-move':scrollbl}">
          <img src="../../../static/images/help/fixlogo_03.png" alt="">
        </div>
        <van-sticky class="header-nav" :class="{'sticky-changed':scrollbl}">
          <div>
            <a href="#" class="call-help" v-show="scrollbl">客服中心</a>
            <router-link :to="{name:'Loginpho'}">
              <i class="fa fa-phone"></i>
            </router-link>
            <router-link :to="{name:'Login'}">
              <i class="fa fa-comments-o"></i>
            </router-link>
          </div>
        </van-sticky>
        <img src="../../../static/images/help/helplogo_03.png" alt="" class="logo">
        <div class="login-box">
          <h3>
            登录以获得更便捷的服务
          </h3>
          <div class="login-btn">
            <router-link :to="{name:'Login'}" class="a-all login-a">登录</router-link>
            <router-link :to="{name:'Login'}" class="a-all register-a">注册</router-link>
          </div>
        </div>
      </div>
      <div class="section">

        <Helpcomp :datamsg="data1" class="back-white"></Helpcomp>
        <Helpcomp :datamsg="data2" class="back-white"></Helpcomp>
        <Helpcomp :datamsg="data3" class="back-white"></Helpcomp>
        <Helpcomp :datamsg="data1" class="back-white"></Helpcomp>
        <Helpcomp :datamsg="data1" class="back-white"></Helpcomp>

      </div>
    </div>
</template>

<script>
  import Helpcomp from '@/components/Help/Helpcomp/Helpcomp'
    export default {
        name: "Help",
      components:{
        Helpcomp
      },
      data(){
          return{
            data1:'../../../static/JSON/Help/helpdata1.json',
            data2:'../../../static/JSON/Help/helpdata2.json',
            data3:'../../../static/JSON/Help/helpdata3.json',
            scrollbl:false
          }
      },
      mounted() {
          //滚动条监听事件
        let $this=this;
        window.addEventListener('scroll',function () {
          let wScrollTop= document.documentElement.scrollTop || document.body.scrollTop;
          $this.scrollbl = wScrollTop > 150;
        })

      }
    }
</script>

<style lang="less">
  @import '~@/assets/less/base.less';

  #help{
    .back-white{
      background: #fff;
      border-radius: 20/@r;
    }
    background: #f4f4f4;
    .header{
      background: #0189f7;
      height: 450/@r;
      position: relative;
      border-radius: 0 0 50/@r 50/@r;
      .logo{
        position: absolute;
        bottom: 120/@r;
        left:26/@r;
        width: 1020/@r;
        height: 180/@r;
      }
      .login-box{
        position: absolute;
        width: 1020/@r;
        height: 210/@r;
        background: #fff;
        bottom: -80/@r;
        left: 26/@r;
        box-shadow: #cfcfcf 2px 2px 3px;
        border-radius: 30/@r;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{
          text-indent: 1em;
          font-size: 40/@r;
          width: 414/@r;
          height: 103/@r;
          padding: 0 80/@r;
        }
        .login-btn{
          border-left: 2px solid #cccccc;
          width: 572/@r;
          height: 103/@r;
          display: flex;
          justify-content: space-between;
          padding: 10/@r 70/@r;
          .a-all{
            box-sizing: border-box;
            width: 200/@r;
            height: 84/@r;
            line-height: 84/@r;
            text-align: center;
            border-radius: 200/@r;
            font-size: 40/@r;
          }/*按钮通用样式*/
          .login-a{
            background: #0287f7;
            color: #fff;
          }
          .register-a{
            border: 2px solid #0287f7;
            color: #0287f7;
          }
        }
      }/*登录跳转框*/
      .header-nav{
        width: 100%;
        height: 124/@r;
      }
      .van-sticky{
        width:1080/@r;
        z-index:9999;
        div{
          display: flex;
          justify-content: space-between;
        }
        .call-help{
          width: 200/@r;
          height:124/@r;
          font-size: 44/@r;
          position: absolute;
          left: 50%;
          top: 0%;
          transform: translateX(-50%);
        } /*客服中心*/
        i.fa{
          width: 160/@r;
          height: 124/@r;
          line-height: 124/@r;
          text-align: center;
          font-size:70/@r;
          color: #fff;
        }
      }

      .sticky-changed{
        .van-sticky{
          background: #fff;
          i.fa{
            color: #000;
          }
        }
      }/*顶部导航改变样式*/

      /*右侧滚动条出现框*/
      .serve{
        transition: right 1s linear;
        position: fixed;
        right: -100%;
        bottom: 30%;
        img{
          width: 300/@r;
          height: 84/@r;
          border-radius: 200/@r 0 0 200/@r;
        }
      }
    .serve-move{
      right: 0;
      transition:all 1s linear;
    }
    }

    .section{
      /*border: 5px solid #00ff40;*/
      width: 1020/@r;
      margin: 120/@r auto 0;

    }













  }
</style>
