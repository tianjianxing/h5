<template>
	<div>
		scoped示例
		<scoped-child></scoped-child>
	</div>
</template>
<script>
import ScopedChild from '@/components/scopedChild'
export default {
	components:{
		ScopedChild
	}
}
</script>
<style >
	div{
		color: red;
	}
</style>