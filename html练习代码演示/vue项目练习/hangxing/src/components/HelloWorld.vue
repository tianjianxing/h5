<template>
  <div class="hello">
    hello world
    <br>
    <router-link :to="{
      path: '/header',
      query:{
        mess
      }
    }">
    去往首页
  </router-link>
  <ul>
    <router-link tag="li" to="/header">首页</router-link>
  </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      mess:"来自helloworld的信息"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
