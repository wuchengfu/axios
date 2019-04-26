<template>
	<div>
		<div>
			<!-- 这里的方法对应的是  collection里面的action里面放方法 -->
			<ul>
				<li v-for="(item,index) in itemss">
					{{index}}:   {{item}}
				</li>
			</ul>
			<button @click="invokePushItems(itemss)">把上面名称加入购物车加入购物车</button>
			
			
			<p @click="fnVal">获取值</p>
			
			<br><br><br><br><br>
			购物车内容如下
			<ul>
				<li v-for="(item,index) in lisArr">
					id:  {{item.id}}<br><br>  name:  {{item.name}}
					<br><br>  price:  {{item.price}}
				</li>
			</ul>
		</div>
		<div>
			<router-link to="/test">
				切换页面
			</router-link>
		</div>
		
	</div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return{
				itemss:{
					id:1,
					name:"苹果",
					price:15
				}
			}
		},
		methods:{
		/* 	 ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
          'invokePushItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
			]), */
			...mapActions("collection",['invokePushItems']),
			fnVal(){
				console.log(this.$store.state.collection.collects)
			}
		},
		
		mounted(){
			
		},
		computed: {
			...mapGetters("collection",{
				lisArr:'renderCollects',
			})
		},
	}
</script>

<style>
	li{
		list-style: none;
	}
</style>