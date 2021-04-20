<template>
	<div class="h-full">
		<backdrop />
		<router-view />
	</div>
</template>

<script>
import Backdrop from '@/components/Backdrop.vue'

export default {
	name: 'App',
	components: {
		Backdrop,
	},
}
</script>
