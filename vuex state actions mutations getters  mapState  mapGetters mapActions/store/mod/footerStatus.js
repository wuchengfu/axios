const state={
	showFooter:false,
	num:0
}
const getters ={
	isShow(state){
		return state.showFooter;
	},
	changeNum(state){
		return state.num;
	}
}

const mutations={
	shows(state){
		state.showFooter=true;
	},
	hides(state){
		state.showFooter=false;
	},
	getNum(state,sum){
		state.num+=sum;
	}
}


const actions = {
	showFooter(context){
		context.commit("shows");
	},
	hideFooter(context){
		context.commit("hides");
	},
	gitNuber(context,numbers){
		context.commit("getNum",numbers)
	}
}


export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}
