
<template>

    <div>

    	  <router-view> </router-view>
		
	</div>
</template>

<script>

import Welcome from './components/Welcome';

export default {

	 components: {
           'Welcome': Welcome 


    },
    
    
    data () {

        return {

	     
        }
    },

    computed: {

    	

    },

    methods: {

       	
    }    

}
</script>


<style scoped>


</style>
