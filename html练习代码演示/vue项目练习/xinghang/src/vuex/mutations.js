export default{
	mutationsAddCount(state,n=0){
		state.count += n;
	},
	mutationsReduceCount(state,n=0){
		state.count -= n;
	}
}