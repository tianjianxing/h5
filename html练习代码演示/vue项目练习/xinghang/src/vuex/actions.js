export default{
	actionsAddCount(context,n=0){
		console.log(context);
		context.commit("mutationsAddCount",n);
	},
	actionsReduceCount({commit},n=0){
		console.log(commit);
		commit("mutationsReduceCount",n);
	}
}