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

## 订单确认

- 根据订单id获取商品
- 获取收货地址【新增/编辑】
- 提交订单，服务器生成订单号
- 进行订单结算 - 微信/支付宝

## 订单支付

- 根据订单号获取相关数据，展示订单的商品信息、收货信息等
- 支付后进行轮询判断当前订单状态（10-未付款 20-已付款、30-已取消之类），成功支付后跳转订单列表
### 支付类型
- 微信支付： 返回支付链接，生成二维码后扫码支付
- 支付宝支付：返回html源码，使用v-html进行渲染，生成支付页面