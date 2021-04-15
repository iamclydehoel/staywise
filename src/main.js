import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/main.css'

// import BookBlock from 'vue-bookblock'
// Vue.use(BookBlock)
import BookBlock from './directives/bookblock'
Vue.use(BookBlock)

import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

import LottieAnimation from 'lottie-web-vue'
Vue.use(LottieAnimation)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
