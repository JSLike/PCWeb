<template>
    <div id="index">

      <!--下拉背景-->
      <div class="loadmore-bg">
            <h3>欢迎光临 携程二楼</h3>
            <i class="fa fa-angle-double-down"></i>

      </div>
      <!--下拉刷新-->
      <mt-loadmore :top-method="loadTop"
                   ref="loadmore"
                   @top-status-change="handleTopChange">
        <!--插槽内容-->
        <div slot="top" class="mint-loadmore-top"></div>



        <div class="header">
          <!--顶部搜索框区域-->
          <div class="sticky-box" :class="{'stick-color':scrollbl}">
            <van-sticky :scroll="vanScroll" >
                <router-link :to="{name:'City'}" class="city-a">{{this.cityname}}<i class="fa fa-angle-down"></i></router-link>
                <div class="search-a">
                  <a class="search-link">
                    <van-swipe vertical :show-indicators="false" :touchable="false" :autoplay="1000">
                      <van-swipe-item
                        v-for="(item,index) in searchswiper"
                        :key="index"
                      >
                        {{item.title}}
                      </van-swipe-item>
                    </van-swipe>
                  </a>
                  <a href="javascript:;" class="mic"></a>
                </div>
                <router-link :to="{name:'Login'}" href="" class="msg-a"></router-link>

            </van-sticky>
          </div>

           <!--顶部轮播图-->
          <div class="swiper-box">
            <van-swipe :autoplay="3000" indicator-color="white"  @change="onChange">
              <van-swipe-item
              v-for="(item,index) in swipernum" :key="index"
              ><img :src='("../../../static/images/index/indexswiper"+(item)+".jpg")' alt=""></van-swipe-item>

            </van-swipe>
          </div>

          <!--头部导航栏-->
          <div class="header-nav">
            <a href="" v-for="(item,index) in headernav" :key="index">
              <img :src="item.src" alt=""/>
              <span>
                {{item.title}}
              </span>
            </a>
          </div>
        </div>



        <div class="section">
          <div class="section-nav1">
            <van-row height="300" type="flex">
              <van-col span="9" class="red lefttop-radius hotel">酒店</van-col>
              <van-col span="5" class="red">民俗·客栈</van-col>
              <van-col span="10" class="yellow righttop-radius air">机票/火车票+酒店</van-col>
            </van-row>
            <van-row height="300" type="flex">
              <van-col span="9" class="blue air-ticket">机票</van-col>
              <van-col span="5" class="blue">火车票</van-col>
              <van-col span="5" class="blue">汽车·船票</van-col>
              <van-col span="5" class="blue">打车·租车</van-col>
            </van-row>
            <van-row height="300" type="flex">
              <van-col span="9" class="green leftbott-radius trip">旅游</van-col>
              <van-col span="5" class="green">高铁票</van-col>
              <van-col span="5" class="green">邮轮游</van-col>
              <van-col span="5" class="green rightbott-radius">定制游</van-col>
            </van-row>

          </div>

          <div class="section-nav2">
            <a href="javascript:;" v-for="(item,index) in secnav2" :key="index" class="itembox">
              <img :src="item.src" alt="">
              <span>{{item.title}}</span>
            </a>
          </div>

          <Contbox class="cont-1">
            <template v-slot:cont-temp-slot>
              <div class="cont-box">
                <div class="entrance-ticket ticketboth">
                  <h3>门票特惠</h3>
                  <van-swipe :autoplay="3000" indicator-color="white" >
                    <van-swipe-item v-for="n in 4" :key="n">
                      <a href="javascript:;">
                        <img src="../../../static/images/index/700d0s000000htvwo16C4_375_160_345.jpg" alt="">
                        <div class="msg-box">
                          <h4>杭州宋城景区</h4>
                          <p>￥99起 <span class="icon">省￥221</span></p>
                        </div>
                      </a>
                    </van-swipe-item>
                  </van-swipe>
                </div>
                <div class="air-ticket ticketboth">
                  <h3>特价机票<i class="fa fa-angle-right"></i></h3>
                  <div class="ticket-list">
                    <a href="" v-for="(item,index) in ticketlist" :key="index">
                      <h4>{{item.from}}<i class="fa fa-long-arrow-right"></i>{{item.to}}</h4>
                      <p><span class="icon">{{item.discount}}折</span> <span class="msg">￥{{item.price}}起</span></p>
                    </a>
                  </div>
                </div>

                <div class="other-ticket">
                  <div v-for="(item,index) in otherticket" :key="index" class="item-box" :style="('background-image:url('+item.img+')')">
                    <h5 class="title-h">{{item.title}}</h5>
                    <p>
                      {{item.msg}}
                      <span class="red">{{item.red}}</span>
                    </p>
                  </div>

                </div>
              </div>
            </template>
          </Contbox>
        </div>


        <div class="hot-nav">
          <h2>当季热门</h2>
          <van-sticky class="header-nav" >
            <router-link exact :to="{name:item.name}" v-for="(item,index) in hotnav" class="router-nav" :key="index">
              <img :src="item.img" alt="">
              <span>{{item.title}}</span>
            </router-link>
          </van-sticky>
        </div>

        <div class="hot-cont">
          <router-view></router-view>
        </div>
        <footer class="footer">
          <h3>
            没有更多内容了~
          </h3>
        </footer>
      </mt-loadmore>
    </div>
