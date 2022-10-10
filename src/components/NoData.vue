<template>
  <div class="no-data">
    <el-empty description="暂无数据">
      <slot name="default"></slot>
    </el-empty>
  </div>
</template>
<script>
import { Empty } from 'element-ui'
export default{
  name:'no-data',
  components: {
    [Empty.name]:Empty
  }
}
</script>
<style lang="scss">
  .no-data {
    text-align:center;
    font-size:20px;
    color:#999999;
    margin:50px 0;
  }
</style>