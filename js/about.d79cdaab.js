(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"040e":function(t,n,e){},"11e9":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cantonesePag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("8f5b"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"1a20":function(t,n,e){},"1b2d":function(t,n,e){"use strict";var a=e("26f2"),s=e.n(a);s.a},"1f8f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loveHoldayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("42e0"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"264a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"musicBox"},[e("div",{staticClass:"musicList"},[e("div",{staticClass:"musicListTitle"},[t._v("歌曲")]),e("div",{staticClass:"musicContentBox"},t._l(t.musicList,function(n,a){return e("div",{staticClass:"musicContent",on:{click:function(n){return t.playMusic(a)}}},[e("div",{staticClass:"playIcon",class:[{playIconSelect:t.playMusicId==a}]}),e("a",{staticClass:"playName",attrs:{title:n.singname+" - "+n.singer}},[t._v(t._s(n.singname)+" - "+t._s(n.singer))])])}),0)]),t._m(0)])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"musicPlay"},[e("div",{staticClass:"musicPlayBox",attrs:{id:"player"}})])}],i={data:function(){return{playMusicId:null,musicList:[{singname:"燭光泛舟",singer:"張津滌",playMusicUrl:"PKAgk7o4C4w"},{singname:"假朋友真兄弟",singer:"熊仔．豹子膽",playMusicUrl:"08Ca5FAxThg"},{singname:"柔柔的眼波柔柔的你",singer:"星月組合",playMusicUrl:"dTQmFgMOf8I"},{singname:"一晃就老了",singer:"秋褲大叔(趙小兵)",playMusicUrl:"VgAB5FVHfZ8"},{singname:"三千痴纏",singer:"莊心妍．富博洋",playMusicUrl:"VDBdBbRRVTk"},{singname:"熬夜成癮",singer:"朱興東",playMusicUrl:"TY1icDvBgso"},{singname:"類情人",singer:"梁靜茹",playMusicUrl:"b5GC68J2uDQ"},{singname:"我好嗎",singer:"梁靜茹",playMusicUrl:"fa5XXI0OemE"},{singname:"我比從前想你了",singer:"Bii",playMusicUrl:"WB7KVRtyctk"},{singname:"都幾歲了",singer:"陳嘉樺",playMusicUrl:"BIGWEMk1J0I"}],musicListList:[],countOfPage:5,currPage:1,clickCurrPage:1,filter_name:"",playMusicUrl:"",showList:!1,navList:[{titleName:"新歌",order:"first",navContent:[{name:"國語",link:"/"},{name:"台語",link:"/Taiwanese"},{name:"廣東",link:"/Cantonese"},{name:"西洋",link:"/Western"},{name:"東洋",link:"/Toyo"}]},{titleName:"排行",order:"second",navContent:[{name:"國語新歌",link:"/ChineseNew"},{name:"國語點播",link:"/ChinesePlay"},{name:"台語新歌",link:"/TaiwaneseNew"},{name:"台語點播",link:"/TaiwanesePlay"},{name:"廣東點播",link:"/CantonesePlay"},{name:"西洋點播",link:"/WesternPlay"},{name:"東洋點播",link:"/ToyoPlay"}]},{titleName:"主題",order:"third",navContent:[{name:"我愛HOLDAY",link:"/LoveHolday"},{name:"給我TEMPO",link:"/Tempo"},{name:"情歌對唱",link:"/LoveSong"},{name:"驪歌響起",link:"/Graduation"}]}],activeName:"first"}},computed:{key:function(){return this.$route.path},filteredRows:function(){return this.musicList},pageStart:function(){return(this.currPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.filteredRows.length/this.countOfPage)}},methods:{playMusic:function(t){var n=this;console.log(t),this.playMusicId=t;n.musicList[t].singname,n.musicList[t].singer;n.playMusicUrl=n.musicList[t].playMusicUrl,n.youtobeIf()},setPage:function(t){t<=0||t>this.totalPage||(this.currPage=t)},youtobeIf:function(){var t=this,n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var e,a=document.getElementsByTagName("script")[0];function s(){e=new YT.Player("player",{height:"390",width:"640",videoId:t.playMusicUrl,playerVars:{controls:1},events:{onReady:i,onStateChange:c}}),void 0!=document.getElementById("player").getAttribute("src")&&(e.getIframe().src="https://www.youtube.com/embed/"+t.playMusicUrl+"?enablejsapi=1&controls=1",console.log(e.getIframe().src))}function i(t){t.target.playVideo()}a.parentNode.insertBefore(n,a);function c(t){u(t.data)}function u(n){if(-1==n);else if(0==n){var e=t.playMusicId+1;e<t.countOfPage?t.playMusic(e):t.currPage<=t.totalPage-1&&(console.log(t.currPage),console.log(t.totalPage),t.setPage(t.currPage+1),t.playMusic(0))}else 1==n?console.log("1"):2==n&&console.log("2")}setTimeout(s,1e3)},handleClick:function(t,n){console.log(t,n)}},mounted:function(){}},c=i,u=(e("3d72"),e("2877")),l=Object(u["a"])(c,a,s,!1,null,null,null);n["a"]=l.exports},"26f2":function(t,n,e){},"2c6e":function(t,n,e){"use strict";var a=e("cb93"),s=e.n(a);s.a},"305a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"taiwanesePlayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("2c6e"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},3400:function(t,n,e){},"392d":function(t,n,e){},"3d72":function(t,n,e){"use strict";var a=e("392d"),s=e.n(a);s.a},4287:function(t,n,e){"use strict";var a=e("9d30"),s=e.n(a);s.a},"42e0":function(t,n,e){"use strict";var a=e("469c"),s=e.n(a);s.a},"469c":function(t,n,e){},"533f":function(t,n,e){},5567:function(t,n,e){"use strict";var a=e("ddc7"),s=e.n(a);s.a},5580:function(t,n,e){"use strict";var a=e("040e"),s=e.n(a);s.a},5740:function(t,n,e){"use strict";var a=e("ff5c"),s=e.n(a);s.a},"625b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tempoPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("c4ad"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},6561:function(t,n,e){},6688:function(t,n,e){},"6bdc":function(t,n,e){"use strict";var a=e("9433"),s=e.n(a);s.a},"6d04":function(t,n,e){"use strict";var a=e("1a20"),s=e.n(a);s.a},7317:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"westernPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("876a"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"77b9":function(t,n,e){"use strict";var a=e("6561"),s=e.n(a);s.a},"7da0":function(t,n,e){},"86ca":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cantonesePlayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("1b2d"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"876a":function(t,n,e){"use strict";var a=e("6688"),s=e.n(a);s.a},"893b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toyoPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("89dc"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"89dc":function(t,n,e){"use strict";var a=e("3400"),s=e.n(a);s.a},"8f5b":function(t,n,e){"use strict";var a=e("533f"),s=e.n(a);s.a},9433:function(t,n,e){},9497:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chinesePag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("5580"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},"9d30":function(t,n,e){},"9de9":function(t,n,e){},ae4b:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toyoPlayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("cc13"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},bcd4:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"taiwanesePag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("6bdc"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},c26e:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"westernPlayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("feb2"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},c314:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chinesePlayPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("77b9"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},c4ad:function(t,n,e){"use strict";var a=e("f18f"),s=e.n(a);s.a},c838:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"taiwaneseNewPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("5567"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},cacd:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"loveSongPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("6d04"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},cb93:function(t,n,e){},cc13:function(t,n,e){"use strict";var a=e("9de9"),s=e.n(a);s.a},d311:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"graduationPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("4287"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},d7dc:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chineseNewPag"},[e("MusicBox")],1)},s=[],i=e("264a"),c={components:{MusicBox:i["a"]}},u=c,l=(e("5740"),e("2877")),r=Object(l["a"])(u,a,s,!1,null,null,null);n["default"]=r.exports},ddc7:function(t,n,e){},f18f:function(t,n,e){},feb2:function(t,n,e){"use strict";var a=e("7da0"),s=e.n(a);s.a},ff5c:function(t,n,e){}}]);
//# sourceMappingURL=about.d79cdaab.js.map