<template>
  <div>
    <order-header title="订单列表">
      <template slot="tips">
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  name: 'order-view',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>