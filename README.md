# vue2mi

vue2仿小米商城，实现包括登录、购物车功能、支付功能

## 项目预览

没有布置服务器，截了几张图

### 登录页

![](https://github.com/goozyshi/vue2mi/blob/master/preview/login.png?raw=true)

### 首页

![](https://github.com/goozyshi/vue2mi/blob/master/preview/index.png?raw=true)

### 购物车

![](https://github.com/goozyshi/vue2mi/blob/master/preview/cartwithgoods.png?raw=true)

### 订单

![](https://github.com/goozyshi/vue2mi/blob/master/preview/order.png?raw=true)

### 支付宝支付

![](https://github.com/goozyshi/vue2mi/blob/master/preview/aliPay.png?raw=true)

### 微信支付

![](https://github.com/goozyshi/vue2mi/blob/master/preview/wechatPay.png?raw=true)

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

## 部署
### 本地部署

安装 server
```bash
npm i -g server

server -s dist
```

### 线上
自动化:
deploy.sh
```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://goozyshi.github.io
# git push -f git@github.com:goozyshi/goozyshi.github.io.git main

# if you are deploying to https://goozyshi.github.io/vue2mi
git push -f git@github.com:goozyshi/vue2mi.git main:gh-pages

cd -
```