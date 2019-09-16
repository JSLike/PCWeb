<template >
  <div id="my-nologin">
    <div class="header">
<!--      <img class="user-poster" src="../../../static/images/login/photo_myctrip@2x_6.22.jpg">-->
      <div class="header-nav">
        <router-link :to="{name:'Login'}" class="fa fa-calendar-check-o"></router-link>
        <div class="right-icon">
          <a class="fa fa-cog"></a>
          <a class="fa fa-envelope"></a>
          <a class="fa fa-commenting-o"></a>
        </div>
      </div>
      <h1>登录携程，开启旅程</h1>
      <div class="login-box">
        <router-link :to="{name:'Login'}" class="login-btn">登录/注册</router-link>
        <a href="" class="pho-inquire">手机号查单</a>
      </div>
    </div>
<!--我的钱包-->
    <div class="section">
      <div class="my-property">

        <van-row class="user-links my-wallet">
            <van-col span="24">
             <img src="../../../static/images/icon/my/my_3.jpg" class="fish">
              <dl>
                 <dt><a href="#">我的钱包</a></dt>
                 <dd>现金 / 礼品卡 / 返现等</dd>
              </dl>
            </van-col>
        </van-row>

        <van-row class="user-links my-card">
          <van-col span="12" class="">
            <a href="" class="title">
              <img src="../../../static/images/icon/my/my_5.jpg" alt="">
                优惠券
            </a>
            <a href="" class="doit">领券</a>
          </van-col>
          <van-col span="12">
            <a href="" class="title">
              <img src="../../../static/images/icon/my/my_7.jpg" alt="">
              积分
            </a>
            <a href="" class="doit">兑好礼</a>
          </van-col>
        </van-row>

      </div>




      <div class="list-msg">
        <van-cell-group>
          <router-link :to="{name:'Login'}" v-for="(item,index) in listmsg" :key="index">
            <van-cell :title="item.title" is-link >{{item.submsg}}</van-cell>
          </router-link>
        </van-cell-group>

        <van-cell-group class="user-group">
          <van-cell :title="tool.title" is-link>{{tool.submsg}}</van-cell>
        </van-cell-group>
      </div>
    </div>

  </div>
</template >

<script>
  import { Row, Col, Icon, Cell, CellGroup } from 'vant';
    export default {
        name: "Mylogin",
      data(){
          return{
            listmsg:[
              {title:'常用信息',submsg:'旅客/地址/保险凭证'},
              {title:'我的收藏',submsg:'收藏后静等降价通知 '},
              {title:'浏览历史',submsg:'保留15天，随时可回看'},
              {title:'我要合作',submsg:'供应商加盟/代理合作'},
            ],
            tool:{title:'出行工具',submsg:'航班/翻译助手等'},
          }
      }
    }
</script>

<style scoped  lang="less">
  @import '~@/assets/less/base.less';

  .header{
    width: 100%;
    height: 510/@r;
    background: url("../../../static/images/login/photo_myctrip@2x_6.22.jpg") no-repeat center;
    background-size: 100% 510/@r;

    .header-nav{
      a{
        color:#fff;
        font-size: 60/@r;
      }
      .right-icon{
        display: flex;
      }
    }
    h1{
      margin: 0;
      width: 100%;
      height: 134/@r;
      line-height: 134/@r;
      text-align: center;
      font-size: 56/@r;
      color: #fff;
    }
    .login-box{
      height: 152/@r;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        height: 108/@r;
        width: 366/@r;
        line-height: 108/@r;
        text-align: center;
        font-size: 42/@r;
        color: #fff;
        border-radius: 200/@r;
        &.login-btn{
          background: #ff9b16;
        }
        &.pho-inquire{
          background: #5e99e7;
          border: 2px solid #fff;
          margin-left: 60/@r;
        }
      }
    }
  }

  .section{
    background: #ececec;
    .my-property{

      .my-wallet{

        margin-bottom: 2px;
       .van-col--24{
          padding: 46/@r 40/@r;
          height: 230/@r;
          display: flex;
         .fish{
          display: block;
          width: 92/@r;
          height: 92/@r;
         }
         dl{
            padding: 0 26/@r;
         }
         dt{
           text-align: left;
           margin-bottom: 46/@r;
           a{
             font-size: 40/@r;
             color: #0a0a0a;
           }
         }
         dd{
            font-size: 36/@r !important;
            color: #a7afb6;
            height: 40/@r;
            line-height: 40/@r;
         }


        }
      }

      .my-card{
        margin-bottom: 22/@r;
        .van-col{
          height: 170/@r;
          display: flex;
          justify-content: center;
          align-items: center;
          &:first-child{
            border-right: 1px solid #959595;
          }
          a{
            i{
              height: 60/@r;
              line-height: 50/@r;
            }
            font-size: 46/@r;
            display: flex;
            justify-content: center;
            align-items: center;
            &.doit{
              height: 170/@r;
              width: 194/@r;
            }
            &.title{
              height: 170/@r;
              width: 344/@r;
              color: #0a0a0a;
              img{
                padding-right: 24/@r;
              }
            }
          }

        }
      }
    }

    .list-msg{
     .van-cell--clickable{
       padding:0 80/@r;
       display:flex;
       align-items: center;
       height: 130/@r;
       font-size: 42/@r;
       line-height: 130/@r;
       .van-cell__title span{
         font-weight: bold !important;
       }
     }
      .user-group{
        margin-top: 20/@r;
      }
    }
  }

  .user {
    &-poster {
       width: 100%;
       height: 53vw;
       display: block;
     }
    &-links {
       text-align: center;
       background-color: #fff;
       padding:0 40/@r;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
