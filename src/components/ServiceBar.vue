<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-setting"></span>满69包邮</li>
        <li><span class="icon-setting"></span>1100余家售后网点</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="scss">
  @import '@/assets/scss/config.scss';
  @import '@/assets/scss/mixin.scss';
  .service {
    padding: 33px 0;
    color: #666;
    font-size: 16px;
    li {
      display: inline-block;
      width: 19.8%;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      height: 25px;
      line-height: 25px;
      cursor: pointer;
      span {
        display: inline-block;
        width: 25px;
        line-height: 25px;
        vertical-align: middle;
        margin-right: 10px  ;
      }
      &:last-child {
        border: none;
      }
      &:hover {
        color: $primary-color;
      }
      .icon-setting {
        @include bgImg(25px, 25px, '@/assets/imgs/icon-setting.png')
      }
      .icon-7day {
        @include bgImg(25px, 25px, '@/assets/imgs/icon-7day.png')
      }
      .icon-15day {
        @include bgImg(25px, 25px, '@/assets/imgs/icon-15day.png')
      }
    }
  }
</style>