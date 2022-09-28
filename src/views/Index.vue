<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 轮播图左侧菜单 -->
        <div class="nav-menu">
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript: void(0)">手机 电话卡</a>
              <div class="children">
                <ul v-for="item in itemList" :key="item.id">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub ? '/product/'+ sub.id :'' ">
                      <img :src="sub ? sub.img : defaultProImg " alt="">
                      {{sub?.name || '默认手机' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">电视</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">耳机 音箱</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">家电</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">健康 儿童</a>
            </li>
            <li class="menu-item">
              <a href="javascript: void(0)">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/product/'+ item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a v-for="(item, index) in adsList" :key="index" :href="'/product/' + item.id">
          <img :src="item.img" alt="">
        </a>
      </div>
      <!-- banner -->
      <div class="banner">
        <a href="/product/30">
          <img :src="banner1" alt="">
        </a>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue';
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
// 引入轮播图图片
import slide1 from '@/assets/imgs/slider/slide-1.jpg'
import slide2 from '@/assets/imgs/slider/slide-2.jpg'
import slide3 from '@/assets/imgs/slider/slide-3.jpg'
import slide4 from '@/assets/imgs/slider/slide-4.jpg'
// 引入商品图片
import item1 from '@/assets/imgs/item-box-1.png'
import item2 from '@/assets/imgs/item-box-2.png'
import item3 from '@/assets/imgs/item-box-3.jpg'
import item4 from '@/assets/imgs/item-box-4.jpg'
// 引入广告图
import ad1 from '@/assets/imgs/ads/ads-1.png'
import ad2 from '@/assets/imgs/ads/ads-2.jpg'
import ad3 from '@/assets/imgs/ads/ads-3.png'
import ad4 from '@/assets/imgs/ads/ads-4.jpg'
// 引入banner 图
import banner1 from '@/assets/imgs/banner-1.png'

export default {
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  name: 'index-view',
  data () {
    return {
      defaultProImg: item3, // 默认图片为红米 K20 Pro
      banner1,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList:[
        { id:'42', img:slide1 },
        { id:'45', img:slide2 },
        { id:'46', img:slide3 },
        { id:'47', img:slide4 }
      ],
      itemList:[
        [
          {
            id: 30,
            img: item1,
            name:'小米CC9',
          }, {
            id: 31,
            img: item2,
            name: '小米8青春版',
          }, {
            id: 32,
            img: item3,
            name: 'Redmi K20 Pro',
          },{
            id: 33,
            img: item4,
            name: '移动4G专区',
          }
        ],
        [0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]
      ],
      adsList:[
        { id:33, img: ad1 },
        { id:48, img: ad2 },
        { id:45, img: ad3 },
        { id:47, img: ad4 }
      ],
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/config.scss';
  .index {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width:264px;
        height: 420px;
        z-index: 9;
        .menu-wrapper {
          color: #fff;
          .menu-item {
            position: relative;
            height: 42px;
            line-height: 42px;
            padding-left: 10px;
            background: rgba(105,101,101,.6);
            a {
              font-size: 16px;
              color: #fff;
              text-decoration: none;
              padding-left: 30px;
              &:after {
                position: absolute;
                top: 12px;
                right: 30px;
                content: ' ';
                @include bgImg(10px, 15px, '@/assets/imgs/icon-arrow.png');
              }
            }
            &:hover {
              background-color: $primary-color;
              .children {
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 420px;
              background-color: #fff;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid #d7d7d7;
              ul {
                display: flex;
                justify-content: space-between;
                height: 70px;
                li {
                  height: 70px;
                  line-height: 70px;
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color:#333;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 420px;
        .swiper-button-prev{
          left:274px;
        }
        img{
          width:100%;
          height:100%;
          background-size: contain;
        }
      }
    }
    .ads-box {
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom:50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>