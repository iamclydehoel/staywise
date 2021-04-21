<template>
	<div class="absolute flex flex-col items-center justify-around w-full h-full">
		<router-link to="/birthday/">
			<button-text>The Birthday Cake Mistake</button-text>
		</router-link>
		<router-link to="/wayout/">
			<button-text>Know Your Way Out</button-text>
		</router-link>
	</div>
</template>

<script>
import ButtonText from '@/components/ButtonText.vue'

export default {
	name: 'Index',
	components: { ButtonText },
	mounted() {
		this.$emit('onLoad')
	},
}
</script>
