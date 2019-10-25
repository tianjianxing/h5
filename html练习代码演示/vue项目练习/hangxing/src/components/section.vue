<template>
	<div>
		<h2>这是主体内容</h2>
		<ol>
			<li v-for="(g,i) in books" :key="i">
				<h3>{{g.bname}}</h3>
				<p>boss:{{g.boss}}</p>
				<b>people:{{g.look}}</b>
				<br>
				<span>简介:{{g.desc}}</span>
				<br>
				<input type="button" value="点击阅读" @click="read(g.id,g.desc)">
			</li>
		</ol>
	</div>
</template>
<script>
export default {
	data(){
		return{
			books:[
				{
					id:"001",
					bname:"斗破苍穹",
					boss:"萧炎",
					desc:"这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！",
					look:"50k"
				},
				{
					id:"002",
					bname:"武动乾坤",
					boss:"林动",
					desc:"修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。武之极，破苍穹，动乾坤！",
					look:"30k"
				},
				{
					id:"003",
					bname:"大主宰",
					boss:"牧尘",
					desc:"大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路！",
					look:"20k"
				},
				{
					id:"004",
					bname:"元尊",
					boss:"周元",
					desc:"这是气掌乾坤的世界，磅礴宏伟，一气可搬山，可倒海，可翻天，可掌阴阳乾坤。世间源气分九品，三品称玄，六品成天，九品号圣。吾有一口玄黄气，可吞天地日月星！",
					look:"10k"
				}
			]
		}
	},
	methods:{
		read(id,desc){
			this.$router.push({
				path:"sectionChild",
				query:{
					id,
					desc
				}
			})

			// this.$router.push({
			// 	name:"sectionChild",
			// 	params:{
			// 		id,
			// 		desc
			// 	}
			// })

			// this.$router.push({
			// 	name:"sectionChild",
			// 	query:{
			// 		id,
			// 		desc
			// 	}
			// })


			//payh和params配合不能传参数
		}
	}
}
</script>
<style>
	li{
		border:1px dashed green;
	}
	li input{
		background-color: red;
		color: white;
	}
</style>