<template>
    <div id="index-city">
      <div class="header">
        <!--搜索框-->
        <div class="search-box">
          <a href="#" class="glyphicon glyphicon-menu-left" @click="routerback"></a>
          <form action="/">
            <van-search
              placeholder="全球城市（如北京/beijing/bj）"
              @click="maskdshow=true"
            ></van-search>
          </form>
        </div>
        <!--遮罩层-->
        <div
          class="mask-box"
          v-show="maskdshow"
          @click="maskdshow = false"
        >
          <h1>aaaaaaaaaaaaaa</h1>
        </div>
        <van-tabs v-model="activea">
          <van-tab title="境内·港澳台">
          </van-tab>

          <van-tab title="境外"></van-tab>
        </van-tabs>
      </div>

      <!--标签页-->
      <div class="section" >
        <div :class="{'index-bar-margin-bottom':hasIndexBarMarginBottom}" @touchmove="moveIndexBar">
          <van-index-bar :index-list="indexList" sticky highlight-color="blue" @select="selectIndexBar">
            <div v-for="(item,index) in listdata" :key="index" :class="((item.title==='历史'||item.title==='热门城市')? 'capsule':'a-z')">
              <van-sticky>
                <van-index-anchor :index="item.title"/>
              </van-sticky>
              <van-cell :title="it.region" v-for="(it,ix) in item.citylist" :key="ix" @click="toIndex=it.region"/>
            </div>
          </van-index-bar>
        </div>
      </div>



    </div>
</template>

<script>
    export default {
        name: "City",
      data(){
          return{
            activea:1,
            maskdshow:false,
            indexList:['历史','热门','A','B','C','D','E','F','G','H','J','K','L'],
            listdata:'',
            hasIndexBarMarginBottom:'',
            toIndex:'',
          }
      },
      methods:{
        routerback(){
          this.$router.back()
        },
        /*索引点不到最后一栏的问题*/
        selectIndexBar(){
          this.hasIndexBarMarginBottom=true
        },
        moveIndexBar(){
          this.hasIndexBarMarginBottom=false
        },

      },
      created(){
          let thisVue=this;
          this.$axios.get('../../../static/JSON/City/citylist.json')
            .then(function (response) {
              console.log(response.data.list);
              thisVue.listdata=response.data.list
            })
            .catch(function (error) {
              console.log(error)
            })
      },
      watch:{
        toIndex(){
          console.log(this.toIndex)
         this.$router.push({
           path:`/`,
           query: {
             id: this.toIndex
           }
         })
        }
      }

    }
</script>

<style lang="less">
  @import '~@/assets/less/base.less';

  #index-city{
    font-size: 100px;
    .header{
      width:100%;
      position: fixed;
      top: 0/@r;
      z-index: 999;
      background: #fff;
      /*遮罩层*/
      .mask-box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);
        z-index: 1;
      }
      /*搜索框*/
      .search-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .glyphicon-menu-left{
          display: block;
          width: 160/@r;
          height: 140/@r;
          font-size: 42/@r;
          line-height: 140/@r;
          text-align: center;
          color:#3e3e3e ;
        }
        .van-search{
          width: 880/@r;
          height: 100/@r;
          background: #f4f4f4;
          border-radius: 200/@r;
          padding: 0;
          .van-search__content{
            width: 880/@r;
            height: 100/@r;
            line-height: 100/@r;
            border-radius: 200/@r;
            .van-cell--borderless{
              display: flex;
              align-items: center;
            }
            i{
              width: 100/@r;
              height: 100/@r;
              line-height: 100/@r;
              text-align: center;
              font-size: 50/@r;
            }
            input[type='search']{
              width: 880/@r;
              height: 100/@r;
              line-height: 100/@r;
              font-size:40/@r;
            }
          }
        }
      }
      /*选项卡下划线*/
      .van-tabs__line{
        background-color:#0086f7 ;
        width: 246/@r;
      }
    }

    .section{
      margin: 250/@r 0;
      .van-sticky--fixed{
      }
      .van-index-anchor{
        top: 224/@r;
        font-size: 30px!important;
        background: #f4f4f4;
        padding: 14/@r 34/@r;
        color: #0a0a0a !important;
      }
      /*整个导航栏*/
      .van-index-bar{

      }
      .van-cell{
        span{
          font-size: 46/@r;
          font-weight: 600;
        }
      }
      /*标题*/
      .van-cell__title{
        font-size: 50px;
        height: 200px;
      }
      /*右侧导航栏*/
      .van-index-bar__sidebar{
        top:60%;
        right:22/@r;
        padding: 0;
        .van-index-bar__index{  /*span*/
          display: block;
          width: 60px !important;
          height: 30px;
          font-size: 30px;
          text-align: center;
          padding: 0;
          margin-top: 10/@r;
        }
      }
    }
   /*动态添加类*/
    .capsule{
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      padding-bottom: 30/@r;
      .van-index-anchor{
        background: #fff;
      }
      .van-sticky{
        width: 1080/@r;
      }
      .van-cell{
        background: #f5f5f5;
        width: 300/@r !important;
        height: 98/@r;
        margin-left: 34/@r;
        text-align: center;
        margin-top: 30/@r;
        .van-cell__title{
          height: 98/@r;
        }
        span{
          font-size: 40/@r;
        }
        border-radius:200/@r
      }
      .van-cell__title{

      }
    }
    .a-z{
      overflow: hidden;
      .van-cell{
        box-sizing: border-box;
        width: 100%;
        height: 154/@r;
        line-height: 154/@r;
        border-bottom: 1px solid #cccccc;
        padding: 0;
        margin-left: 38/@r;

        .van-cell__title{
          height: 154/@r;
        }
      }
    }

    .index-bar-margin-bottom{
      margin-bottom:1260px
    }



  }
</style>
