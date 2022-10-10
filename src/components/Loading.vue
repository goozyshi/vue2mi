<template>
  <div class="loading">
    <img :src="loadingSvg" alt="">
  </div>
</template>
<script>
import loadingSvg from '@/assets/imgs/loading-svg/loading-bars.svg'
  export default{
    name:'loading-component',
    data () {
      return {
        loadingSvg
      }
    }
  }
</script>

<style lang="scss">
  .loading{
    height: 80px;
    line-height: 80px;
    text-align: center;
    padding: 30px 0;
    img{
      height: 100%;
    }
  }
</style>