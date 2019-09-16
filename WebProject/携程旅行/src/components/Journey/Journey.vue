<template>
   <div id="journey">
      <div class="header">
        <h2>登陆后可查看或添加行程</h2>
        <router-link :to="{name:'Login'}" class="login-btn">登录</router-link>
      </div><--头部-->
      <div class="section">
        <div class="sectionbox-1">
          <h3 class="title">下一站去哪</h3>
          <div class="cont-box">
            <div class="img-box icon-red" v-for="(item,index) in nextstation.nextstationa">
              <i class="icon">{{index}}</i>
              <img :src="item.src" alt="">
              <div class="msg">
                <h4 class="img-title">超爆款路线</h4>
                <p class="fa fa-map-o">跟着玩就对了</p>
              </div>
            </div>
            <div class="text-box icon-red" v-for="(item,index) in nextstation.nextstationb">
              <i class="icon">{{index+3}}</i>
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}}</p>
            </div>

          </div>
        </div>

       <div class="sectionbox-1">
         <h3 class="title">下下下站去哪</h3>
         <div class="cont-box">
           <div class="img-box icon-red" v-for="(item,index) in nextstation.nextstationa">
             <i class="icon">{{index}}</i>
             <img :src="item.src" alt="">
             <div class="msg">
               <h4 class="img-title">超爆款路线</h4>
               <p class="fa fa-map-o">跟着玩就对了</p>
             </div>
           </div>
           <div class="text-box icon-red" v-for="(item,index) in nextstation.nextstationb">
             <i class="icon">{{index+3}}</i>
             <h4>{{item.title}}</h4>
             <p>{{item.subtitle}}</p>
           </div>

         </div>
       </div>

     </div>

   </div>
</template>

<script>
    export default {
        name: "Journey",
        data(){
            return{
              nextstation:"",
            }
        }
        ,created(){
          let $this=this;
          this.$axios.get('../../../static/JSON/Journey/journey.json')
            .then(function (response) {
              // console.log(response.data);
              $this.nextstation=response.data
            })
            .catch(function (error) {
              console.log(error)
            })

      }
    }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';

  #journey{

    .header{
      width: 100%;
      height: 590/@r;
      border: 1px solid #0a0a0a;
      padding: 74/@r;
      background: url("../../../static/images/journey/img4.jpg") no-repeat center;
      background-size:100% 590/@r ;
      h2{
        padding: 30/@r;
        text-align: center;
        font-size: 60/@r;
        font-weight:bold;
      }
      .login-btn{
        width: 374/@r;
        height: 126/@r;
        line-height: 126/@r;
        background: #0287f7;
        color: #fff;
        font-size: 50/@r;
        font-weight: 600;
        text-align: center;
        border-radius: 200/@r;
        margin:0 auto;
      }
    }
    .section{
      position: relative;
      top: -50/@r;
      border-radius: 40/@r;
      background: #fff;
      padding: 150/@r 0 0;

      .sectionbox-1{

        h3.title{
          border-left: 18/@r solid #fc5476;
          font-size: 54/@r;
          height: 78/@r;
          line-height: 78/@r;
          text-indent: .5em;
        }
        .cont-box{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 50/@r 40/@r;
          .icon-red{
            border-radius: 20/@r;
           .icon{
              display: block;
              text-align: center;
              background: #fe5c8d;
              position: absolute;
              left: 0;
              top: 0;
              color: #fff8fb;
            }
          }
          .img-box{
            position: relative;
            margin-right: 8/@r;
            .icon{
              line-height: 90/@r;
              height: 90/@r;
              width: 90/@r;
              font-size: 35/@r;
              border-radius: 10/@r 10/@r 50/@r;
            }
            img{
              width: 320/@r;
              height: 334/@r;
            }
            .msg{
              width: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              h4{
                color: #fff;
                font-size: 40/@r;
                text-align: center;
                font-weight: bold;
              }
              p{
                  font-size: 28/@r;
                  color: #fff;
                  padding: 0 24/@r;
                &:before{
                  margin-right: 20/@r;
                }
              }
            }
          }
          .text-box{
            position: relative;
            border:1px solid #cecece;
            width: 320/@r;
            height: 150/@r;
            margin-top: 20/@r;
            margin-right:8/@r;
            text-align: center;
            padding: 30/@r 0 26/@r;
            h4{
              font-weight: bold;
              font-size: 42/@r;
              margin-top: 0;
              margin-bottom: 20/@r;
            }
            p{
              color:#c7c7c7;
              font-size: 32/@r;
            }
            .icon{
              width: 46/@r;
              height: 46/@r;
              line-height:46/@r;
              border-radius: 10/@r 5/@r;
              font-size: 24/@r;
            }


          }
        }
      }

    }

  }



</style>
