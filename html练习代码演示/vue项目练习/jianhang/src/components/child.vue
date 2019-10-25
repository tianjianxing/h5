<template>
	<div>
		<span>第{{n}}个区域</span>
		<br>
		<router-link to="/child/grandChild">HELP</router-link>
		<router-view/>
	</div>
</template>
<script >
	export default{
		name:"child",
		data(){
			return{
				n:1
			}
		}
	}
</script>

