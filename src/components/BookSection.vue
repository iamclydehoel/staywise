<template>
	<div class="h-full">
		<transition enter-active-class="transition-opacity duration-500 delay-500" leave-active-class="transition duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
			<template v-if="page > 0">
				<div class="absolute z-50 pt-5 pl-5">
					<button-icon icon="home" @clicked="firstPage" />
				</div>
			</template>
		</transition>

		<div class="flex flex-col items-center w-full h-full px-6 overflow-hidden">
			<div class="flex-grow h-full min-h-20"></div>

			<div class="flex-grow-0 w-full">
				<div class="max-w-full mx-auto w-available">
					<div class="transition-transform duration-1000 origin-top transform" :class="page === 0 ? 'scale-90' : 'scale-100'">
						<transition appear appear-active-class="transition-opacity duration-1000" appear-class="opacity-0" appear-to-class="opacity-100">
							<book-panel>
								<div class="bg-grey" @mousedown="startGrab" @mouseup="endGrab" :class="isGrabbing ? 'cursor-grabbing' : 'cursor-grab'">
									<div v-bookblock="options" v-hammer:swipe.horizontal="(event) => onSwipe(event)" class="bb-bookblock" ref="bookblock">
										<div class="bb-item">
											<img ref="cover" :src="require(`@/assets/images/${story}/cover.svg`)" class="w-full h-auto pointer-events-none select-none" height="970" width="1370" alt="Cover" />
										</div>
										<div class="bb-item" v-for="index in pages" :key="`page-${index}`">
											<book-page v-if="index === page || index === page - 1 || index === page + 1" :ref="`page-${index}`" :autoPlay="false" :loop="true" :animationData="require(`@/assets/animations/${story}/page-${index}.json`)" />
										</div>
									</div>
								</div>
							</book-panel>
						</transition>
					</div>
				</div>
			</div>

			<div class="relative flex-grow w-full h-full min-h-20">
				<transition mode="out-in" appear appear-active-class="transition-all duration-700 delay-300 transform" appear-class="translate-y-full opacity-0" appear-to-class="translate-y-0 opacity-100" enter-active-class="transition-opacity duration-500 delay-200" leave-active-class="transition-opacity duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
					<template v-if="page === 0">
						<div class="absolute flex items-center justify-center w-full h-full -mt-16" key="nav-1">
							<button-text @clicked="nextPage">
								Start book
							</button-text>
						</div>
					</template>
					<template v-else>
						<div class="absolute flex items-end justify-between w-full h-full pb-4" key="nav-2">
							<button-icon icon="prev" text="Back" @clicked="prevPage" />

							<template v-if="page !== total">
								<button-icon icon="next" text="Next" @clicked="nextPage" />
							</template>
							<template v-else>
								<button-icon icon="next" text="Quiz" @clicked="changeSection('quiz')" />
							</template>
						</div>
					</template>
				</transition>
			</div>

			<audio :src="audio" ref="audioPlayer"></audio>
		</div>
	</div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue'
import ButtonText from '@/components/ButtonText.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import BookPanel from '@/components/BookPanel.vue'

export default {
	name: 'BookSection',
	components: {
		ButtonText,
		ButtonIcon,
		BookPanel,
		BookPage: LottieAnimation,
	},
	props: ['story', 'pages'],
	data() {
		return {
			page: 0,
			total: null,
			audio: null,
			isGrabbing: false,
			options: {
				speed: 800,
				shadowSides: 0.8,
				shadowFlip: 0.7,
				autoplay: false,
				hasCover: false,
				orientation: 'vertical',
				perspective: 2000,
			},
		}
	},
	methods: {
		nextPage() {
			this.$refs.bookblock.bookblock.next()
			this.updatePage()

			if (this.page > 0) {
				setTimeout(() => {
					this.$refs[`page-${this.page}`][0].play()
					this.playAudio(this.page)
				}, 1000)
			}

			if (this.page > 1) {
				this.$refs[`page-${this.page - 1}`][0].stop()
			}
		},
		prevPage() {
			this.$refs.bookblock.bookblock.prev()
			this.updatePage()

			if (this.page != 0) {
				setTimeout(() => {
					this.$refs[`page-${this.page}`][0].play()
					this.playAudio(this.page)
				}, 1000)
			}

			this.$refs[`page-${this.page + 1}`][0].stop()
		},
		updatePage() {
			this.page = this.$refs.bookblock.bookblock.currentIdx
		},
		playAudio(index) {
			this.audio = require(`@/assets/audio/${this.story}/page-${index}.wav`)

			this.$nextTick(() => {
				this.$refs.audioPlayer.play()
			})
		},
		firstPage() {
			this.$refs.bookblock.bookblock.first()
			this.updatePage()
		},
		onSwipe(event) {
			if (event.type === 'swipeleft') {
				if (this.page < this.total) {
					this.nextPage()
				}
			} else if (event.type === 'swiperight') {
				if (this.page !== 0) {
					this.prevPage()
				}
			}
		},
		startGrab() {
			this.isGrabbing = true
		},
		endGrab() {
			setTimeout(() => {
				this.isGrabbing = false
			}, 200)
		},
		changeSection(section) {
			this.$emit('onSectionChange', section)
		},
	},

	mounted() {
		this.page = this.$refs.bookblock.bookblock.currentIdx
		this.total = this.$refs.bookblock.bookblock.itemsCount - 1

		let first = true

		document.addEventListener('touchstart', () => {
			if (first) {
				this.$refs.audioPlayer.play()
			}
			first = false
		})

		// document.addEventListener('keyup', (event) => {
		// 	if (event.key === 'ArrowRight') {
		// 		this.nextPage()
		// 	}

		// 	if (event.key === 'ArrowLeft') {
		// 		this.prevPage()
		// 	}

		// 	if (event.key === 'Escape') {
		// 		this.firstPage()
		// 	}
		// })
	},
}
</script>
