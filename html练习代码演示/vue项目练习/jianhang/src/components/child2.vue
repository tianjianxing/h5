<template>
	<div>
		<span>第{{n}}个区域</span>
		<br>
		<router-link to="/child2/grandChild">STATION</router-link>
		<router-view/>
	</div>
</template>
<script>
	export default{
		name:"child2",
		data(){
			return{
				n:2
			}
		}
	}
</script>