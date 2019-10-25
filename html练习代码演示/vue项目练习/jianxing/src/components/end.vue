<template>
	<div class="end">
		这是结尾
		<br>
		<img v-for="(s,i) in imgs" :src="s" alt="" :key="i">
		<br>
		<router-link to="/search">点击搜索</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgs:[
					"/static/images/3.jpg",
					"/static/images/4.jpg"
				]
			}
		}
	}
</script>
<style>
	.end img{
		height: 300px;
	}
</style>