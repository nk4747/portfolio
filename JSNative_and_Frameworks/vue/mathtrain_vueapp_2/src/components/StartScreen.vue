<template>

   <div class="alert alert-secondary">
   		<h3> Are you ready? </h3>
		<button class="btn btn-success" @click="$emit('onStart')"> Start</button>
   </div>
</template>

<script>

export default {
    
    
    data () {

        return {
        		
        }
    },

    methods: {



    }

    

}
</script>


<style scoped>

	.alert {

		text-align: center;
		background-color: lightgrey;
	}

	h3, .btn {

	margin: 30px 0;

	}


</style>
