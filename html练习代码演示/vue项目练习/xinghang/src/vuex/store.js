import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:0
	},
	// mutations:{
	// 	mutationsAddCount(state,n=3){
	// 		state.count += n;
	// 	},
	// 	mutationsReduceCount(state,n=3){
	// 		state.count -= n;
	// 	}
	// },
	mutations,


//此处n是默认值，如果helloworld中传值就用它传的值，如果没有就用默认值


	// actions:{
	// 	actionsAddCount(aaa,n=3){
	// 		console.log(aaa);
	// 		aaa.commit("mutationsAddCount",n);
	// 	},
	// 	actionsReduceCount({commit},n=3){
	// 		console.log(commit);
	// 		commit("mutationsReduceCount",n);
	// 	}
	// },
	actions,
	getters:{
		gettersCount(state){
			return state.count *100;
		}
	}
})