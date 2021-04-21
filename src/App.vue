<template>
	<div class="h-full">
		<backdrop />

		<transition mode="out-in" appear appear-active-class="transition-all duration-300 delay-300 transform" appear-class="translate-y-8 opacity-0" appear-to-class="translate-y-0 opacity-100" enter-active-class="transition-opacity duration-700" leave-active-class="transition-opacity duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
			<loading v-if="loading" />
		</transition>

		<router-view @onLoad="isLoaded()" />
	</div>
</template>

<script>
import Backdrop from '@/components/Backdrop.vue'
import Loading from '@/components/Loading.vue'

export default {
	name: 'App',
	components: {
		Backdrop,
		Loading,
	},
	data() {
		return {
			loading: true,
		}
	},
	methods: {
		isLoaded() {
			this.loading = false
		},
	},
}
</script>
