<template>
    <div id="loginbox">
      <div class="header">
        <a href="#" class="glyphicon glyphicon-menu-left" @click="routerback"></a>
        <router-link :to="{name:'Loginpho'}" class="register">注册</router-link>
      </div>
      <div class="section">
        <h1>携程账号登录</h1>
        <form action="http://www.baidu.com" method="get" id="login-form" @submit.prevent="send">
          <div class="inputbox bor-bottom">
            <input type="text" placeholder="国内手机号/用户名/邮箱/卡号" class="inputbox" ref="username">
          </div>
          <div class="inputbox passbox bor-bottom">
            <input type="password"
                   placeholder="登录密码"
                   class="inputbox"
                   @click="passchange"
                   v-model="passmsg"
                   ref="userpass"
            >
            <div class="x-box">
              <i class="fa fa-times-circle" v-show="passmsg" @click="passmsg=''"></i>
            </div>
            <i class="fa fa-eye i-eye"></i>
            <a href="#" class="find-pass">找回密码</a>
          </div>
          <button type="submit" class="inputbox">登录</button>
          <div class="inputbox pho-login">
            <router-link :to="{name:'Loginpho'}">手机动态密码登录</router-link>
            <a href="#">境外手机登录</a>
          </div>
        </form>
      </div>



      <div class="footer">
        <div class="other-login" v-show="moreicon2">
          <a href="#" class="fa fa-weixin"></a>
          <a href="#" class="fa fa-qq"></a>
          <a href="#" class="fa fa-ellipsis-h" @click="moreiconfn"></a>
        </div>
        <div class="other-more" v-show="moreicon1">
          <a href="#" class="fa fa-weixin" v-for="(item,index) in iconcolor" :key="index" :style="{color:item}"></a>
        </div>
        <div class="deal-text">
          登录即代表您同意我们的
          <a href="#" @click="to">《服务协议》</a>
          和
          <a href="#">《隐私协议》</a>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';


    export default {
        name: "Login",
        data(){
            return{
              passmsg:'',
              moreicon1:'',
              moreicon2:'1',
              iconcolor:['red','blue','yellow','green','black'],
              modal:false,
              modalmsg:''
            }
        },
        methods:{
          to(){
            Toast('提示内容');
          }
        ,
          moreiconfn(){
            this.moreicon1=1;
            this.moreicon2="";
          },
          routerback(){
            this.$router.back()
          },
          passchange(){
            if(this.passmsg){
              $('.passbox .fa-times-circl').css("display","block");
            }else{
              $('.passbox .fa-times-circle').css("display","none");
            }
          },
          modalchange(){
            Toast(this.modalmsg);//  弹出层
            $('.van-toast').addClass('vana')

            // $('.van-toast').css('width', '500/@r !important')
          },
          send(){
            let name=this.$refs.username.value;
            let pass=this.$refs.userpass.value;
            if(name&&pass){
              this.$local.set('user',name);
              this.$local.set('pass',pass);
              this.$router.push({name:'My'})
            }else if(name){
              this.modalmsg=" 请输入密码";
              this.modalchange();
              // return
            }else if(pass){
              this.modalmsg=" 请输入账号";
              this.modalchange();
              // return
            }else{
              this.modalmsg=" 请输入信息";
              this.modalchange();
            }
          }
        },
    }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';
#loginbox{
  .header{
    height: 140/@r;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    width: 970/@r;
    margin: 0 auto;
    /*border: 1px solid #0a0a0a;*/

    h1{
      width: 970/@r;
      height: 412/@r;
      line-height: 412/@r;
      text-align: center;
      font-size: 72/@r;
    }
    .bor-bottom{
      border-bottom: 1px solid #b7b7b7 !important;
      box-sizing: content-box;
    }
    input{
      &[type='password']{
        width: 538/@r !important;
      }
    }
    .inputbox{
      width: 970/@r;
      height: 132/@r;
      font-size: 42/@r;
      &::placeholder{
        color: #e1e1e1;
        text-indent: 0.5em;
      }
    }
    .passbox{
      display: flex;
      align-items: center;
      .x-box{
        width: 92/@r;
        height: 74/@r;
      }
      .fa-times-circle{
        width: 92/@r;
        height: 74/@r;
        font-size: 70/@r;
        color: #aeaeae;
        /*display: none;*/
      }
      .i-eye{
        width: 126/@r;
        height: 74/@r;
        line-height: 74/@r;
        font-size: 60/@r;
        color: #ccc;
        text-align: center;
      }
      .find-pass{
        width: 212/@r;
        height: 74/@r;
        line-height: 74/@r;
        font-size: 42/@r;
        color: #686868;
        text-align: center;
        border-left: 2px solid #ccc;
      }
    }//密码框区域

    button[type='submit']{
      background:#ff9913 ;
      color: #fff;
      font-size: 46/@r;
      border-radius: 20/@r;
      margin-top: 74/@r;
      margin-bottom: 66/@r;
    }
    .pho-login{
      display: flex;
      justify-content: space-between;
      a{
        outline: none;
        font-size: 40/@r;
        color: #707070;
        text-decoration: none;
      }
    }
  }

  .footer{
    position: fixed;
    right: 0;
    bottom: 0;

      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      .other-more{
        width: 970/@r;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        a{
          width: 78/@r;
          height: 78/@r;
          text-align: center;
          line-height: 78/@r;
          border:2px solid #cccccc;
          border-radius: 50%;
          font-size: 45/@r;
        }
      }
      .other-login{
        width: 970/@r;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        a{
          width: 156/@r;
          height: 156/@r;
          text-align: center;
          line-height: 156/@r;
          border:2px solid #cccccc;
          border-radius: 50%;
          font-size: 90/@r;
          &.fa-weixin{
            color: #59c45f;
          }
          &.fa-qq{
            color: #49b9f1;
          }
          &.fa-ellipsis-h{
            color: #cccccc;
          }
        }
      }

      .deal-text{
        width: 970/@r;
        margin: 0 auto;
        height: 136/@r;
        line-height: 136/@r;
        text-align: center;
        font-size: 32/@r !important;
        color: #959595;
        a{
          font-size: 32/@r;
          color: #959595;
          text-decoration: underline;

        }
      }
  }
}

</style>
