(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4b9699"],{bb51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"mePlayer"},[e("div",{staticClass:"now_player"},[e("div",{staticClass:"bannerImg"},[e("p",{staticClass:"play_name"},[e("span",[t._v("正在直播")]),e("span",[t._v(t._s(t.name))])]),e("div",{staticStyle:{height:"90%"},attrs:{id:"video"}})])])]),e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.sszbMatch,(function(s,i){return e("swiper-slide",{key:i,nativeOn:{click:function(e){return t.toplay(s.list[0].room_num)}}},[e("div",{staticClass:"lists"},[e("div",{staticClass:"match_tops"},[e("p",[t._v(t._s(s.title))]),e("p",{attrs:{timer:"o.time"}},[t._v(t._s(s.time))])]),e("div",{staticClass:"match_bottom"},[e("div",{staticClass:"home_team"},[e("img",{attrs:{src:s.home_logo}}),e("p",[t._v(t._s(s.home_name))])]),e("div",{staticClass:"status"},[e("p",{staticClass:"match_score"},[t._v(" "+t._s(s.home_name)+" "),e("span",[t._v("VS")]),t._v(" "+t._s(s.visiting_name)+" ")]),e("p",{},[t._v(t._s(s.status_ch))])]),e("div",{staticClass:"visit_team"},[e("img",{attrs:{src:s.visiting_logo}}),e("p",[t._v(t._s(s.visiting_name))])])])])])})),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},a=[],n=(e("a4d3"),e("4de4"),e("b0c0"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),r=e("365c"),o=e("2f62"),c=e("7212");e("dfa4");function l(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function p(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?l(Object(e),!0).forEach((function(s){Object(n["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var u={name:"player",data:function(){return{name:null,data:null,swiperOption:{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},created:function(){this.$store.dispatch("sszb_match")},computed:p({},Object(o["c"])(["sszbMatch","sszbRoom","liveUrl"])),mounted:function(){this.set("0.c971b59822c6a91fab4bad8ca9b45f6b.m3u8")},methods:{set:function(t){this.$store.dispatch("vipzb_url",t),r["a"].player.dp(this.liveUrl.url),this.name=this.liveUrl.name},toplay:function(t){this.$store.dispatch("sszb_room",t),r["a"].player.dp(this.sszbRoom.m3u8_hd),this.name=this.sszbRoom.title}},components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"]}},b=u,v=(e("cccb"),e("2877")),m=Object(v["a"])(b,i,a,!1,null,null,null);s["default"]=m.exports},c330:function(t,s,e){},cccb:function(t,s,e){"use strict";var i=e("c330"),a=e.n(i);a.a}}]);