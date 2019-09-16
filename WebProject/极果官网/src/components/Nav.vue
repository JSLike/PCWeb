<template>
    <div>
      <header>
        <div class="body-width head-box clear">
          <h1><img src="../assets/images/logonew.png" alt="" class="logo"></h1>
          <ul class="nav">
            <li><router-link exact :to="{name:'Index'}">首页</router-link></li>
            <li><router-link :to="{name:'Play'}">酷玩</router-link></li>
            <li><router-link :to="{name:'Guid'}">导购</router-link></li>
            <li><router-link :to="{name:'Tryuse'}">试用</router-link></li>
            <li><router-link :to="{name:'Report'}">报告</router-link></li>
          </ul>
          <div class="header-sea">
            <a href="#"><img src="../assets/images/search.png" alt=""></a>
            <a href="#"><span>注册</span></a>
          </div>
        </div>
      </header>




      <section></section>

      <router-view></router-view>

      <footer>
        <div class="body-width">


            <img src="../assets/images/code.png" alt="" class="code-icon">

            <dl>
              <dt>
                <img src="../assets/images/logoImg.jpg" alt="">
              </dt>
              <dd>
                <p>全球酷玩试用导购平台酷·新奇·好玩·品质</p>
                <p>微信添加"JguoJguo"获取我们的服务。</p>
              </dd>
            </dl>


          <dl>
            <dt>免费试用</dt>
            <dd>
              <p v-for="item in footermsg.free"><a href="#">{{item}}</a></p>
            </dd>
          </dl>

          <dl>
            <dt>友情链接</dt>
            <dd>
              <a href="#" v-for="item in footermsg.friend">{{item}}</a>
            </dd>
          </dl>

          <dl>
            <dt>购买攻略</dt>
            <dd>
             <p v-for="item in footermsg.shop"><a href="#">{{item}}</a></p>
            </dd>
          </dl>


          <dl>
            <dt>厂商合作</dt>
            <dd>
              <p v-for="item in footermsg.plant"><a href="#">{{item}}</a></p>
            </dd>
          </dl>
        </div>
        <a href="#" class="footer-copy">&copy; 2016 极果版权所有</a>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
          return{
            footermsg:{
              free:['试用流程','如何提高成功率'],
              friend:['智东西 ','WEIBUSI','搜狐IT','腾讯科技','搜狐数码','凤凰科技','凤凰数码','PConline','泡泡网','3W咖啡','ZUK社区','亿觅emie','极客公园','易迅易启玩','果库'],
              shop:['美亚海淘教程','日亚海淘教程','海淘转运攻略','kickstarter 众筹购买攻略','indiegogo 众筹购买攻略'],
              plant:['关于极果','联系我们','商务合作：BD@jiguo.com','CEO邮箱：CEO@jiguo.com'],
            }
          }
        }
    }
</script>

<style scoped>

  .isShow{
    color: #ff0000;
  }
</style>
