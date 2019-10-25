<template>
  <div>
    <h3>{{$store.state.count}}</h3>
    <br>
    <input type="button" value="+" @click="handleAdd(5)">
    <input type="button" value="-" @click="handleReduce(5)">
    <input type="button" value="异步+" @click="handleActionsAdd(5)">
    <input type="button" value="异步-" @click="handleActionsReduce(5)">
    <br>
    {{$store.getters.gettersCount}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
    handleAdd(n){
      this.$store.commit("mutationsAddCount",n);
    },
    handleReduce(n){
      this.$store.commit("mutationsReduceCount",n);
    },
    handleActionsAdd(n){
      this.$store.dispatch("actionsAddCount",n);
    },
    handleActionsReduce(n){
      this.$store.dispatch("actionsReduceCount",n);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
