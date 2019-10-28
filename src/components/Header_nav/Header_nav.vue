<template src="./Header_nav.html"></template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
        listId: 0,
        checkId: 0,
        listId1: 0,
        checkId1: 0,
      navList: [
        {
          titleName: "新歌",
          order:"first",
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
          order:"second",
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
      activeName: 0
    };
  },
  computed: {
      key(){
	        return this.$route.path;
	    },
    // listId: {
    //   set(val) {
    //     // this.$store.state.listId = val;
    //     this.$store.commit("SETlistId", val);
    //   },
    //   get() {
    //     return this.$store.state.listId;
    //   }
    // },
    // checkId: {
    //   set(val) {
    //     // this.$store.state.checkId = val;
    //     this.$store.commit("SETcheckId", val);
    //   },
    //   get() {
    //     return this.$store.state.checkId;
    //   }
    // }
  },
  methods: {
    listSelect(cIndex, nIndex) {
      this.listId = nIndex;
      this.checkId = cIndex;
        console.log(cIndex,nIndex);
        console.log(this.checkId,this.listId);
    },
    listSelect1(c1Index, n1Index) {
      this.listId1 = n1Index;
      this.checkId1 = c1Index;
      console.log("n1Index ",n1Index);
       console.log("n1Index ",n1Index);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    test(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    //  let listId = this.$store.state.listId;
    //  let checkId = this.$store.state.checkId;
    //       console.log(listId);
    //        console.log(checkId);
    //       this.$store.dispatch('SETlistIdfn',this.listId,this.checkId)
    //         axios.post('http://localhost:52830/api/account')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //     axios.post('http://localhost:52830/api/account').then(res=>{
    //     console.log(res);
    //   })
  }
};
</script>
<style src="./Header_nav.css" scope></style>
