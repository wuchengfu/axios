<template>
  <div class="hello">
   
  </div>
</template>

<script>
	 import { getTest } from '../server/index.js'
export default {
 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	mounted(){
		getTest({
		        url: 'topic/getTopic/105/138'
		      })
		      .then(response => {
							console.log("成功")
		       console.log(response.data)
		 })

		
	}
}
</script>

</style>
