<template>
  <div class="product">
    <product-info :title="product.name">
      <template slot="buyArea">
        <button class="btn" @click="purchase">购买</button>
      </template>
    </product-info>
    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥<em>{{product.price}}</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <img :src="item.src">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-if="showSlide">
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video :src="video" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProductInfo from "@/components/ProductInfo.vue"
import gallery2 from '@/assets/imgs/product/gallery-2.png'
import gallery3 from '@/assets/imgs/product/gallery-3.png'
import gallery4 from '@/assets/imgs/product/gallery-4.png'
import gallery5 from '@/assets/imgs/product/gallery-5.jpg'
import gallery6 from '@/assets/imgs/product/gallery-6.jpg'
import video from '@/assets/imgs/product/video.mp4'
export default {
  name: 'product-view',
  components: {
    swiper,
    swiperSlide,
    ProductInfo
  },
  data () {
    return {
      video,
      showSlide: false,
      product: {},
      slideList: [
        {src: gallery2},
        {src: gallery3},
        {src: gallery4},
        {src: gallery5},
        {src: gallery6}
      ],
      swiperOption:{
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    }
  },
  mounted () {
    this.getProductInfo()
  },
  methods: {
    purchase () {
      let id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    },
    getProductInfo() {
      let id = this.$route.params.id
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res
      })
    },
    buy() {
      let id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    },
    closeVideo() {
      this.showSlide = 'slideUp'
      setTimeout(() => {
        this.showSlide = ''
      }, 600)
    }
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .product{
    .content{
      .item-bg{
        background:url('@/assets/imgs/product/product-bg-1.png') no-repeat center;
        height:718px;
        text-align:center;
        h2{
          font-size:80px;
          padding-top:55px;
        }
        h3{
          font-size:24px;
          letter-spacing: 10px;
        }
        p{
          margin-top:21px;
          margin-bottom:40px;
          a{
            font-size:16px;
            color:#333333;
          }
          span{
            margin:0 15px;
          }
        }
        .price{
          font-size:30px;
          color:#333333;
          em{
            font-style:normal;
            font-size:38px;
          }
        }
      }
      .item-bg-2{
        background:url('@/assets/imgs/product/product-bg-2.png') no-repeat center;
        height:480px;
        background-size:1226px 397px;
      }
      .item-bg-3{
        background:url('@/assets/imgs/product/product-bg-3.png') no-repeat center;
        height:638px;
        background-size:cover;
      }
      .item-swiper{
        margin: 36px auto 52px;
        .desc{
          font-size:18px;
          color:#333333;
          text-align:center;
        }
        img{
          width:100%;
        }
      }
      .item-video{
        height:1044px;
        background-color:#070708;
        margin-bottom:76px;
        color:#FFFFFF;
        text-align:center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
          background:url('@/assets/imgs/product/gallery-1.png') no-repeat center;
          background-size:cover;
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-box{
          .overlay{
            @include position(fixed);
            background-color:#333333;
            opacity:.4;
            z-index:10;
          }
          @keyframes slideDown{
            from{
              top:-50%;
              opacity:0;
            }
            to{
              top:50%;
              opacity:1;
            }
          }
          @keyframes slideUp{
            from{
              top:50%;
              opacity:1;
            }
            to{
              top:-50%;
              opacity:0;
            }
          }
          .video{
            position:fixed;
            top:-50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:10;
            width:1000px;
            height:536px;
            opacity:1;
            &.slideDown{
              animation:slideDown .6s linear;
              top:50%;
            }
            &.slideUp{
              animation:slideUp .6s linear;
            }
            .icon-close{
              position:absolute;
              top:20px;
              right:20px;
              @include bgImg(20px,20px,'@/assets/imgs/icon-close.png');
              cursor:pointer;
              z-index:11;
            }
            video{
              width:100%;
              height:100%;
              object-fit:cover;
              outline:none;
            }
          }
        }
      }
    }
    button{
      margin-left:10px;
    }
  }
</style>