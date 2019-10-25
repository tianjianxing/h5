<template>
  <div class="hello">
    <router-link to="/home">主页</router-link>
    <router-link to="/session">主体</router-link>
    <router-link to="/end">结尾</router-link>
    <router-link to="/extend">需要时加载</router-link>
    <router-link to="/scoped">scoped demo</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
