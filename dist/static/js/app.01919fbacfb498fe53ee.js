webpackJsonp([10],{"2AGw":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"placeholder"}),t._v(" "),e("div",{staticClass:"head"},[e("i",{staticClass:"iconfont icon-play2"}),t._v(" "),e("div",{staticClass:"center"},[e("router-link",{staticClass:"iconfont icon-music",class:-1!==this.$route.path.indexOf("/music")?"white-icon":"",attrs:{to:"/music/"+t.activeTab}}),t._v(" "),e("router-link",{staticClass:"iconfont icon-netease",class:"/"===this.$route.path?"white-icon":"",attrs:{to:"/"}}),t._v(" "),e("router-link",{staticClass:"iconfont icon-rank",class:"/rank"===this.$route.path?"white-icon":"",attrs:{to:"/rank"}})],1),t._v(" "),e("router-link",{staticClass:"iconfont icon-search",attrs:{to:"/search"}})],1)])},a=[],r={render:i,staticRenderFns:a};n.a=r},"2Hch":function(t,n,e){"use strict";function i(t){e("h6WM")}var a=e("cJwd"),r=e("2AGw"),s=e("46Yf"),o=i,c=s(a.a,r.a,!1,o,"data-v-2ad67581",null);n.a=c.exports},"5s8g":function(t,n){},"74L8":function(t,n){},"8PcR":function(t,n){},BcEq:function(t,n,e){"use strict"},DICR:function(t,n,e){"use strict";var i=e("4YfN"),a=e.n(i),r=e("x/vA"),s=e("2Hch"),o=e("pjeT"),c=e("aVGL");n.a={name:"app",data:function(){return{}},components:{playBar:r.a,h:s.a,list:o.a},mounted:function(){},computed:a()({},Object(c.d)(["loading"]))}},"ESj/":function(t,n){},IcnI:function(t,n,e){"use strict";var i=e("MVSX"),a=e("aVGL"),r=e("ukYY"),s=e("mUbh"),o=e("UjVw"),c=e("TF7I"),u=e.n(c),l={activeTab:"high",loading:!0,listStorage:[],playStorage:[],duration:0,currentTime:0,playStatus:!1,list:[],listShow:!1,currentSong:{name:"イエスタデイ・ワンス・モア (カーペンターズ)",id:868830,cover:"http://p1.music.126.net/UmHoklpGmQCaUbkC18dEIQ==/880708813848823.jpg",url:u.a,lyric:"[00:01]abc\n[99:99]aa`",artist:"陈奕迅",album:""},index:0};i.default.use(a.a),n.a=new a.a.Store({state:l,actions:s.a,mutations:r.a,getters:o.a})},IlMT:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("transition",{attrs:{name:"mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"mask",on:{touchmove:function(t){t.preventDefault()},wheelDelta:function(t){t.preventDefault()},click:t.toggleListShow}})]),t._v(" "),e("transition",{attrs:{name:"list"}},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list"},[e("li",{staticClass:"title"},[t._v(t._s("播放列表"))]),t._v(" "),t._l(t.list,function(n,i){return e("li",{key:n.id,staticClass:"item",on:{click:function(n){t.setCurrentSong(i)}}},[t._v(t._s(n.name)),e("span",{staticClass:"artist"},[t._v(" - "+t._s(n.artist))]),t._v(" "),e("i",{staticClass:"iconfont icon-delete",on:{click:function(n){n.stopPropagation(),t.deleteSong(i)}}})])})],2)])],1)},a=[],r={render:i,staticRenderFns:a};n.a=r},KOga:function(t,n,e){"use strict";e.d(n,"a",function(){return d}),e.d(n,"g",function(){return f}),e.d(n,"i",function(){return h}),e.d(n,"e",function(){return p}),e.d(n,"b",function(){return v}),e.d(n,"f",function(){return m}),e.d(n,"d",function(){return g}),e.d(n,"c",function(){return w}),e.d(n,"h",function(){return S}),e.d(n,"j",function(){return A});var i=e("lC5x"),a=e.n(i),r=e("J0Oq"),s=e.n(r),o=e("BMa3"),c=e.n(o),u=c.a.create({baseURL:"https://xxmusic.applinzi.com/"}),l=function(){var t=s()(a.a.mark(function t(n){var e,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:s,url:n,params:"get"===s?r:{}},"post"===s&&(e.data=r),t.next=4,u(e);case 4:return i=t.sent,console.log(n,i),t.abrupt("return",i.data);case 7:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),d=(function(){var t=s()(a.a.mark(function t(n,e){var i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c()({url:"https://api.imjad.cn/cloudmusic/",params:{type:n,id:e}});case 2:return i=t.sent,console.log(n,i),t.abrupt("return",i.data);case 5:case"end":return t.stop()}},t,this)}))}(),function(){return l("banner")}),f=function(){return l("personalized/privatecontent")},h=function(){return l("personalized")},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hot";return l("/top/playlist",{limit:t,order:n})},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return l("top/playlist/highquality",{limit:t,cat:n})},m=function(t){return l("/playlist/detail",{id:t})},g=function(t){return"[object Array]"===Object.prototype.toString.call(t)?l("/music/url",{id:t.join(",")}):l("/music/url",{id:t})},w=function(t){return l("lyric",{id:t})},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l("/top/list",{idx:t})},A=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return l("/search",{keywords:t,type:n,limit:e,offset:i})}},M93x:function(t,n,e){"use strict";function i(t){e("bvav")}var a=e("DICR"),r=e("zzaR"),s=e("46Yf"),o=i,c=s(a.a,r.a,!1,o,"data-v-029e8249",null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("qRnO"),a=(e.n(i),e("xMOs")),r=e.n(a),s=e("Qw+T"),o=(e.n(s),e("UWkp")),c=e.n(o),u=e("hwll"),l=(e.n(u),e("irk7")),d=(e.n(l),e("rrtA")),f=e.n(d),h=e("MVSX"),p=e("M93x"),v=e("YaEn"),m=e("IcnI"),g=e("201h"),w=e.n(g),S=e("q2H9"),A=e.n(S),C=e("5s8g"),y=(e.n(C),e("iniS")),b=e.n(y),x=e("UAgs"),E=(e.n(x),e("8PcR"));e.n(E);h.default.use(b.a),h.default.use(A.a),h.default.use(f.a),h.default.use(c.a),h.default.use(r.a),h.default.config.productionTip=!1,h.default.use(w.a,{preLoad:1.1,error:e("zAji"),loading:e("Yyfi"),attempt:1}),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){e("iDdd").attach(document.body)},!1),new h.default({el:"#app",router:v.a,store:m.a,render:function(t){return t(p.a)}})},"Qw+T":function(t,n){},TF7I:function(t,n,e){t.exports=e.p+"static/media/init.2f3a92c.mp3"},UAgs:function(t,n){!function(t,n){var e=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var t=e.clientWidth;t&&(e.style.fontSize=t/320*30+"px")};t.addEventListener&&(n.addEventListener(i,a,!1),t.addEventListener("DOMContentLoaded",a,!1))}(document,window)},UjVw:function(t,n,e){"use strict";n.a={getListShow:function(t,n){return t.listShow}}},YCoA:function(t,n,e){"use strict";var i=e("4YfN"),a=e.n(i),r=e("aVGL");n.a={data:function(){return{}},computed:a()({},Object(r.d)(["listShow","list"])),methods:a()({},Object(r.c)(["toggleListShow","deleteSong"]),Object(r.b)(["setCurrentSong"]))}},YaEn:function(t,n,e){"use strict";var i=e("MVSX"),a=e("cigS"),r=function(){return e.e(5).then(e.bind(null,"2NXm"))},s=function(){return e.e(8).then(e.bind(null,"ilYB"))},o=function(){return e.e(1).then(e.bind(null,"e6MO"))},c=function(){return e.e(0).then(e.bind(null,"dz8v"))},u=function(){return e.e(7).then(e.bind(null,"8mL6"))},l=function(){return e.e(6).then(e.bind(null,"oRln"))},d=function(){return e.e(4).then(e.bind(null,"qFjt"))},f=function(){return e.e(3).then(e.bind(null,"4Bsh"))},h=function(){return e.e(2).then(e.bind(null,"dwST"))};i.default.use(a.a),n.a=new a.a({routes:[{path:"/",name:"index",component:r,meta:{needHead:!0,alive:!0}},{path:"/music",name:"music",component:s,meta:{needHead:!0,alive:!0},children:[{path:"high",name:"high",meta:{needHead:!0,alive:!0},component:u},{path:"hot",name:"hot",meta:{needHead:!0,alive:!0},component:l},{path:"new",name:"new",meta:{needHead:!0,alive:!0},component:d}]},{path:"/playlist/:id",name:"playlist",component:o,meta:{needHead:!1,alive:!1},props:!0},{path:"/song",name:"song",component:c,meta:{closeBar:!0,alive:!1}},{path:"/rank",name:"rank",component:f,meta:{needHead:!0,alive:!0}},{path:"/search",name:"search",component:h,meta:{alive:!0}}]})},Yyfi:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDBAMAAADD/3z4AAAAMFBMVEW8vsDR09TFxsi/wcPn6OnX2NrMztDc3d7Hycve4OHKy83Bw8XP0NIAAAAAAAAAAAC0F+PNAAAACXBIWXMAAAsTAAALEwEAmpwYAAACt0lEQVR4Ae3av27TbBTHcdfBSUs6uCISQmXokJHBEl0qFgi/xHHaoYMH2BgqsUZQqWuHSqxIzdINpFwAQy8gErkwYruH10nsWg2vzxn6+wwk6YC+OrYf58/jEBERERERERERERERUaVXz18e2BZ8AxBeWhZsIfHOMqGD1KldwVNkRnYJT3DHLmEqCZ+sTwXLk+FcEsb2CW+ZYHog5pLgmyXcSsIv01tEou+YaUyQeu/Y6SJl9Y7hTTKG9Jr4mjwLDBJukn+2Y+BD8qR1rV/gLV+J81A/IcYg92rb4FblLd+iuwZXZgzgxBFNgzu2h4UokJc7BgtUvLwiNSbqY/BWV6RDGYPuEHq5P7hInNoNQZbqvskQhKv7vmFXhrA2hoFWwpkMIc/V/EDRlCHYjWEqQygaww/nESAi92JzX/6fhG1sbsgEJjCBCUx4DAnRxYPUkfDA/00tgQlMYEL7BaJ924QOFp5ZJnhIRIFhQgep73YJctM6sUto4Y5dwqEkXJolXEmCb5ZwZp8wLUxoBeYHojO2OB0Plr5zHBlelNIV6CW4yAxWdpSM9Rfo8crmopH6bSoMlo7DQqCVICuDv7abw1dMaHyehL/XfyIZKiRUbSEIDBMmslaZJWwhMzRIeL2yZAfqCY2bIH2A8NUTWrjOHsRQPSHO3kZP8VegnLALJGNo4z++YoIskmF2HMRQN0F+q5/nEiLNBFkS+y7yfM0EuRQ/Iq+nmXCEIpFmwjkK+XoJHor19BI6KBapJTRRxtdKuEKZnlKCi1KRUsItyvkqCY0Jyh2rJOzgHqFKQoz7zBQStnCvY61PU+XC+hOaqDCrPaGLCscK3y9UCOtOOEKlWc0JP/cq1ZbAX2WYwAQm2O9f4EYSJjCBCUxgQrX23ub2HSIiIiIiIiIiIiIiIiIiIiIiIiKif/MHRAD9DcnwUkAAAAAASUVORK5CYII="},bTuS:function(t,n,e){"use strict";var i=e("4YfN"),a=e.n(i),r=e("aVGL");n.a={data:function(){return{iconStatus:!1}},mounted:function(){},methods:a()({toggleList:function(){this.toggleListShow()},setCur:function(){this.setCurrentTime(this.$refs.audio.currentTime)},setDur:function(){this.setDuration(this.$refs.audio.duration)},endEvent:function(){1===this.list.length?this.$refs.audio.play():0===this.list.length?this.togglePlayStatus():this.setCurrentSong(this.index+1)}},Object(r.c)(["toggleListShow","togglePlayStatus","setCurrentTime","setDuration","play"]),Object(r.b)(["setCurrentSong"])),computed:a()({},Object(r.d)(["listShow","currentSong","playStatus","currentTime","index","list"])),watch:{playStatus:function(t){!0===t?(this.$refs.audio.play(),this.iconStatus=!0):(this.$refs.audio.pause(),this.iconStatus=!1)}}}},bvav:function(t,n){},cJwd:function(t,n,e){"use strict";var i=e("4YfN"),a=e.n(i),r=e("aVGL");n.a={name:"head",data:function(){return{}},mounted:function(){console.log(this.$route)},methods:{},computed:a()({},Object(r.d)(["activeTab"]))}},h6WM:function(t,n){},h726:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"placeholder"}),t._v(" "),e("div",{staticClass:"playBar"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSong.cover,expression:"currentSong.cover"}],attrs:{height:"468",width:"468"}}),t._v(" "),e("router-link",{staticClass:"text",attrs:{to:"/song"}},[e("p",{staticClass:"ellipsis name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),e("p",{staticClass:"ellipsis artist"},[t._v(t._s(t.currentSong.artist))])]),t._v(" "),e("div",{staticClass:"btn"},[e("i",{staticClass:"iconfont",class:t.iconStatus?"icon-pause":"icon-play",on:{click:t.togglePlayStatus}}),t._v(" "),e("i",{staticClass:"iconfont icon-list",on:{click:t.toggleList}})])],1),t._v(" "),e("audio",{ref:"audio",attrs:{id:"audio",src:t.currentSong.url,autoplay:""},on:{canplay:t.play,timeupdate:t.setCur,durationchange:t.setDur,ended:t.endEvent}})])},a=[],r={render:i,staticRenderFns:a};n.a=r},hwll:function(t,n){},irk7:function(t,n){},mUbh:function(t,n,e){"use strict";var i=e("lC5x"),a=e.n(i),r=e("4YfN"),s=e.n(r),o=e("J0Oq"),c=e.n(o),u=(e("BcEq"),e("KOga"));n.a={setCurrentSong:function(){function t(t){return n.apply(this,arguments)}var n=c()(a.a.mark(function t(n){var e,i,r,o=n.state,c=n.commit,l=(n.dispatch,arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.index);return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o.list.length){t.next=2;break}return t.abrupt("return");case 2:if(l=l<0?0:l>=o.list.length?0:l,o.index=l,e=o.list[l],i=e.id,e.lyric){t.next=17;break}return t.prev=6,t.next=9,Object(u.c)(i);case 9:r=t.sent,r=200===r.code?r.lrc?r.lrc.lyric:"歌词未收录":"",o.list[l]=s()({lyric:r},e),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.log("get indexsong lyric",t.t0);case 17:c("SET_CURRENTSONG");case 18:case"end":return t.stop()}},t,this,[[6,14]])}));return t}()}},pjeT:function(t,n,e){"use strict";function i(t){e("74L8")}var a=e("YCoA"),r=e("IlMT"),s=e("46Yf"),o=i,c=s(a.a,r.a,!1,o,"data-v-84e66d82",null);n.a=c.exports},qRnO:function(t,n){},ukYY:function(t,n,e){"use strict";var i=e("IHPB"),a=e.n(i);n.a={setLoading:function(t,n){t.loading=n},setActiveTab:function(t,n){t.activeTab=n},pushListStorage:function(t,n){var e;n=n.map(function(t){return{id:t.id,img:t.coverImgUrl||t.picUrl,name:t.name}}),(e=t.listStorage).push.apply(e,a()(n)),console.log("list storage",t.listStorage)},setPlayStorage:function(t,n){t.playStorage=n},toggleListShow:function(t){t.listShow=!t.listShow},pushList:function(t,n){var e,i=t.list.length,r=t.list.map(function(t){return t.id});n.length||(n=[n]);var s=n.filter(function(t){return r.indexOf(t.id)>=0}),o=0;s.length>0&&(o=r.indexOf(s[0].id)),n=n.filter(function(t){return-1===r.indexOf(t.id)}),n=n.map(function(t){return{id:t.id,name:t.name,cover:t.al?t.al.picUrl:t.album.picUrl,artist:t.al?t.ar[0].name:t.artists[0].name,album:t.al?t.al.name:t.album.name,url:t.url}}),(e=t.list).push.apply(e,a()(n)),t.list.length>i?t.index=i:t.index=o},SET_CURRENTSONG:function(t){t.currentSong=t.list[t.index]},deleteSong:function(t,n){t.list.splice(n,1)},togglePlayStatus:function(t,n){t.playStatus=!t.playStatus},play:function(t,n){t.playStatus=!0},setCurrentTime:function(t,n){t.currentTime=n},setDuration:function(t,n){t.duration=n}}},"x/vA":function(t,n,e){"use strict";function i(t){e("ESj/")}var a=e("bTuS"),r=e("h726"),s=e("46Yf"),o=i,c=s(a.a,r.a,!1,o,"data-v-294c6ca4",null);n.a=c.exports},zAji:function(t,n,e){t.exports=e.p+"static/img/404.f5838a2.png"},zzaR:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t.$route.meta.needHead?e("h"):t._e(),t._v(" "),e("keep-alive",[t.$route.meta.alive?e("router-view",{staticClass:"router"}):t._e()],1),t._v(" "),t.$route.meta.alive?t._e():e("router-view",{staticClass:"router"}),t._v(" "),e("play-bar",{directives:[{name:"show",rawName:"v-show",value:!t.$route.meta.closeBar,expression:"!$route.meta.closeBar"}]}),t._v(" "),e("list")],1)},a=[],r={render:i,staticRenderFns:a};n.a=r}},["NHnr"]);
//# sourceMappingURL=app.01919fbacfb498fe53ee.js.map