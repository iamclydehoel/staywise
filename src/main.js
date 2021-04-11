import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/main.css'

import { FlippingWidgets } from 'vue-turnjs'
// import 'vue-turnjs/dist/vue-turnjs.esm.css'
Vue.use(FlippingWidgets)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
