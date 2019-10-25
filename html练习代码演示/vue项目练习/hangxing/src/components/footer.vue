<template>
	<div>
		这是尾部内容
		<br>
		<router-link to="/footer/footerChild1">页尾一的具体内容</router-link>
		<br>
		<router-link to="/footer/footerChild2">页尾二的具体内容</router-link>
		<br>
		<router-link to="/footer/footerChild3">页尾三的具体内容</router-link>
		<br>
		<router-view/>
	</div>
</template>
<script>
export default {

}
</script>
<style>
	.router-link-active{
		background-color: yellow;
		border: 3px solid red;
		color: green;
	}
	/*.router-link-exact-active{
		color: green;
	}*/
</style>