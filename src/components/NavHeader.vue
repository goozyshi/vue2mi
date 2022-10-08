<template>
  <div class="header">
    <!-- 生态栏 -->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript: void(0)" >小米官网</a>
          <a href="javascript: void(0)" >小米商城</a>
          <a href="javascript: void(0)" >MIUI</a>
          <a href="javascript: void(0)" >loT</a>
          <a href="javascript: void(0)" >云服务</a>
          <a href="javascript: void(0)" >天星数科</a>
          <a href="javascript: void(0)" >有品</a>
          <a href="javascript: void(0)" >小爱开放平台</a>
          <a href="javascript: void(0)" >企业团购</a>
          <a href="javascript: void(0)" >协议规则</a>
          <a href="https://www.mi.com/appdownload" target="_blank" class="app" >
            下载app
            <div class="app-qrcode">
              <img src="https://i1.mifile.cn/f/i/17/appdownload/download.png"/>
              <div>小米商城APP</div>
            </div>
          </a>
        </div>
        <div class="topbar-user">
          <a href="javascript: void(0)" v-if="userName">{{userName}}</a>
          <a href="javascript: void(0)" v-if="!userName">登录</a>
          <a href="javascript: void(0)" v-if="userName">我的订单</a>
          <a href="javascript: void(0)" class="my-cart" @click="gotoCart()"><i class="icon-cart"></i>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <!-- 产品栏 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>Xiaomi手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item) in productList" :key="item.id">
                  <a :href="`/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subTitle"/>
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
         <div class="item-menu">
            <span>Redmi手机</span>
            <div class="children"></div>
          </div>
         <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
         <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
         <div class="item-menu">
            <span>平板</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript: void(0)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {shuffle} from '@/utils/utils'
export default {
  name: 'nav-header',
  data () {
    return {
      productList: []
    }
  },
  computed: {
    ...mapState(['userName', 'cartCount'])
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        let {list} = res
        this.productList = shuffle(list)
      })
    },
    gotoCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/base.scss';
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/config.scss';
  .header {
    .nav-topbar {
      height: 40px;
      line-height: 40px;
      background-color: #333333;
      color: #B0B0B0;
      font-size: 12px;
      .container {
        @include flex();
        background-color: #333333;
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px; /* 官网使用宽17px的｜分隔 */
          text-decoration: none;
          &:hover {
            color: #fff;
          }
        }
        .app {
          position: relative;
          &:hover {
            .app-qrcode {
              height: 145px;
              opacity: 1;
            }
          }
          .app-qrcode {
            position: absolute;
            top: 40px;
            left: 50%;
            width: 124px;
            height: 0;
            margin-left: -55px;
            background-color: #fff;
            box-shadow: 0 1px 5px #aaa;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            z-index: 10;
            opacity: 0;
            text-align: center;
            transition: height .3s;
            img {
              width:90px;
              height: 90px;
              margin-top: 20px;
            }
            div {
              height: 14px;
              line-height: 1;
            }
          }
        }
        .my-cart {
          width: 120px;
          background-color: #424242;
          text-align: center;
          color: $primary-color;
          margin-right: 0;
          .icon-cart {
            @include bgImg(16px, 12px, '@/assets/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 100px;
        @include flex();
        .header-logo {
          display: inline-block;
          height: 56px;
          width: 56px;
          line-height: 100px;
          a {
            display: inline-block;
            height: 110px;
            height: 56px;
            &:before {
              content: ' ';
              @include bgImg(56px, 56px, '@/assets/imgs/logo-mi2.png');
            }

          }
        }
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 142px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-size: 16px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $primary-color;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 100px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top:  1px solid #e5e5e5;
              box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.1);
              z-index: 10;
              transition: all .5s;
              background-color: #fff;
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                  text-decoration: none;
                }
                img {
                  width: auto;
                  height: 110px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  color: #333;
                  margin-top: 19px;
                  margin-bottom: 8px;
                }
                .pro-price {
                  font-weight: bold;
                  color: $primary-color;
                }
                &:before{
                  content:' ';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid #d7d7d7;
                  height:100px;
                  width:1px;
                }
                &:last-child:before{
                  display:none;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input {
              border: none;
              outline: none;
              box-sizing: border-box;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding: 0 14px;
            }
            a {
              @include bgImg(18px, 18px, '@/assets/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>