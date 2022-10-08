# vue2mi

vue2仿小米商城，实现包括登录、购物车功能、支付功能

## 项目启动

```bash
# Project setup
yarn install
# Compiles and hot-reloads for development
yarn serve
# Compiles and minifies for production
yarn build
# Lints and fixes files
yarn lint
```

## 安装

### 依赖

```bash
cnpm install axios vue-lazyload element-ui vue-awesome-swiper vue-axios vue-cookie --save-dev
```

## 封装Storage

包括cookie、sessionStorage、localStorage
```js

```

## 封装 axios

## 轮播图实现

安装vue-awesome-swiper
```
npm i vue-awesome-swiper@3 -S
```

引入
```
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
...
component: {swiper, swiperSlide}
```

## 购物车

### 全选反选 + 调用接口实时计算
### 商品上下限： 下限提示至少选一个， 上限不可超过库存