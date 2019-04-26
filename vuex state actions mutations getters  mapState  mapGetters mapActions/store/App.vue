<template>
  <div id="app">
    <img src="./assets/logo.png">
	<!-- {{this.$store.getters.footerStatus.isShow}} -->
    <router-view/>
		<Footer v-if="isShow" />
  </div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	import Footer from './components/footer.vue'
export default {
	components: {
		Footer
	},
  name: 'App',
	
	computed:{
		...mapState({
			isShow:state=>state.footerStatus.showFooter
		})
	},
	watch:{
		 $route(to,from){
			
			 if(to.name=="test" && from.name=="HelloWorld"){
				this.$store.dispatch("footerStatus/showFooter");
			 }else{
				 this.$store.dispatch("footerStatus/hideFooter");
			 }
		 }
	},
	mounted(){
		
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
