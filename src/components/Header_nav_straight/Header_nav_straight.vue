<template src="./Header_nav_straight.html"></template>
<script>
export default {
  data() {
    return {
      listId: 0,
      checkId: 0,
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
      activeName: 0
    };
  },
   methods: {
    listSelect(cIndex, nIndex) {
      this.listId = nIndex;
      this.checkId = cIndex;
    },
   }
};
</script>
<style src="./Header_nav_straight.css" scope></style>
