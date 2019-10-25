<template>
	<div class="session">
		这是主体
		<br>
		<img :src="imgsrc" alt="">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgsrc:require("../assets/1 (2).jpg")
			}
		}
	}
</script>
<style>
	.session img{
		height: 300px;
	}
</style>