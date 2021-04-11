<template>
	<div>
		<div class="flex justify-center">
			<span
				class="flex items-center justify-center w-20 h-20 bg-black border-white rounded-full border-6 sm:border-8 sm:w-28 sm:h-28 text-red"
			>
				<span class="text-3xl uppercase sm:text-5xl font-rounded">Q{{ number }}</span></span
			>
		</div>
		<div class="px-8 mt-8 mb-12 text-center sm:mt-10 sm:mb-16 sm:px-16">
			<p class="text-2xl font-semibold leading-tight sm:text-4xl">{{ text }}</p>
		</div>

		<div class="relative">
			<div class="relative z-10 px-4 py-10 border-white bg-teal border-6 rounded-3xl">
				<ul class="space-y-8">
					<li v-for="option in options" :key="option.id">
						<button
							@click="select(option.id)"
							:disabled="isSelecting"
							class="relative flex items-center w-full px-6 py-3 text-white transition-colors delay-150 border-black border-opacity-25 rounded-full select-none border-3 sm:border-4 pl-18 h-14 sm:h-20 lg:pr-8 lg:pl-26 lg:py-4 group"
							:class="{
								'bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker': !selected,
								'bg-green': option.id === correct && isSelecting,
								'bg-red': selected === option.id && selected !== correct,
								'bg-grey': selected !== option.id && isSelecting,
								'cursor-default': isSelecting,
							}"
						>
							<span
								class="absolute left-0 flex items-center shadow-lg transform -translate-x-1.5 -translate-y-1/2 rounded-full top-1/2"
							>
								<span
									class="flex items-center justify-center w-16 h-16 transition-colors border-white rounded-full shadow-inner border-6 sm:border-8 sm:w-22 sm:h-22"
								>
									<transition
										mode="out-in"
										enter-active-class="transition-all transform"
										leave-active-class="transition-all transform"
										enter-class="scale-50 rotate-45 opacity-0"
										enter-to-class="scale-100 rotate-0 opacity-100"
										leave-class="scale-100 opacity-100"
										leave-to-class="scale-50 opacity-0"
									>
										<span
											v-if="!selected || (selected !== option.id && option.id !== correct)"
											class="text-2xl uppercase sm:text-4xl font-rounded text-shadow"
											key="letter"
											>{{ option.id }}</span
										>
										<span v-if="option.id === correct && isSelecting" key="tick">
											<!-- Tick -->
											<svg
												class="w-auto h-8 fill-current sm:h-10 filter drop-shadow"
												viewBox="0 0 79 80"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M59.8107 0.554733L28.6947 46.1334L14.9172 34.8241L0.531738 52.3468L33.4493 79.3734L78.532 13.3334L59.8107 0.554733Z"
												/>
											</svg>
										</span>
										<span v-if="selected === option.id && selected !== correct" key="cross">
											<!-- Cross -->
											<svg
												class="w-auto h-8 fill-current sm:h-10 filter drop-shadow"
												viewBox="0 0 79 78"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M39.5344 23.1602L62.2439 0.453369L78.2719 16.48L55.5627 39.1867L78.2719 61.8934L62.2439 77.92L39.5344 55.2132L16.825 77.92L0.796875 61.8934L23.5061 39.1867L0.796875 16.48L16.825 0.453369L39.5344 23.1602Z"
												/>
											</svg>
										</span>
									</transition>
								</span>
							</span>
							<span class="text-lg font-medium leading-none text-left sm:text-2xl"> {{ option.text }}</span>
						</button>
					</li>
				</ul>
			</div>
			<div class="absolute inset-x-0 bottom-0 mb-1 -mx-1 transform translate-y-1/2">
				<!-- Shadow - rounded -->
				<svg
					class="w-full h-auto text-black text-opacity-25 fill-current"
					viewBox="0 0 1226 64"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M50.6569 2.34314C52.1572 0.842849 54.192 0 56.3137 0H1169.69C1171.81 0 1173.84 0.842855 1175.34 2.34315L1223.34 50.3432C1228.38 55.3829 1224.81 64 1217.69 64H8.31374C1.1865 64 -2.38286 55.3829 2.65686 50.3431L50.6569 2.34314Z"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Question',
	props: {
		number: String,
		text: String,
		options: Array,
		correct: String,
	},
	emits: ['selection'],
	data() {
		return {
			isSelecting: false,
			selected: null,
		}
	},
	methods: {
		select(id) {
			this.isSelecting = true
			this.selected = id

			setTimeout(() => {
				if (id === this.correct) {
					this.$emit('selection', true)
				} else {
					this.$emit('selection', false)
				}

				this.isSelecting = false
				this.selected = null
			}, 2000)
		},
	},
}
</script>