</template>

<script>
  import Contbox from "@/components/Index/Indexcomp/Contbox"

  import { Swipe, SwipsItem ,PullRefresh} from 'vant';
    export default {
        name: "Index",
        data(){
            return{
              swipernum:4,
              current:0,
              searchswiper:[
                {title:'解放双手，轻松溜娃'},
                {title:'杭州攻略，精选'},
                {title:'杭州攻略，精选游记·酒店11111'},
                {title:'携程租车--抽免券---0元起'},
              ],
              headernav:[
                {'src':'"../../../static/images/icon/index/home-fivemain-sprite2x@v7_1.png','title':'攻略·景点'},
                {'src':'"../../../static/images/icon/index/home-fivemain-sprite2x@v7_2.png','title':'门票·玩乐'},
                {'src':'"../../../static/images/icon/index/home-fivemain-sprite2x@v7_3.png','title':'美食林'},
                {'src':'"../../../static/images/icon/index/home-fivemain-sprite2x@v7_4.png','title':'周边游'},
                {'src':'"../../../static/images/icon/index/home-fivemain-sprite2x@v7_5.png','title':'立即叫车'},
              ],
              secnav2:[
                {"src":'../../../static/images/icon/index/un_ico_subnav_01.png',"title":"自由行"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_02.png',"title":"WiFi电话卡"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_03.png',"title":"保险·签证"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_04.png',"title":"换外币·购"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_05.png',"title":"当地向导"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_06.png',"title":"特价机票"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_07.png',"title":"礼品卡"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_08.png',"title":"申卡·借钱"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_09.png',"title":"加盟合作"},
                {"src":'../../../static/images/icon/index/un_ico_subnav_10.png',"title":"更多"},
              ],
              isLoading:false,
              /*下拉加载*/
              topStatus:'',
              allLoaded:false,
              cityname:'杭州',
              scrollbl:false,
              ticketlist:[
                {
                  "from":"北京","to":"上海","discount":"1.7","price":"400"
                },
                {
                  "from":"北京","to":"广州","discount":"2.5","price":"346"
                }
              ],//机票数据
              otherticket:[
                {"title":"特价酒店","red":"6折起","msg":"","img":"../../../static/images/icon/pic-tmh-03.png"},
                {"title":"特价旅游","red":"低价","msg":"精选","img":"../../../static/images/icon/grid-nav-items-minsu@v7.15.png"},
                {"title":"正好暑假","red":"200","msg":"景酒减","img":"../../../static/images/icon/pic-tmh-04.png"}
              ],
              hotnav:[
                {"name":"Nav","img":require("../../../static/images/index/hot_nav_01.png"),"title":"精选"},
                {"name":"qingliang","img":require("../../../static/images/index/hot_nav_02.png"),"title":"清凉一夏"},
                {"name":"qingzi","img":require("../../../static/images/index/hot_nav_03.png"),"title":"亲子"},
                {"name":"qingzi","img":require("../../../static/images/index/hot_nav_04.png"),"title":"人气海岛"},
              ]
            }
        },
        methods:{
            onChange(index){
              this.current=index
            },
            vanScroll(scrollTop,isFixed){//没啥用
                  console.log(scrollTop,isFixed)
            },
            onRefresh() {
              setTimeout(() => {
                this.$toast('已为您更新'+Math.floor(Math.random()*20)+'条新数据 ');
                this.isLoading = false;
              }, 500);
            },
          /*下拉加载*/
          loadTop() {
            let $this=this;
          },
          handleTopChange(status){
            let $this=this;
            // console.log("status状态",status);
              this.topStatus=status;
            if(this.topStatus==='loading'){
              // console.log("this.$router",this.$router)

              $('body').animate({
                opacity:0,
              },200)
              setTimeout(function () {
                $('body').animate({
                  opacity:1,
                },500);
                $this.$router.push('/second')
              },200)

            }

          },
          loadBottom(){

          },

        },

        watch:{
          $route(to,from){
              console.log("to",to)
              console.log("from",from)
            }
        },
        created(){
            let $this=this;
            if(this.$route.query.id){ //获取城市
              this.cityname=this.$route.query.id
            }

            //监听滚动条
            window.addEventListener('scroll',function () {
              let wScrollTop= document.documentElement.scrollTop || document.body.scrollTop;
              if (wScrollTop > 200) {
                $this.scrollbl=true;
              }else{
                $this.scrollbl=false;
              }
            })
        },
      components:{
          Contbox
      }



    }
