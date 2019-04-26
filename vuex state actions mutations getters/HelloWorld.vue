<template>
	<div>
		{{this.$store.state.showFooter}}----{{this.$store.state.changableNum}}
		<br>
		<br>
		{{this.$store.getters.isShow}}----{{this.$store.getters.getChangeNum}}
		<br>
		<br>
		<br>
		<button @click="toTrue">toTrue</button>
		<br/>
		<br/>
		<br/>
		<button @click="tofalse">toFalse</button><br/><br/><br/>
		<button @click="addNum">addNum</button>
		<br/>
		<br/>
		<br/>
		<button @click="one">footerTrue</button><br/>
		<br/>
		<br/>
		<button @click="two">footerFalse</button><br/>
		<br/>
		<button @click="three">getNum</button><br/>
		<div>
			<router-link to="/test">
				切换页面
			</router-link>
		</div>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				heloo:0
			}
		},
		
		methods:{
		
			toTrue(){
				
				this.$store.commit("shows");
			},
			tofalse(){
				this.$store.commit("hides");
			},
			addNum(){
				this.$store.commit("newNum",2)
			},
			one(){
				this.$store.dispatch("showFooter");
			},
			two(){
				this.$store.dispatch("hideFooter");
			},
			three(){
				this.$store.dispatch("getNum",3);
			}
		},
	
		mounted(){
			this.heloo=this.$store.getters.isShow;
		}
	}
</script>