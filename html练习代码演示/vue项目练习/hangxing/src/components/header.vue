<template>
	<div>
		这是首页内容
		<br>
		{{receivedmess}}
		<br>
		<input type="button" value="请求数据" @click="getData">
		<ul>
			<li v-for="(n,i) in resArr">
				{{n.type+n.date}}
			</li>
		</ul>
		<ol>
			<li v-for="(m,i) in resARR">
				{{m.type+m.date}}
			</li>
		</ol>
	</div>
</template>
<script>
export default {
	 data(){
	    return {
	      receivedmess:this.$route.query.mess,
	      resArr:[],
	      resARR:[]
	    }
 	 },
 	 methods:{
 	 	getData(){
 	 		this.axios.get('https://www.apiopen.top/weatherApi')
 	 				  .then(function(res){
 	 				  	console.log(res);
 	 				  	this.resArr=res.data.data.forecast;
 	 				  }.bind(this))
 	 				  .catch(function(err){
 	 				  	console.log(err);
 	 				  })


 	 		this.axios.post("/api/weatherApi",{
 	 			city:"郑州"
 	 		})
 	 		.then((res)=>{
 	 			console.log(res);
 	 			this.resArr=res.data.data.forecast;
 	 		})
 	 		.catch((err)=>{
 	 			console.log(err)
 	 		})



 	 		this.axios({
 	 			url:'/api/weatherApi',
 	 			method:"post",
 	 			data:{
 	 				city:"上海"
 	 			}
 	 		})
 	 		.then((res)=>{
 	 			console.log(res);
 	 			this.resARR=res.data.data.forecast;
 	 		})
 	 		.catch((err)=>{
 	 			console.log(err);
 	 		})
 	 	}
 	 }
}
</script>
<style scoped lang="less">
	ul{
		color: red;
	}
	ol{
		color: green;
	}
</style>