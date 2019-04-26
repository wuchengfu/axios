import Vue from "vue";
import Vuex from "vuex"
import footerStatus from './mod/footerStatus.js'
import collection from './mod/collection.js'
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		footerStatus,
		collection
	}
})