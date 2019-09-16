<template>
  <div id="photo">
    <h1>
      404
    </h1>
    <h3>
      哎呀，页面走丢了
    </h3>
    <h5>过几天再试试吧</h5>
  </div>
</template>
<script>
  export default {
    name: "Photo",

  }
</script>

<style scoped lang="less">
  @import '~@/assets/less/base.less';
#photo{
  h1{
    margin: 100/@r;
    font-size: 300/@r;
    text-align: center;
  }
  h3{
    font-size: 100/@r;
    text-align: center;
  }
  h5{
    font-size: 50/@r;
    text-align: center;
  }
}

</style>
