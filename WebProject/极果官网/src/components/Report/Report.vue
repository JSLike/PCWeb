<template>
    <div class="report-page">
      <div class="body-width rep-head">
        <h1>体验报告</h1>
        <ul class="repsub-nav">
          <li><router-link exact :to="{name:'Report'}">最新</router-link></li>
          <li><router-link :to="{name:'Rehot'}">最热</router-link></li>
        </ul>
      </div>

      <div class="section">
        <router-view class="body-width"></router-view>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Report",
    }
</script>

<style scoped>
    .isShow{
      border-bottom: 3px solid #f00;
    }
</style>
