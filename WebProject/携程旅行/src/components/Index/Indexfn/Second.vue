<template>
  <div id="index-second">
    <div class="header-nav">
      <i class="fa fa-angle-left" @click='routerback'></i>
      <div class="right">
        <a href='#' class="subscription">订阅</a>
        <a href="#" class="fa fa-share-square-o"></a>
      </div>
    </div>
    <div class="section" :style="{background:'url('+contbackground+')'}">
      <!--轮播图盒子-->
      <div class="opa-back">
        <dl class="title-box">
          <dt>
            <h2>携程二楼</h2>
          </dt>
          <dd>
            <p><span>心在旅行</span><span>诗和远方</span></p>
          </dd>
        </dl>
        <div class="swiper-box">

          <swiper :options="swiperOption" ref="mySwiper" @touchMove="ale">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in seconddata.swiper" :key="index">
              <img :src="item.src" alt="">
              <div class="cont-box">
                <h3>
                  {{item.title}}
                </h3>
                <a href="#" class="msg-box">
                  <i class="fa fa-id-card-o"></i>
                  <span>{{item.user}}</span>
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!--滑动标签页-->
    <div class="tab-box">
      <van-tabs v-model="tabactive" class="vtabs" line-width="0px">
        <van-tab v-for="(item,index) in seconddata.tab" :title="'标签 ' + index" :key="index" class="vtab">
          <div slot="title" class="slot-box">
            <a href="javascript:;">
              <span class="icon-num">第{{item.num}}集</span>
              <img :src="item.src" alt="pic">
              <h3>{{item.title}}</h3>
            </a>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
        name: "Second",
        methods:{
          ale(){
           let $this=this;
           if(timer){
             clearTimeout(timer)
           }
           let timer=setTimeout(function () {
             $('.swiper-slide').map(function(index,item){
               if ($(item).hasClass('swiper-slide-active')) {
                 return $this.contbackground=$(item).find('img').prop('src')
               }
             })
           },500);
          },
          routerback(){
            this.$router.back()
          },
        },
        data() {
          return {
            swiperOption: {
              paginationClickable: true,
              centeredSlides: true,
              slidesPerView:1.54,
              initialSlide:2,
              watchActiveIndex: true,
              effect : 'coverflow',
              coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 260,
                modifier:1,
                slideShadows : true
              },

              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },

            },
            seconddata:'',
            contbackground:'',
            tabactive:0,
          }
        },
        components:{
          swiper,
          swiperSlide
        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        },
        mounted() {

          console.log('this is current swiper instance object', this.swiper);
          this.swiper.slideTo(2, 0, false)//mySwiper.slideTo(index, speed, runCallbacks)；

          //改变轮播图背景图
          $('.swiper-slide').map(function(index,item){
            if ($(item).hasClass('swiper-slide-active')) {
              return $this.contbackground=$(item).find('img').prop('src')
            }
          })

        },
        created() {
          let $this=this;
            //获取数据
            this.$axios.get('/static/JSON/Indexfn/second.json')
              .then(function (response) {
                $this.seconddata=response.data;
                console.log("$this.seconddata",$this.seconddata.swiper)
                $this.contbackground=response.data.swiper[2].src
              }).catch(function (error) {
                console.log(error)
            });
        },


  }
</script>



<style scoped lang="less">
  @import '~@/assets/less/base.less';

  #index-second{
    .van-ellipsis{
      display: block;
    }
    .header-nav{
      padding: 28/@r 32/@r;
      /*border: 2px solid #00b6ff;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #010103;
      .fa-angle-left{
        width: 130/@r;
        height: 80/@r;
        line-height:80/@r;
        text-align: center;
        font-size:80/@r;
        color: #fff;
      }

      .right{
        width: 288/@r;
        height: 80/@r;
        display: flex;
        a{
          color: #fff;
          &.subscription{
            width: 139/@r;
            height: 60/@r;
            line-height: 60/@r;
            border: 2px solid #fff;
            border-radius: 200/@r;
            font-size: 34/@r;
            margin: 10/@r 30/@r;
          }
          &.fa-share-square-o{
            width: 118/@r;
            height: 80/@r;
            line-height:90/@r;
            font-size: 60/@r;
            text-align: center;
          }
        }

      }

    }
    .section{
      /*主体部分标题盒子*/
      background: #00ff40;
      background-size: cover;
      transition:background 1s linear;
      .opa-back{
        background: rgba(12,12,12,0.4);
      }
      .title-box{
        /*background: #0A88E1;*/
        text-align: center;
        border:1px solid transparent;

        h2{
          color: #fff;
          font-size: 102/@r;
          padding: 20/@r 0;
        }
        p{
          color: #f0f6e4;
          span{
            padding: 12/@r 14/@r;
            font-size: 30/@r;

          }
        }
      }

      /*轮播图swiper区域*/
      .swiper-container{
        overflow: hidden;
        height: 1070/@r;
        .swiper-slide{
          border: 10px solid #00b6ff;
          border-radius: 20/@r;
          top:10%;
          width: 200%;
          height: 910/@r;
          background: #fff;
          transform: scale(0.6) !important;
          img {
            width:100% !important;
            height: 671/@r !important;
            transform: scale(1) !important;
            border-radius: 20/@r 20/@r 0 0;
          }
          .cont-box{
            padding: 34/@r 30/@r 22/@r;
            h3{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 40/@r;
              padding: 30/@r 0;
              margin: 0;
            }
            .msg-box{
              .fa{
                font-size: 60/@r;
                padding-right: 10/@r;
              }
              span{
                font-size: 32/@r;
                color: #a8a8a8;
              }
            }
          }/*轮播图内容部分*/
          &.swiper-slide-active{
            z-index: 2;
            top:5%;
            border: 1px solid red;
            transform: scale(1) !important;
            img{
              transform-origin: left top;
              transform: scale(1);
            }
          }
          &.swiper-slide-prev{
            z-index: 1;
          }
          &.swiper-slide-next{
            z-index: 1;
          }
        }
      }


    }



  }


</style>
<style lang="less">
  @import '~@/assets/less/base.less';
  /*选项卡盒子*/

  #index-second{
    html,body{
      height: 100%;
    }
    .tab-box{
      position: relative;
      padding:100/@r 0;
      background:#ececec ;
      &:before{
        content: "";
        display: block;
        position: absolute;
        z-index: 999;
        left: 50%;
        top: 0%;
        transform: translate(-50%,-95%);
        border: 80/@r solid;
        border-color:transparent transparent #ececec transparent;
      }
      .van-tabs--line .van-tabs__wrap{
        height: 318/@r;
        .van-tab{
          background: #ececec;
          display: block;
          flex-basis:auto !important;
          width: 400/@r !important;
          box-sizing: content-box;
        }
        .slot-box{
          width: 400/@r;
          margin: 0/@r;
          border: 1px solid #000;
          position: relative;
          border-radius: 20/@r;
          background: #fff;
          a{
            display: block;
            width: 400/@r;
            height: 318/@r;
          }
          span{
            display: block;
            width: 116/@r;
            height: 60/@r;
            line-height: 60/@r;
            background: linear-gradient(top, #b8b8b8, #171717) !important;
            border-radius: 10/@r;
            color: #fff;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            font-size: 28/@r;
          }
          h3{
            font-size: 37/@r;
            margin: 24/@r 10/@r;
            color: #171717;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          img{
            width: 400/@r;
            height: 230/@r;
          }
        }

      }

    }
  }


</style>
