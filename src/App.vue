<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css"
export default {
  data () {
    return {}
  },
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUser', res)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
