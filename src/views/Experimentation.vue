<template>
	<div>
		<div class="w-2/3 py-16 mx-auto">
			<div
				class="bg-grey"
				@mousedown="startGrab"
				@mouseup="endGrab"
				:class="isGrabbing ? 'cursor-grabbing' : 'cursor-grab'"
			>
				<div
					v-bookblock="options"
					v-hammer:swipe.horizontal="(event) => onSwipe(event)"
					class="bb-bookblock"
					ref="bookblock"
				>
					<div class="bb-item">
						<img
							ref="cover"
							src="@/assets/images/birthday/cover.svg"
							class="w-full h-auto pointer-events-none select-none"
						/>
					</div>
					<div class="bb-item" v-for="index in 6" :key="`page-${index}`">
						<lottie
							:ref="`page-${index}`"
							:autoPlay="false"
							:loop="true"
							:animationData="require(`@/assets/animations/birthday/page-${index}.json`)"
						/>
					</div>
				</div>
			</div>
		</div>

		<audio :src="audio" ref="audioPlayer"></audio>

		<div class="flex flex-col items-center">
			<button @click="firstPage">Home</button>
			<template v-if="page > 0">
				<button @click="prevPage">Previous</button>
			</template>
			<template v-else>
				<p>First</p>
			</template>
			<span>{{ page }}</span>
			<template v-if="page !== total">
				<button @click="nextPage">Next</button>
			</template>
			<template v-else>
				<p>Last</p>
			</template>
		</div>
	</div>
</template>

<script>
import LottieAnimation from 'lottie-web-vue'

export default {
	name: 'Experimentation',
	components: {
		Lottie: LottieAnimation,
	},
	data() {
		return {
			page: null,
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
					this.playAudio()
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
					this.playAudio()
				}, 1000)
			}

			this.$refs[`page-${this.page + 1}`][0].stop()
		},
		updatePage() {
			this.page = this.$refs.bookblock.bookblock.currentIdx
		},
		playAudio() {
			for (let index = 1; index <= this.total; index++) {
				if (this.page === index) {
					this.audio = require(`@/assets/audio/birthday/page-${index}.wav`)

					this.$nextTick(() => {
						this.$refs.audioPlayer.play()
					})
				}
			}
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
	},

	mounted() {
		this.page = this.$refs.bookblock.bookblock.currentIdx
		this.total = this.$refs.bookblock.bookblock.itemsCount - 1
	},
}
</script>
