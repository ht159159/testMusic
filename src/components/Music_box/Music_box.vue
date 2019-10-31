<template src="./Music_box.html"></template>
<script>
export default {
  data() {
    return {
      playMusicId: null,
      musicList: [
 { singname: "燭光泛舟", singer: "張津滌" ,playMusicUrl:'PKAgk7o4C4w'},
      { singname: "假朋友真兄弟", singer: "熊仔．豹子膽" ,playMusicUrl:'08Ca5FAxThg'},
      { singname: "柔柔的眼波柔柔的你", singer: "星月組合" ,playMusicUrl:'dTQmFgMOf8I'},
      { singname: "一晃就老了", singer: "秋褲大叔(趙小兵)" ,playMusicUrl:'VgAB5FVHfZ8'},
      { singname: "三千痴纏", singer: "莊心妍．富博洋" ,playMusicUrl:'VDBdBbRRVTk'},
      { singname: "熬夜成癮", singer: "朱興東" ,playMusicUrl:'TY1icDvBgso'},
      { singname: "類情人", singer: "梁靜茹" ,playMusicUrl:'b5GC68J2uDQ'},
      { singname: "我好嗎", singer: "梁靜茹" ,playMusicUrl:'fa5XXI0OemE'},
      { singname: "我比從前想你了", singer: "Bii" ,playMusicUrl:'WB7KVRtyctk'},
      { singname: "都幾歲了", singer: "陳嘉樺" ,playMusicUrl:'BIGWEMk1J0I'}

      ],
      musicListList: [],
      countOfPage: 5,
      currPage: 1,
      clickCurrPage: 1,
      filter_name: "",
      playMusicUrl: "",
      showList: false,
      navList: [
        {
          titleName: "新歌",
          order: "first",
          navContent: [
            {
              name: "國語",
              link: "/"
            },
            {
              name: "台語",
              link: "/Taiwanese"
            },
            {
              name: "廣東",
              link: "/Cantonese"
            },
            {
              name: "西洋",
              link: "/Western"
            },
            {
              name: "東洋",
              link: "/Toyo"
            }
          ]
        },
        {
          titleName: "排行",
          order: "second",
          navContent: [
            {
              name: "國語新歌",
              link: "/ChineseNew"
            },
            {
              name: "國語點播",
              link: "/ChinesePlay"
            },
            {
              name: "台語新歌",
              link: "/TaiwaneseNew"
            },
            {
              name: "台語點播",
              link: "/TaiwanesePlay"
            },
            {
              name: "廣東點播",
              link: "/CantonesePlay"
            },
            {
              name: "西洋點播",
              link: "/WesternPlay"
            },
            {
              name: "東洋點播",
              link: "/ToyoPlay"
            }
          ]
        },
        {
          titleName: "主題",
          order: "third",
          navContent: [
            {
              name: "我愛HOLDAY",
              link: "/LoveHolday"
            },
            {
              name: "給我TEMPO",
              link: "/Tempo"
            },
            {
              name: "情歌對唱",
              link: "/LoveSong"
            },
            {
              name: "驪歌響起",
              link: "/Graduation"
            }
          ]
        }
      ],
      activeName: "first"
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
    filteredRows: function() {
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 filter_name 與 musicList[n].name 通通轉小寫方便比對。
      // var filter_name = this.filter_name.toLowerCase();

      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 musicList 回傳。
      // return this.filter_name.trim() !== ""
      //   ? this.musicList.filter(function(d) {
      //       return d.name.toLowerCase().indexOf(filter_name) > -1;
      //     })
      //   : this.musicList;
      return this.musicList;
    },
    pageStart: function() {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function() {
      return Math.ceil(this.filteredRows.length / this.countOfPage);
    }
    // listId(){
    //     return this.$store.state.listId;
    // },
    // checkId(){
    //     return this.$store.state.checkId;
    // }
  },
  methods: {
    playMusic(index) {
      let t = this;
      // this.clickCurrPage = this.currPage;
      console.log(index);
      this.playMusicId = index;
      //   console.log(this.filteredRows.slice(this.pageStart, this.pageStart + this.countOfPage)[index].singname);

      // let playMusicIdname = this.filteredRows.slice(
      //   this.pageStart,
      //   this.pageStart + this.countOfPage
      // )[index];
      // let playMusic = playMusicIdname.singname + playMusicIdname.singer;

      let playMusic = t.musicList[index].singname + t.musicList[index].singer;
t.playMusicUrl = t.musicList[index].playMusicUrl;
      // this.$axios
      //   .get("http://192.168.6.246/api/account/" + playMusic)
      //   .then(function(response) {
      //     t.playMusicUrl = response.data[0].url;
      //   });
      t.youtobeIf();
    },
    setPage: function(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
      // this.playMusicId = null;
    },
    youtobeIf() {
      let t = this;
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        // if (
        //   document.getElementById("player").getAttribute("src") != undefined
        // ) {
        //   document
        //     .getElementById("player")
        //     .setAttribute(
        //       "src",
        //       "https://www.youtube.com/embed/" +
        //         t.playMusicUrl +
        //         "?enablejsapi=1&controls=1"
        //     );
        // }
        // else {
        player = new YT.Player("player", {
          height: "390",
          width: "640",
          videoId: t.playMusicUrl,
          playerVars: {
            controls: 1
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
        // debugger
        if (
          document.getElementById("player").getAttribute("src") != undefined
        ) {
          player.getIframe().src =
            "https://www.youtube.com/embed/" +
            t.playMusicUrl +
            "?enablejsapi=1&controls=1";
          console.log(player.getIframe().src);
        }

        // }
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        changeBorderColor(event.data);
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        // if (player.getPlayerState() == 0) {
        //   console.log("1");
        // }
        // setTimeout(stopVideo, 6000);
        // done = true;
        // }
      }
      // function stopVideo() {
      //   console.log(player.getPlayerState());
      // }
      setTimeout(onYouTubeIframeAPIReady, 1000);
      //   onYouTubeIframeAPIReady();

      function changeBorderColor(playerStatus) {
        // let t = this;
        var color;
        if (playerStatus == -1) {
          // unstarted = gray
        } else if (playerStatus == 0) {
          // ended = yellow
          let nextPlay = t.playMusicId + 1;
          if (nextPlay < t.countOfPage) {
            t.playMusic(nextPlay);
          } else if (t.currPage <= t.totalPage - 1) {
            console.log(t.currPage);
            console.log(t.totalPage);
            t.setPage(t.currPage + 1);
            t.playMusic(0);
          }
        } else if (playerStatus == 1) {
          console.log("1"); // playing = green
        } else if (playerStatus == 2) {
          console.log("2"); // paused = red
        } else if (playerStatus == 3) {
          // buffering = purple
        } else if (playerStatus == 5) {
          // video cued = orange
        }
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    let t = this;
    // let test = this.$store.state;
    // if(){

    // }
//  this.$axios
//         .get("https://api.kkbox.com/v1.1/charts")
//         .then(function(response) {
//           console.log(response);
//         });
    // if (this.key == "/") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/1")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Taiwanese") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/2")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Cantonese") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/3")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Western") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/4")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Toyo") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/5")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/ChineseNew") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r1")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/ChinesePlay") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r2")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/TaiwaneseNew") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r3")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/TaiwanesePlay") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r4")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/CantonesePlay") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r5")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/WesternPlay") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r6")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/ToyoPlay") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/r7")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/LoveHolday") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/t1")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Tempo") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/t2")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/LoveSong") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/t3")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // if (this.key == "/Graduation") {
    //   this.$axios
    //     .get("http://192.168.6.246/api/account/t4")
    //     .then(function(response) {
    //       t.musicList = response.data;
    //     });
    // }
    // console.log(this.$route);
    // this.$axios
    //   .get("http://192.168.6.246/api/account/1")
    //   .then(function(response) {
    //     //let json = response.data;
    //     t.musicList = response.data;
    //     // let one = t.musicListList[0];
    //     // if (t.musicList.length > 10) {
    //     //   for (let i = 0; i < 10; i++) {
    //     //     t.musicListList.push({});
    //     //   }
    //     // }
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     // console.log(error);
    //   })
    //   .finally(function() {
    //     // always executed
    //   });
  }
};
</script>
<style src="./Music_box.css"></style>
