<template>
  <div>
    <order-header></order-header>
    cart-view
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '@/components/OrderHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  name: 'cart-view',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>