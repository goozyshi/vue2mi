"use strict";(self["webpackChunkvue2mi"]=self["webpackChunkvue2mi"]||[]).push([[27],{2871:function(t,s,i){i.d(s,{Z:function(){return l}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-bar",class:{is_fixed:t.isSticky}},[s("div",{staticClass:"container"},[s("div",{staticClass:"pro-title"},[t._v(t._s(t.title)+" ")]),s("div",{staticClass:"pro-param"},[s("a",{attrs:{href:"javascript: void(0);"}},[t._v("概述")]),s("span",[t._v("|")]),s("a",{attrs:{href:"javascript: void(0);"}},[t._v("参数")]),s("span",[t._v("|")]),s("a",{attrs:{href:"javascript: void(0);"}},[t._v("用户评价")]),t._t("buyArea")],2)])])},e=[],r={name:"product-info",props:{title:String},data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",this.initHeight)},methods:{initHeight(){let t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>152}},destroyed(){window.removeEventListener("scroll",this.initHeight,!1)}},c=r,n=i(2349),o=(0,n.Z)(c,a,e,!1,null,null,null),l=o.exports},378:function(t,s,i){i.r(s),i.d(s,{default:function(){return f}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"detail"},[s("product-info",{attrs:{title:t.product.name}}),s("div",{staticClass:"wrapper"},[s("div",{staticClass:"container clearfix"},[s("div",{staticClass:"swiper"},[s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.slideList,(function(t,i){return s("swiper-slide",{key:i},[s("img",{attrs:{src:t.src}})])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),s("div",{staticClass:"content"},[s("h2",{staticClass:"item-title"},[t._v(t._s(t.product.name))]),t._m(0),s("div",{staticClass:"delivery"},[t._v("小米自营")]),s("div",{staticClass:"item-price"},[t._v(t._s(t.product.price)+"元"),s("span",{staticClass:"del"},[t._v("1999元")])]),s("div",{staticClass:"line"}),t._m(1),s("div",{staticClass:"item-version clearfix"},[s("h2",[t._v("选择版本")]),s("div",{staticClass:"phone fl",class:{checked:1==t.version},on:{click:function(s){t.version=1}}},[t._v("6GB+64GB 全网通")]),s("div",{staticClass:"phone fr",class:{checked:2==t.version},on:{click:function(s){t.version=2}}},[t._v("4GB+64GB 移动4G")])]),t._m(2),s("div",{staticClass:"item-total"},[s("div",{staticClass:"phone-info clearfix"},[s("div",{staticClass:"fl"},[t._v(t._s(t.product.name)+" "+t._s(1==t.version?"6GB+64GB 全网通":"4GB+64GB 移动4G")+" 深灰色")]),s("div",{staticClass:"fr"},[t._v(t._s(t.product.price)+"元")])]),s("div",{staticClass:"phone-total"},[t._v("总计："+t._s(t.product.price)+"元")])]),s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn btn-huge fl",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("加入购物车")])])])])]),t._m(3),s("service-bar")],1)},e=[function(){var t=this,s=t._self._c;return s("p",{staticClass:"item-info"},[t._v("相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红"),s("br"),t._v("外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item-addr"},[s("i",{staticClass:"icon-loc"}),s("div",{staticClass:"addr"},[t._v("北京 北京市 朝阳区 安定门街道")]),s("div",{staticClass:"stock"},[t._v("有现货")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item-color"},[s("h2",[t._v("选择颜色")]),s("div",{staticClass:"phone checked"},[s("span",{staticClass:"color"}),t._v(" 深空灰 ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"price-info"},[s("div",{staticClass:"container"},[s("h2",[t._v("价格说明")]),s("div",{staticClass:"desc"})])])}],r=i(6747),c=i(2871),n=i(5641),o=i.p+"img/phone-1.499d472f.jpg",l=i.p+"img/phone-2.1e4c317e.jpg",d=i.p+"img/phone-3.d6d92f37.jpg",v=i.p+"img/phone-4.457247c2.jpg",p={name:"detail-view",data(){return{id:this.$route.params.id,err:"",version:1,product:{},slideList:[{src:o},{src:l},{src:d},{src:v}],swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide,ProductInfo:c.Z,ServiceBar:n.Z},mounted(){this.getProductInfo()},methods:{getProductInfo(){this.axios.get(`/products/${this.id}`).then((t=>{this.product=t}))},addCart(){this.axios.post("/carts",{productId:this.id,selected:!0}).then(((t={cartProductVoList:0})=>{this.$message.success("添加成功"),this.$store.dispatch("saveCartCount",t.cartTotalQuantity)}))}}},u=p,h=i(2349),_=(0,h.Z)(u,a,e,!1,null,null,null),f=_.exports}}]);
//# sourceMappingURL=27.85a48325.js.map