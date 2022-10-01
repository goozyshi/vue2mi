<template>
  <div class="login-layout">
    <div class="login-slider"></div>
    <div class="login-box">
      <div class="login-header">
        <div class="login-logo">小米账号</div>
        <div class="login-menu">
          <a href="https://static.account.xiaomi.com/html/agreement/user/zh_CN.html">用户协议</a>
          <a href="https://privacy.mi.com/miaccount/zh_CN/">隐私政策</a>
          <a href="https://cn.account.xiaomi.com/helpcenter?_locale=zh_CN">帮助中心</a>
        </div>
      </div>
      <div class="login-container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
      <div class="login-footer">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'login-view',
  data () {
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods: {
    login () {
      let { username,password } = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'Session'});
        // this.$store.dispatch('saveUserName',res.username);
        this.saveUserName(res.username);
        this.$router.push({
          name:'index',
          params:{
            from:'login'
          }
        });
      })
    },
    ...mapActions(['saveUserName']),
    register(){
      this.axios.post('/user/register',{
        username:'admin1',
        password:'admin1',
        email:'admin1@163.com'
      }).then(()=>{
        this.$message.success('注册成功');
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/config.scss';
  .login-layout {
    height: 100vh;
    .login-slider {
      float: left;
      width: 375px;
      height: 100%;
      background: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg") no-repeat center;
      background-size: cover;
    }
    .login-box {
      display: flex;
      flex-direction: column;
      padding-bottom: 40px;
      .login-header {
        float: left;
        height: 80px;
        line-height: 80px;
        padding: 20px;
        .login-logo {
          float: left;
          height: 40px;
          width: 180px;
          font-size: 26px;
          font-weight: 500;
          color: #333;
          line-height: 40px;
          &:before {
            content: '';
            vertical-align: middle;
            line-height: 40px;
            margin-right: 20px;
            @include bgImg(40px, 40px, '@/assets/imgs/logo-mi2.png')
          }
        }
        .login-menu {
          width: 100%;
          text-align: right;
          height: 40px;
          line-height: 40px;
          a {
            color: #444;
            font-size: 12px;
            margin-right: 20px;
            outline: none;
            cursor: pointer;
            text-decoration: none;
            transition: color .3s;
            &:hover {
              color: $primary-color;
            }
          }
        }
      }
      .login-container {
        text-align: center;
        min-height: 80vh;
        .login-form {
          display: inline-block;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
          width: 450px;
          height:  600px;
          border-radius: 4px;
          padding: 40px 45px;
          margin: 0 auto 80px;
          box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
          h3 {
            line-height:23px;
            font-size:24px;
            text-align:center;
            margin: 40px;
            .checked{
              color: $primary-color;
            }
            .sep-line{
              margin:0 32px;
            }
          }
          .input{
            width: 348px;
            height: 50px;
            border: 1px solid #E5E5E5;
            margin: 10px;
            input {
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
              padding: 0 18px;
            }
          }
        .btn{
          width: 100%;
          border-radius: 4px;
          line-height: 50px;
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color:$primary-color;
          }
          .reg {
            color:#999999;
            span {
              margin:0 7px;
            }
          }
        }
      }
      }
      .login-footer {
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        padding-bottom: 20px;
        color: #999;
        font-size: 12px;
        text-align: center;
        padding: 0 20px;
      }
    }
  }
</style>