</script>

<style lang="less">
  @import '~@/assets/less/base.less';
#index{
  .stick-color{
    .van-sticky--fixed{
      background: #fff;
      box-shadow: #cccccc 1px 1px 10px;
      .search-a{
        background: #eeeeee !important;
      }
      a{
        color: #858585 !important;
      }
      .msg-a{
        background-image: url("../../../static/images/icon/index/ico-21_20.png") !important;
      }
    }
  } /*顶部搜索框监听样式*/

  background: #f8f8f8;
  .header{
    box-sizing: border-box;
    height: 620/@r;
    width: 100%;
    position: relative;

    .swiper-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 558/@r;
      .van-swipe{
        width: 100%;
        height: 558/@r;
        div.van-swipe-item{
          width: 100%;
          img{
            width: 100%;
            height: 558/@r;
          }
        }
        div.van-swipe__indicators{
          border: 1px solid #00cc66;
          left:90% !important;
          i.van-swipe__indicator{
            width: 20/@r;
            height: 20/@r;
            &.van-swipe__indicator--active{
              width: 40/@r;
              border-radius: 200/@r;
            }
          }
        }
      }
    }

    .sticky-box{
      border: 1px solid transparent;
      z-index: 999;
      position: relative;
      padding: 36/@r 0;
      .van-sticky{
        box-sizing: content-box;
        width: 100%;
        height: 90/@r;
        padding: 36/@r 0;
        display: flex;
        justify-content: space-evenly;
        .city-a{
          width: 186/@r;
          height: 90/@r;
          font-size: 40/@r;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          .fa{
            padding: 0 16/@r;
            font-size: 60/@r;

          }
        }
        .search-a{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 748/@r;
          height: 90/@r;
          border-radius: 200/@r;
          background: #fff;


          .search-link{
            display: flex;
            justify-content: flex-end;
            width:616/@r;
            height: 90/@r;
            background: url("../../../static/images/icon/index/ico-21_25.png") no-repeat 32/@r center;
            background-size: 52/@r;
            .van-swipe{
              height: 90/@r;
              width: 520/@r;
              line-height: 90/@r;
              font-size: 40/@r;
              .van-swipe-item{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
          .mic{
            width: 132/@r;
            height:90/@r;
            background:url("../../../static/images/icon/index/ico-21_30.png") no-repeat center center;
            background-size: 60/@r;
          }

        }
        .msg-a{
          width: 144/@r;
          height: 90/@r;
          background: url("../../../static/images/icon/index/ico-21_03.png") no-repeat center center;
          background-size: 58/@r;
        }
      }
    }

    .header-nav{
      position: absolute;
      bottom: -20/@r;
      left: 32/@r;
      width: 1014/@r;
      height: 204/@r;
      display: flex;
      justify-content: space-evenly;
      background: #fff;
      border-radius: 20/@r;
      box-shadow: 1px 1px 10/@r #b7b7b7;
      a{
        font-size: 34/@r;
        color: #585858;
        width: 204/@r;
        height: 204/@r;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        img{
          width:84/@r;
          height: 90/@r;
        }
        span{
          width: 204/@r !important;
          height: 60/@r;
          line-height:60/@r;
          text-align: center;
        }
      }
    }
  }

  .section{
    padding: 80/@r 24/@r 50/@r;
    /*酒店机票旅游导航*/
    .section-nav1{
      .van-col{
        box-sizing: border-box;
        /*border: 2px solid #00F7DE;*/
        margin-right: 2/@r;
        height: 186/@r;
        line-height: 186/@r;
        font-size: 40/@r;
        color: #fff;
        text-align: center;
        &:nth-child(1){
          box-sizing: border-box;
          padding-right: 160/@r;
        }
        &.lefttop-radius{
          border-radius:20/@r 0 0 0;
        }
        &.righttop-radius{
          border-radius:0 20/@r 0 0;
        }
        &.leftbott-radius{
          border-radius:0 0 0 20/@r;
        }
        &.rightbott-radius{
          border-radius:0 0 20/@r 0;
        }
        &.red{
          background-color: #fb7c53;
          &.hotel{
            background: url("../../../static/images/icon/grid-nav-items-hotel@v7.15.png") no-repeat 80% bottom #fb7c53;
            background-size: 50%;
          }
        }
        &.yellow{
          background-color: #ffc24d;
          &.air{
            background: url("../../../static/images/icon/grid-nav-items-jhj@v7.15.png") no-repeat 80% bottom  #ffc24d;
            background-size: 50%;
          }
        }
        &.blue{
          background-color: #4f9dee;
          &.air-ticket{
            background: url("../../../static/images/icon/grid-nav-items-flight@v7.15.png") no-repeat 80% bottom #4f9dee;
            background-size: 50%;
          }
        }
        &.green{
          background-color: #37c3a6;
          &.trip{
            background: url("../../../static/images/icon/grid-nav-items-travel@v7.15.png") no-repeat 80% bottom #37c3a6;
            background-size: 50%;
          }
        }
      }
    }
    .section-nav2{
      margin: 20/@r 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .itembox{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 176/@r;
        height: 158/@r;
        img{
          width: 94/@r;
          height: 94/@r;
        }
        span{
          width: 176/@r;
          text-align: center;
          color: #0a0a0a;
          font-size: 32/@r;
        }
      }
    }

    .cont-1{
      width:1020/@r;
      .cont-box{
        display: flex;
        flex-wrap: wrap;
        .ticketboth{
          width:510/@r;
          height: 490/@r;
          padding: 26/@r;
          h3{
            width: 450/@r;
            margin:0;
            font-size: 38/@r;
            color: #fff;
            height: 40/@r;
            line-height: 40/@r;
            margin-bottom: 22/@r;
          }
        } /*超值特惠通用样式*/
        .entrance-ticket{
          background: #ff9a6a;
          .van-swipe{
            .van-swipe__indicators{
              top: 10/@r;
              left: auto;
              right: 0 !important;
              .van-swipe__indicator{
                width: 18/@r;
                height: 18/@r;
                background: #cccccc;
              }/*指示器默认样式*/
              .van-swipe__indicator--active{
                width: 38/@r;
                background: #858585 !important;
                border-radius: 100/@r;
              }/*指示器激活样式*/
            }/*圆点样式*/
            .van-swipe__track{
              height: 356/@r;
            }
            .van-swipe-item{
              a{
                width: 450/@r;
                background: #fff;
                img{
                  box-sizing: border-box;

                  width: 450/@r;
                }
                .msg-box{
                  width: 450/@r;
                  height: 170/@r;
                  background: #fff;
                  padding: 12/@r;
                  h4{
                    margin: 0;
                    font-size: 38/@r;
                    color: #3a3a3a;
                    margin-bottom: 52/@r;
                  }
                  p{
                    color: #ff7701;
                    .icon{
                      margin-left: 20/@r;
                      display: inline-block;
                      background: #ff7701;
                      width: 120/@r;
                      height: 44/@r;
                      line-height: 44/@r;
                      border-radius: 200/@r;
                      color: #fff;
                      text-align: center;
                      font-size: 20/@r;
                    }
                  }
                }
              }

            }
          }/*轮播图*/
        }/*门票*/
        .air-ticket{
          background: #1dc7c7;
          h3{
            .fa-angle-right{
              display: inline-block;
              width: 50/@r;
              height: 50/@r;
              line-height: 50/@r;
              text-align: center;
              border-radius:50/@r;
              color: #2bd2c8;
              background: #fff;
              margin-left: 14/@r;
            }/*圆箭头*/
          }
          .ticket-list{
            a{
              width: 450/@r;
              height: 160/@r;
              margin: 24/@r 0;
              border-radius:20/@r;
              background: #fff;
              padding: 20/@r 30/@r;
              &:last-child{
                margin-top: 30/@r;
              }
              h4{
                font-size: 34/@r;
                height: 64/@r;
                line-height: 64/@r;
                margin: 0;
                color: #000;
                .fa{
                  margin:0 18/@r;
                  font-size: 34/@r;
                }
              }
              p{
                margin-top: 10/@r;
                display: flex;
                justify-content: space-between;
                span.icon{
                  width: 98/@r;
                  height: 46/@r;
                  line-height: 46/@r;
                  text-align: center;
                  border-radius: 100/@r;
                  background: #ff7803;
                  color: #fff;
                  font-size: 24/@r;
                }
                span.msg{
                  font-size: 32/@r;
                  color: #ff7803;
                }
              }
            }
          }
        }/*机票*/
        .other-ticket{
          width:1020/@r;
          height: 230/@r;
          display: flex;
          .item-box{
            width: 340/@r;
            height:230/@r;
            padding: 30/@r;
            border-right: 2px solid #ccc;
            background-repeat: no-repeat;
            background-size: 150/@r 150/@r;
            background-position: right bottom;
            .title-h{
              font-size: 38/@r;
              font-weight: bold;
            }
            p{
              font-size: 32/@r;
              color: #ababab;
              .red{
                color:#ed2818;
              }
            }
          }
        }/*其他票*/
      }
    }

  }
  .hot-nav{
    width: 100%;
    background: #fff;
    h2{
      font-size: 46/@r;
      padding:23/@r 54/@r;
      font-weight: 600;
    }
    .header-nav{
      width: 100%;
      height:174/@r;
      .van-sticky{
        padding: 10/@r 0;
        top: 165/@r;
        width: 100%;
        height:174/@r;
        background: #fff;
        display: flex;
        justify-content: space-evenly;
        .isShow{
          color: #0a0a0a;
          font-weight: bold;
        }
      }
      .router-nav{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 200/@r;
        height: 170/@r;
        img{
          width: 92/@r;
          height: 92/@r;
        }
        span{
          font-size: 42/@r;
          width:200/@r;
          height: 80/@r;
          line-height: 80/@r;
        }
      }
    }
  }
  .hot-cont{
    ul{
      li{
        display: inline-block;
        /*border:1px solid #000000;*/
        margin-top: 24/@r;
        margin-left: 24/@r;
        width: 500/@r;
        &:last-child{
          margin-right: 24/@r;
        }
        p{
          font-size: 40/@r;
          padding: 20/@r;
        }
        img{
          width: 500/@r;
        }
      }
    }

  }

  .footer{
      h3{
        margin:50/@r 0 0;
        font-size: 60/@r;
        text-align: center;
      }
  }
  /*顶部背景图*/
.loadmore-bg{
  position: absolute;
  top: 0;
  width: 100%;
  height: 470/@r;
  background: url("../../../static/images/index/9117dd4ecd7120030be341bd7c18d7de.jpeg") no-repeat center center;
  background-size: 100% 470/@r;
  font-size: 28/@r;
  color: #fff;
  text-align: center;
  h3{
    text-align: center;
    margin: 50/@r 0 30/@r;
  }
  i{
    display: block;
    font-size: 70/@r;
    margin: 0 auto;
  }
}

}

  /*下拉刷新*/
.mint-loadmore-top{
  position: absolute;
  width: 100%;
  height: auto;
  &>div{
    position: relative;
    width: 100%;
    &:nth-child(1){
      position: relative;
      top: -300px;
    }
  }
}
   .notloading{
     background: #ac2cf7;
   }
  .isloading{
    background: #00ff40;
  }
</style>
