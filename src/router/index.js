import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('../views/Index.vue'),
	},
	{
		path: '/birthday',
		name: 'Birthday',
		component: () => import('../views/Birthday.vue'),
	},
	{
		path: '/experimentation',
		name: 'Experimentation',
		component: () => import('../views/Experimentation.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
