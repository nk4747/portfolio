<template>

   <div class="alert" :class="'alert-' + type">
   	<h2>{{ text}} </h2>
	<hr>
	<button class="btn btn-primary" @click="$emit('onNext')">

		Contine
	</button>

   </div>
   
</template>

<script>

export default {
    
    data () {

        return {
        		
        }
    },

    props: ['type', 'text']

    

}
</script>


<style scoped>

.alert{

	text-align: center;

}

h2, .btn {

	margin: 20px 0;

}


</style>
