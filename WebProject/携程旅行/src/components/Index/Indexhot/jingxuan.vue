<template>
    <div>
      <Pbcomponent :jingxuandata="jingxuandata"></Pbcomponent>
    </div>
</template>

<script>
  import Pbcomponent from '@/components/Index/Indexhot/Pbcomponent'
    export default {
        name: "jingxuan",
        components:{
            Pbcomponent
        },
        data(){
          return{
            jingxuandata:''
          }
        },
    }
</script>

<style scoped>

</style>
