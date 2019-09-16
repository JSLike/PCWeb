<template>
    <div id="loginpho">
      <div class="header">
        <a href="#" class="glyphicon glyphicon-menu-left" @click="routerback"></a>
      </div>

      <div class="section">
        <ul class="user-box">
          <li class="userimg">
            <img src="../../../static/images/icon/user_03.jpg" alt="" class="user">
          </li>
          <li class="phonum">
            158<span>****</span>31
          </li>
          <li class="op-ani">
            <button class="phologin" @click="toIndex">本机号码一键登录</button>
          </li>
          <li class="op-ani">
            <router-link :to="{name:'Login'}">其他登陆方式</router-link>
          </li>
        </ul>
      </div>

      <div class="footer">
        登录即代表您同意我们的
        <a href="#">《服务协议》</a>
        和
        <a href="#">《隐私协议》</a>
        以及
        <a href="#">《中国移动认证服务条款》</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Loginpho",
        methods:{
          routerback(){
            this.$router.back()
          },
          toIndex(){
            this.$router.push('/')
            this.$local.set('user','155555555555')
          }
        },
      mounted(){
          $(".userimg").animate({
            top:0,
          },1000);
          $(".phonum").animate({
            top:0,
          },1000);
          $(".op-ani").animate({
            opacity:1
          },1000)
      }
    }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';

  #loginpho{
    .header{
      height: 140/@r;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /*border: 1px solid #00cc66;*/
      a{
        display: block;
        width: 160/@r;
        height: 140/@r;
        font-size: 42/@r;
        line-height: 140/@r;
        text-align: center;
        color:#3e3e3e ;
      }
    }

    .section{
      padding: 180/@r 0;
      .user-box {
        li {
          position: relative;
          font-size: 42/@r;
          display: flex;
          justify-content: center;
          &.op-ani {
            opacity: 0
          }
          &.userimg{
            top: -300/@r;
          }
          &.phonum {
            height: 168/@r;
            line-height: 168/@r;
            font-size: 50/@r;
            font-weight: bold;
            top: -300/@r;

          }

          .user {
            margin: 0 auto;
          }

          .phologin {
            width: 964/@r;
            height: 136/@r;
            background: #ff9913;
            color: #fff;
            font-size: 46/@r;
            border-radius: 20/@r;
            margin-top: 70/@r;
            margin-bottom: 66/@r;
          }
        }
      }
    }

    .footer{
      width: 100%;
      position: fixed;
      bottom: 0;
      padding:0 100/@r  40/@r;
      line-height: 48/@r;
      text-align: center;
      font-size: 32/@r !important;
      color: #959595;

        a{
          display: inline-block;
          font-size: 32/@r;
          color: #959595;
          text-decoration: underline;
        }

    }
  }
</style>
