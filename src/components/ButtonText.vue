<template>
	<div class="relative top-0 text-2xl transition-all transform rounded-full shadow-lg sm:text-3xl hover:shadow focus-within:shadow hover:translate-y-1 focus-within:translate-y-1 2xl:text-4xl">
		<button @click="click($event)" class="px-6 py-3 text-white uppercase transition-colors border-white rounded-full shadow-inner select-none focus:outline-none text-shadow 2xl:px-8 2xl:py-4 border-6 font-rounded bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker">
			<slot />
		</button>
	</div>
</template>

<script>
export default {
	name: 'ButtonText',
	emits: ['clicked'],
	methods: {
		click(event) {
			this.$emit('clicked')
			event.currentTarget.blur()
		},
	},
}
</script>
