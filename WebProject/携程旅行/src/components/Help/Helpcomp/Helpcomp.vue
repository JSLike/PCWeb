<template>
    <div class="help-comp">
      <h3 class="box-title">{{travel.title}}</h3>
      <div class="cont">
        <a href="javascript:;" v-for="(item,index) in travel.cont" :key="index" class="link-a">
          <dl>
            <dt><img :src="item.src" alt="" class="main-img" v-lazy="item.src"></dt>
            <dd>
              <h4 class="suxbtit">{{item.subtit}}</h4>
              <p class="msg">{{item.msg}}</p>
            </dd>
          </dl>

        </a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Helpcomp",
      data(){
        return{
          travel:""
        }
      },
      props:[
        'datamsg'
      ],
      created(){
        let $this=this;
        // console.log(this.datamsg)
        this.$axios.get(this.datamsg)
          .then(function (res) {
            // console.log(res.data)
          $this.travel=res.data;
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';

.help-comp{
  padding: 0 48/@r;
  /*border: 1px solid #ff3041;*/
  .box-title{
    width: 100%;
    height: 136/@r;
    line-height: 136/@r;
    font-size: 50/@r;
    color: #000;
    border-bottom: 2px solid #cccccc;

  }
  .cont{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a.link-a{
        .main-img{
          width: 442/@r;
          height: 300/@r;

        }
        .subtit{
          color: #000;
          font-size: 40/@r;
          height: 80/@r;
          line-height: 80/@r;
          margin: 0;
        }
        .msg{
          font-size: 34/@r;
          color: #9e9e9e;
        }
    }
  }
}
</style>
