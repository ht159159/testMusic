<template src="./Chinese.html"></template>
<script>
// import { debuglog } from "util";
// import axios from "axios";
import MusicBox from "../../components/Music_box/Music_box.vue"
export default {
  components:{
    MusicBox
  },
  // data() {
  //   return {
  //     playMusicId: null,
  //     musicList: [],
  //     musicListList: [],
  //     countOfPage: 5,
  //     currPage: 1,
  //     clickCurrPage: 1,
  //     filter_name: "",
  //     playMusicUrl: ""
  //     // { song: "燭光泛舟", singer: "張津滌" },
  //     // { song: "假朋友真兄弟", singer: "熊仔．豹子膽" },
  //     // { song: "柔柔的眼波柔柔的你", singer: "星月組合" },
  //     // { song: "一晃就老了", singer: "秋褲大叔(趙小兵)" },
  //     // { song: "三千痴纏", singer: "莊心妍．富博洋" },
  //     // { song: "熬夜成癮", singer: "朱興東" },
  //     // { song: "類情人", singer: "梁靜茹" },
  //     // { song: "我好嗎", singer: "梁靜茹" },
  //     // { song: "我比從前想你了", singer: "Bii" },
  //     // { song: "都幾歲了", singer: "陳嘉樺" }
  //   };
  // },
  // computed: {
  //   filteredRows: function() {
  //     // 因為 JavaScript 的 filter 有分大小寫，
  //     // 所以這裡將 filter_name 與 musicList[n].name 通通轉小寫方便比對。
  //     // var filter_name = this.filter_name.toLowerCase();

  //     // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 musicList 回傳。
  //     // return this.filter_name.trim() !== ""
  //     //   ? this.musicList.filter(function(d) {
  //     //       return d.name.toLowerCase().indexOf(filter_name) > -1;
  //     //     })
  //     //   : this.musicList;
  //     return this.musicList;
  //   },
  //   pageStart: function() {
  //     return (this.currPage - 1) * this.countOfPage;
  //   },
  //   totalPage: function() {
  //     return Math.ceil(this.filteredRows.length / this.countOfPage);
  //   },
  //   listId: {
  //     get() {
  //       return this.$store.state.listId;
  //     },
  //     set(val) {
  //       // this.$store.state.listId = val;
  //       this.$store.commit("SETlistId",val)
  //     }
  //   },
  //   checkId: {
  //     get() {
  //       return this.$store.state.checkId;
  //     },
  //     set(val) {
  //       // this.$store.state.checkId = val;
  //       this.$store.commit("SETcheckId",val)
  //     }
  //   }
  // },
  // methods: {
  //   playMusic(index) {
  //     let t = this;
  //     this.clickCurrPage = this.currPage;
  //     console.log(index);
  //     this.playMusicId = index;
  //     //   console.log(this.filteredRows.slice(this.pageStart, this.pageStart + this.countOfPage)[index].singname);
  //     let playMusicIdname = this.filteredRows.slice(
  //       this.pageStart,
  //       this.pageStart + this.countOfPage
  //     )[index];
  //     let playMusic = playMusicIdname.singname + playMusicIdname.singer;

  //     this.$axios
  //       .get("http://192.168.6.246/api/account/" + playMusic)
  //       .then(function(response) {
  //         t.playMusicUrl = response.data[0].url;
  //       });
  //     t.youtobeIf();
  //   },
  //   setPage: function(idx) {
  //     if (idx <= 0 || idx > this.totalPage) {
  //       return;
  //     }
  //     this.currPage = idx;
  //     // this.playMusicId = null;
  //   },
  //   youtobeIf() {
  //     let t = this;
  //     // 2. This code loads the IFrame Player API code asynchronously.
  //     var tag = document.createElement("script");

  //     tag.src = "https://www.youtube.com/iframe_api";
  //     var firstScriptTag = document.getElementsByTagName("script")[0];
  //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //     // 3. This function creates an <iframe> (and YouTube player)
  //     //    after the API code downloads.
  //     var player;
  //     function onYouTubeIframeAPIReady() {
  //       // if (
  //       //   document.getElementById("player").getAttribute("src") != undefined
  //       // ) {
  //       //   document
  //       //     .getElementById("player")
  //       //     .setAttribute(
  //       //       "src",
  //       //       "https://www.youtube.com/embed/" +
  //       //         t.playMusicUrl +
  //       //         "?enablejsapi=1&controls=1"
  //       //     );
  //       // }
  //       // else {
  //       player = new YT.Player("player", {
  //         height: "390",
  //         width: "640",
  //         videoId: t.playMusicUrl,
  //         playerVars: {
  //           controls: 1
  //         },
  //         events: {
  //           onReady: onPlayerReady,
  //           onStateChange: onPlayerStateChange
  //         }
  //       });
  //       // debugger
  //       if (
  //         document.getElementById("player").getAttribute("src") != undefined
  //       ) {
  //         player.getIframe().src =
  //           "https://www.youtube.com/embed/" +
  //           t.playMusicUrl +
  //           "?enablejsapi=1&controls=1";
  //         console.log(player.getIframe().src);
  //       }

  //       // }
  //     }

  //     // 4. The API will call this function when the video player is ready.
  //     function onPlayerReady(event) {
  //       event.target.playVideo();
  //     }

  //     // 5. The API calls this function when the player's state changes.
  //     //    The function indicates that when playing a video (state=1),
  //     //    the player should play for six seconds and then stop.
  //     var done = false;
  //     function onPlayerStateChange(event) {
  //       changeBorderColor(event.data);
  //       // if (event.data == YT.PlayerState.PLAYING && !done) {
  //       // if (player.getPlayerState() == 0) {
  //       //   console.log("1");
  //       // }
  //       // setTimeout(stopVideo, 6000);
  //       // done = true;
  //       // }
  //     }
  //     // function stopVideo() {
  //     //   console.log(player.getPlayerState());
  //     // }
  //     setTimeout(onYouTubeIframeAPIReady, 1000);
  //     //   onYouTubeIframeAPIReady();

  //     function changeBorderColor(playerStatus) {
  //       // let t = this;
  //       var color;
  //       if (playerStatus == -1) {
  //         // unstarted = gray
  //       } else if (playerStatus == 0) {
  //         // ended = yellow
  //         let nextPlay = t.playMusicId + 1;
  //         if (nextPlay < t.countOfPage) {
  //           t.playMusic(nextPlay);
  //         } else if (t.currPage <= t.totalPage - 1) {
  //           console.log(t.currPage);
  //           console.log(t.totalPage);
  //           t.setPage(t.currPage + 1);
  //           t.playMusic(0);
  //         }
  //       } else if (playerStatus == 1) {
  //         console.log("1"); // playing = green
  //       } else if (playerStatus == 2) {
  //         console.log("2"); // paused = red
  //       } else if (playerStatus == 3) {
  //         // buffering = purple
  //       } else if (playerStatus == 5) {
  //         // video cued = orange
  //       }
  //     }
  //   }
  // },
  // mounted() {
  //   let t = this;
  //   this.$axios
  //     .get("http://192.168.6.246/api/account/1")
  //     .then(function(response) {
  //       //let json = response.data;
  //       t.musicList = response.data;
  //       // let one = t.musicListList[0];
  //       // if (t.musicList.length > 10) {
  //       //   for (let i = 0; i < 10; i++) {
  //       //     t.musicListList.push({});
  //       //   }
  //       // }
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       // console.log(error);
  //     })
  //     .finally(function() {
  //       // always executed
  //     });
  // }
};
</script>
<style src="./Chinese.css" scope></style>
