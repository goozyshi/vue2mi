<template>
  <div class="dialog" v-if="showModal">
    <div class="mask"></div>
    <div class="dialog-box">
      <div class="dialog-header">
        <span>{{title}}</span>
        <a href="javascript: void(0);" class="icon-close" @click="$emit('cancel')"></a>
      </div>
      <div class="dialog-body">
        <slot name="body"></slot>
      </div>
      <div class="dialog-footer">
        <a href="javascript: void(0);" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
        <a href="javascript: void(0);" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
        <div class="btn-group" v-if="btnType==3">
          <a href="javascript: void(0);" class="btn" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript: void(0);" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'dialog-component',
    props:{
      // 弹框类型：小small、中middle、大large、表单form
      modalType:{
        type:String,
        default:'form'
      },
      // 弹框标题
      title:String,
      // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cancelText:{
        type:String,
        default:'取消'
      },
      showModal:Boolean
    }
  }
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/dialog.scss';
</style>