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
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/product/'+ item.id"><img :src="item.img"></a>
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
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <!-- banner -->
      <div class="banner">
        <a href="/product/30">
          <img v-lazy="banner1" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/product/35"><img v-lazy="phoneBanner" alt=""></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <p class="title">{{ item.name }}</p>
                  <p class="desc">{{ item.subtitle }}</p>
                  <p class="price" @click="addCartById(item.id)">{{ item.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示" 
      sureText="查看购物车" 
      btnType="1" 
      modalType="middle" 
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal=false"
      >
      <template slot="body">
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue';
import Dialog from '@/components/Dialog.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
import phoneBanner from '@/assets/imgs/mix-alpha.jpg'

import {shuffle} from '@/utils/utils'

export default {
  components: {
    ServiceBar,
    modal: Dialog,
    swiper,
    swiperSlide
  },
  name: 'index-view',
  data () {
    return {
      showModal: false,
      defaultProImg: item3, // 默认图片为红米 K20 Pro
      banner1,
      phoneBanner,
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
      phoneList:[]
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData() {
      this.axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then(res => {
        res.list = shuffle(res.list).slice(6,14);
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
      })
    },
    // 通过id添加购物车
    addCartById (id) {
      this.showModal = true
      this.axios.post('/carts', {
        productId: id,
        selected: true
      }).then(res => {
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      }).catch(()=>{
      });
    },
    // 跳转购物车
    goToCart () {
      this.$router.push('/cart')
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
        &:first-child {
          width: 264px;
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
    .product-box{
      background-color: #fafafa;
      padding:30px 0 50px;
      h2{
        font-size: 16px;
        height:21px;
        line-height:21px;
        color: #333;
        margin-bottom:20px;
      }
      .wrapper{
        display:flex;
        .banner-left{
          margin-right: 16px;
          img{
            width: 234px;
            height: 614px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width:986px;
            margin-bottom:14px;
            &:last-child{
              margin-bottom:0;
            }
            .item{
              width:234px;
              height:300px;
              background-color:#fff;
              text-align:center;
              padding: 20px 0;
              box-sizing: border-box;
              span{
                display:inline-block;
                width:67px;
                height:24px;
                font-size:14px;
                line-height:24px;
                color:#ffff;
              }
              .item-img{
                img{
                  width:100%;
                  height:195px;
                }
              }
              .item-info{
                .title{
                  font-size: 14px;
                  color:#333;
                  line-height: 14px;
                  margin: 0 10px 10px;
                  font-weight: 400;
                }
                .desc {
                  margin: 0 10px 10px;
                  height: 18px;
                  font-size: 12px;
                  color: #b0b0b0;
                }
                .price {
                  margin: 0 10px 14px;
                  text-align: center;
                  color: #ff6700;
                  font-size: 16px;
                  font-weight: 400;
                  cursor:pointer;
                  &:after {
                    @include bgImg(22px, 22px, '@/assets/imgs/icon-cart-hover.png');
                    content: ' ';
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>