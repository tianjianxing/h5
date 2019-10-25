<template>
	<div>
		主体的具体内容如下
		<br>
		{{receivedId}}
		<br>
		{{receivedDesc}}
	</div>
</template>
<script>
export default {
	data(){
		return{
			receivedId:this.$route.query.id,
			receivedDesc:this.$route.query.desc


			// receivedDesc:this.$route.parms.id,
			// receivedDesc:this.$route.parms.desc
		}
	}
}
</script>
<style>

</style>