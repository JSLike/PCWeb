<template>
    <div class="new-box">
        <div class="sec-box">
          <ul>
            <li v-for="(item ,index) in msg" :key="index">
              <div class="list-box">
                <img :src="item.src" alt="" class="bg-img">   <!--../../assets/images/bg1.jpg-->
                <div class="list-cont">
                  <h4>{{item.htitle}}</h4>
                  <div class="list-msg clear">
                    <p class="user-box">
                      <img src="../../assets/images/tx.jpg" alt="">
                      <span>{{item.username}}</span>
                      {{item.usertime}}
                    </p>

                    <p class="icon-box">
                      <img src="../../assets/images/zan.png" alt="" class="zan">
                      <span>{{item.zan}}</span>
                      <img src="../../assets/images/reply.png" alt="" class="reply">
                      <span>{{item.reply}}</span>
                    </p>
                  </div>
                </div>
              </div>
              <a href="javascript:;" class="more-msg">
                关于格林威特空气净化器还有 4 篇报告，点击查看
              </a>

            </li>
          </ul>
          <a href="javascript:;" class="click-more">点击加载更多</a>
        </div>


        <div class="aside">
          <div class="tiyan">
            <h3>极果体验师</h3>
            <img src="../../assets/images/tiyanImg.jpg" alt="">
          </div>

          <dl>
            <dt>福利</dt>
            <dd>第一时间体验新品，大众试用优先通过，还有定向邀请试用，新品玩到手软！</dd>
          </dl>
          <dl>
            <dt>要求</dt>
            <dd>是某个领域的大神级玩家，在社交网络或圈子里有大影响力，善写作会拍摄。</dd>
          </dl>
          <dl>
            <dt>申请</dt>
            <dd>
              <p>1. 关注极果公众号：jguojguo </p>
              <p>（或扫描下方二维码）</p>
              <p>2. 在公众号内回复：体验师</p>
            </dd>
          </dl>

          <div class="tiyan">
            <h3>关注我们</h3>
            <img src="../../assets/images/myCode.jpg" alt="">
          </div>

        </div>
    </div>
</template>

<script>
  import jsondata from '../../../static/json/tsconfig.json'
  //
  // let a=JSON.stringify(jsondata)
  // console.log(a)
  // .renew
  export default {
        name: "Renew",
        data(){
          return{
            msg:jsondata.renew

          }
        },



    }
</script>

<style scoped>

</style>
