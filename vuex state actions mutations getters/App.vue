<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
		<Footer v-if="isShowss" />
  </div>
</template>

<script>
	import Footer from './components/footer.vue'
export default {
	components: {
		Footer
	},
  name: 'App',
	watch:{
		 $route(to,from){
			 if(to.name=="test" && from.name=="HelloWorld"){
					this.$store.dispatch("showFooter");
			 }else{
				 this.$store.dispatch("hideFooter");
			 }
		 }
	},
	computed:{
		isShowss(){	
			return this.$store.getters.getChangeNum;
		}
	},
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
