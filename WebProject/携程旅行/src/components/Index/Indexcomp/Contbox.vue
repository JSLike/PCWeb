<template>
  <div class="cont-temp">
    <h3 class="temp-title">
      <span>超值特惠</span>
      <a href="#">
        更多
        <i class="fa fa-angle-right"></i>
      </a>
    </h3>

    <slot name="cont-temp-slot"></slot>
  </div>
</template>

<script>
    export default {
        name: "Contbox",
    }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';

  .cont-temp {
    background: #fff;
    border-radius: 20/@r;

   .temp-title {
      width: 1020/@r;
      line-height: 134/@r;
      height: 134/@r;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      span {
        width: 286/@r;
        height: 134/@r;
        line-height: 134/@r;
        font-size: 50/@r;
        font-weight: bold;
      }

      a {
        font-size: 34/@r;
        color: #a3a3a3;
        height: 134/@r;
        line-height: 134/@r;
        width: 183/@r;
      }
    }
  }
</style>
