<template>
  <div class="footer">
    <div class="container">
      <div class="footer-logo"></div>
      <div class="footer-link">
        <a href="javascript: void(0)">小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 |
北京互联网法院法律服务工作站 | 中国消费者协会 | 北京市消费者协会</a>
        <div class="copyright">
          <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
          <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
          <p>增值电信业务许可证 网络食品经营备案 京食药网食备202010048   食品经营许可证</p>
          <p>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/config.scss';
  @import '@/assets/scss/base.scss';
  .footer {
    height: 112px;
    background-color: #fafafa;
    font-size: 12px;
    padding: 30px 0;
    .container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .footer-logo {
        @include bgImg(56px, 56px, '@/assets/imgs/logo-mi2.png');
        margin-right: 10px
      }
      .footer-link {
        flex: 1;
        height: 109px;
        color: #b0b0b0;
        display: inline-block;
        a {
          color: #757575;
          line-height: 18px;
          &:hover {
            color: $primary-color;
          }
        }
        .copyright {
          margin-top: 10px;
          line-height: 18px;
        }
      }
    }
  }
</style>