<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios";
// import jsonp from "jsonp";

export default {
  name: "App",
  components: {},
  data() {
    return {
      
    }
  },
  mounted() {
    // cors 跨域
    // let url =
    //   "https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list";
    // axios.get(url).then((res) => {
    //   console.log("res", res);
    // })
    // jsonp
    // let url = "https://www.imooc.com/activity/servicetime";
    // jsonp(url, (err, res) => {
    //   let result = res;
    //   this.data = result;
    // });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
