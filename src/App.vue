<template>
  <div id="app">
    <Header />
    <HeaderNavStraight />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <transition>
    <router-view :key="key" />
    </transition>
  </div>
</template>
<script>
import Header from "./views/Header/Header.vue";
import HeaderNavStraight from "./components/Header_nav_straight/Header_nav_straight.vue";
export default {
  components: {
    Header,
    HeaderNavStraight
  },
	computed:{
	    key(){
	        return this.$route.path + Math.random();
	    }
	}
};
</script>

<style>
body {
  margin: 0;
  padding-top: 190px;
  overflow-x: scroll;
   background: #f9f9f9 url(./assets/page-bg-1.jpg);
}
#app {
  font-family: "Segoe UI", "Microsoft Yahei", "微软雅黑";
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background: #f9f9f9 url(./assets/page-bg-1.jpg); */
  /* overflow-x: scroll; */
}
</style>
