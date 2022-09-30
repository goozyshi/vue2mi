<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import storage from '@/storage'
export default {
  data () {
    return {}
  },
  mounted () {
    storage.setItem('user', {name: 1, qq: 2})
    storage.setItem('abc', {a: 1}, 'user')
    storage.clear('abc', 'user')
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
