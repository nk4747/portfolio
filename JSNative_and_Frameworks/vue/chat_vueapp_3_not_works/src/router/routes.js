// import Vue from 'vue';

// import Router from 'vue-router';


// Vue.use(Router);


// export default new Router({
// 	routes: [
// 		{
// 			path: '/',
// 			name: 'Welcome',
// 			component: Welcome
// 		}
// 	]

// })



import Welcome from '../components/Welcome';
import Chat from '../components/Chat';

export default [

	{

	path: '/',
	component: Welcome,
	name: 'Welcome'

	},

	{

	 path: '/chat', 
	 component: Chat, 
	 name: 'Chat',
	 props:true,
	 beforeEnter: (to,from, next) => {
	 	if(to.params.name){
	 		next()

	 	} else {
	 		next({ name: 'Welcome'})
	 	}
	 }


	}

]