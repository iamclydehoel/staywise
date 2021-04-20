<template>
	<div>
		<div class="relative top-0 text-3xl transition-all transform rounded-full shadow-lg hover:shadow focus-within:shadow hover:translate-y-1 focus-within:translate-y-1 2xl:text-4xl">
			<button @click="click($event)" class="flex items-center justify-center text-white uppercase transition-colors border-white rounded-full shadow-inner select-none focus:outline-none border-6 bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker" :class="icon === 'home' ? 'w-18 h-18 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24' : 'h-16 w-16 sm:h-18 sm:w-18 2xl:h-20 2xl:w-20'">
				<template v-if="icon === 'next'">
					<svg class="w-auto h-6 sm:h-8 -mr-1.5 fill-current filter drop-shadow" viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.950195 37.4538C0.950195 38.9568 2.62016 39.8788 3.88916 39.0898L34.4482 20.2689C34.5386 20.1513 34.5874 20.0071 34.5874 19.8589C34.5874 19.7106 34.5386 19.5664 34.4482 19.4488L3.88818 0.628878C2.62118 -0.161122 0.950195 0.758836 0.950195 2.26084V37.4538Z" />
					</svg>
				</template>
				<template v-else-if="icon === 'prev'">
					<svg class="w-auto h-6 sm:h-8 -ml-1.5 fill-current filter drop-shadow" viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg">
						<path d="M34.0769 37.4511C34.0769 38.9541 32.4391 39.8751 31.1521 39.0861L0.591064 20.265C0.493764 20.1506 0.440186 20.0052 0.440186 19.855C0.440186 19.7048 0.493764 19.5594 0.591064 19.445L31.1509 0.623053C32.4389 -0.164947 34.0769 0.755063 34.0769 2.25806V37.4511Z" />
					</svg>
				</template>
				<template v-else-if="icon === 'home'">
					<svg class="w-auto h-8 sm:h-10 2xl:h-12 -mt-1.5 fill-current filter drop-shadow" viewBox="0 0 79 77" xmlns="http://www.w3.org/2000/svg">
						<path d="M78.244 33.1041L41.592 1.65346C40.5107 0.733452 38.9151 0.733452 37.8339 1.65346L1.18176 33.1041C0.0306971 34.0921 0.729237 35.9787 2.24644 35.9787H8.2771V72.3747C8.2771 74.3987 9.91883 76.04 11.9427 76.04H67.484C69.508 76.04 71.1494 74.3987 71.1494 72.3747V35.9787H77.18C78.6974 35.9787 79.3947 34.0921 78.244 33.1041Z" />
					</svg>
				</template>
			</button>
		</div>
		<div v-if="text" class="mt-5 text-lg font-bold text-center uppercase select-none sm:text-xl">
			{{ text }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'ButtonIcon',
	props: ['icon', 'text'],
	emits: ['clicked'],
	methods: {
		click(event) {
			this.$emit('clicked')
			event.currentTarget.blur()
		},
	},
}
</script>
