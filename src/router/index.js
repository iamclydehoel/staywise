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
		path: '/birthday/',
		name: 'Birthday',
		component: () => import('../views/Birthday.vue'),
	},
	{
		path: '/wayout/',
		name: 'WayOut',
		component: () => import('../views/WayOut.vue'),
	},
	{
		path: '/template/',
		name: 'Template',
		component: () => import('../views/Template.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
