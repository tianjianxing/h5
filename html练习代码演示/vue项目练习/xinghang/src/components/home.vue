<template>
	<div>
		{{$store.state.count}}
		<br>
		{{$store.getters.gettersCount}}
		<br>
		<br>
		<input type="button" value="按钮+" @click="handleAdd(1)">
		<input type="button" value="按钮-" @click="handleReduce(1)">
		<br>
		{{cc}}----{{ggcc}}
		<br>
		<br>
		<div class="div">
		    <el-button @click="show2 = !show2">Click Me</el-button>

		    <div style="display: flex; margin-top: 20px; height: 100px;">
		      <transition name="el-zoom-in-center">
		        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
		      </transition>

		      <transition name="el-zoom-in-top">
		        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
		      </transition>

		      <transition name="el-zoom-in-bottom">
		        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
		      </transition>
		    </div>
  		</div>
  		<br>
  		<i class="el-icon-edit"></i>
  		<i class="el-icon-share"></i>
  		<i class="el-icon-delete"></i>
  		<el-button type="primary" icon="el-icon-search">搜索</el-button>
  		<i class="el-icon-user-solid"></i>
  		<i class="el-icon-star-on"></i>
  		<i class="el-icon-warning"></i>
	</div>
</template>
<script>
import {mapActions,mapMutations,mapState,mapGetters} from 'vuex'
export default {
	data:()=>({
		show2:true
	}),
	methods:{
		...mapActions({
			handleAdd:"actionsAddCount",
			handleReduce:"actionsReduceCount"
		}),
		...mapMutations({
			mutationsAdd:"mutationsAddCount",
			mutationsReduce:"mutationsReduceCount"
		})
	},
	computed:{
		...mapState({
			cc:'count'
		}),
		...mapGetters({
			ggcc:'gettersCount'
		})
	}
}
</script>
<style>
	.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .div{
  	margin: auto;
  }
</style>