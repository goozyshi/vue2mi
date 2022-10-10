<template>
  <div class="nav-bar" :class="{'is_fixed': isSticky }">
    <div class="container">
      <div class="pro-title">{{ title }} </div>
      <div class="pro-param">
        <a href="javascript: void(0);">概述</a><span>|</span>
        <a href="javascript: void(0);">参数</a><span>|</span>
        <a href="javascript: void(0);">用户评价</a>
        <slot name="buyArea"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-info',
    props: {
      title: String
    },
    data () {
      return {
        isSticky: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.initHeight)
    },
    methods:{
      initHeight () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isSticky = scrollTop > 152 ? true:false;
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.initHeight, false)
    }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    z-index: 10;
    &.is_fixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px #ccc;
    }
    .container {
      @include flex();
      .pro-title {
        font-size: 18px;
        color: #333;
        font-weight: bold;
      }
      .pro-param {
        font-size: 14px;
        span {
          margin: 0 10px;
        }
        a {
          color: #666;
          margin: 0 8px;
        }
      }
    }
  }
</style>