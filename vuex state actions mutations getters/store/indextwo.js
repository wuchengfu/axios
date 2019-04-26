import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
//相当于全局变量
const state={
	 showFooter: false,
     changableNum:1,
}

// 实时监听state值的变化(最新状态)
const getters={
	isShow(state){  //方法名随便命名, 这个方法主要监听changableNum值
		return state.changableNum;
	},
	getChangeNum(state){
		return state.showFooter;
	}
}

// 用于改变state里面的属性值， 
const mutations={
	shows(state){
		
		state.showFooter=true;
	},
	hides(state){
		
		state.showFooter=false;
	},
	newNum(state,sum){
		state.changableNum+=sum;
	}
}
/* 
	actions方法可以包含任意异步操作,这里面的方法异步触发mutations里面的方法
	actions里面自定义方法里面接收一个context参数,和要变化的形参
	context于store实例具有相同的方法和属性,所以要执行 context.commit("mutations里面的方法"),然后放入vuex里面
 */
const actions ={
	showFooter(context){
		context.commit("shows");
	},
	hideFooter(context){
		context.commit("hides");
	},
	getNum(context,nums){
		context.commit("newNum",nums);
	}
}
const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store;