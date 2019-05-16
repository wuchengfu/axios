<template>
	<div>
		<ul>
			1212
		</ul>
	</div>
</template>


<script>
	
	// http://192.168.0.109:8080/live/course/lists
	export default{
		data(){
			return{
				zhangruyan:[],
			}
		},
		methods:{
		 fns(){
			 this.$put("live/teacher/lists",{
					 name: "",
					pageSize: 10
				}).then(suss=>{
					
					console.log(suss,"----post");
				})
			}
		},
		mounted(){
			this.fns();
			this.$patch("/sys/macro/value?value=kecheng").then(suss=>{
				console.log(suss)
			})
		}
	}
	
</script>