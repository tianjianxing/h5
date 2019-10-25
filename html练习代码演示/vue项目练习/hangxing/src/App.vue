<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
     <router-link to="/" exact>hello world</router-link>
    <br>
    <router-link to="/header">首页</router-link>
    <router-link to="/section">主体</router-link>
    <router-link to="/footer">尾部</router-link>
    <router-link to="/sectionChild">（主体具体内容）</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
