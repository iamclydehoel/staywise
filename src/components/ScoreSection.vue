<template>
	<div class="h-full">
		<div class="absolute z-50 pt-5 pl-5">
			<button-icon icon="home" @clicked="changeSection('book')" />
		</div>

		<div class="absolute flex flex-col items-center w-full min-h-full py-6">
			<div class="w-full max-w-lg px-6 my-auto 2xl:max-w-xl">
				<div class="flex justify-center">
					<span class="flex items-center justify-center w-auto h-20 px-5 text-center bg-black border-white rounded-full border-6 2xl:border-8 sm:h-24 2xl:h-28 text-red">
						<span class="text-2xl leading-none uppercase sm:text-3xl 2xl:text-4xl sm:leading-none font-rounded">Quiz<br />complete</span>
					</span>
				</div>

				<div class="flex items-center justify-center px-8 mb-5 text-center mt-7 sm:mt-8 sm:mb-6 2xl:mt-10 2xl:mb-8">
					<p class="text-xl font-semibold leading-tight sm:text-2xl 2xl:text-3xl">You scored</p>
				</div>

				<div class="relative z-20 flex justify-center -mb-32 sm:-mb-36 2xl:-mb-40">
					<span class="flex flex-col items-center justify-center border-8 border-white rounded-full w-60 h-60 sm:w-64 sm:h-64 2xl:w-72 2xl:h-72 bg-orange">
						<span class="text-white text-8xl 2xl:text-9xl font-rounded">{{ score }}</span>
						<span class="mb-4 text-3xl sm:text-4xl font-rounded">out of 3</span>
					</span>
				</div>

				<score-panel>
					<div class="px-2 pt-6 pb-3 text-lg leading-snug text-center text-white border-4 border-black border-opacity-25 sm:pt-8 sm:pb-6 sm:px-6 sm:text-xl 2xl:text-2xl -mt-7 rounded-2xl" :class="{ 'bg-green': score >= 2, 'bg-red': score <= 1 }">
						<template v-if="score === 0">
							<h3 class="mb-1 font-semibold">That's not quite right.</h3>
							<p>Why not listen to the story again and retry the quiz?</p>
						</template>
						<template v-else-if="score === 1">
							<h3 class="mb-1 font-semibold">You're on the right track</h3>
							<p>but not quite there yet. Listen to the story again and retry the quiz.</p>
						</template>
						<template v-else-if="score === 2">
							<h3 class="mb-1 font-semibold">That's a good effort!</h3>
							<p>Why not retry and see if you can get all three next time?</p>
						</template>
						<template v-else-if="score === 3">
							<h3 class="mb-1 text-xl font-semibold sm:text-2xl 2xl:text-3xl">Well done!</h3>
							<p>You answered them all correctly.</p>
						</template>
					</div>

					<div class="flex justify-center mt-5 sm:mt-6 sm:mb-3 2xl:mt-8 2xl:mb-5">
						<button-text @clicked="changeSection('quiz')">Try again</button-text>
					</div>
				</score-panel>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonIcon from '@/components/ButtonIcon.vue'
import ButtonText from '@/components/ButtonText.vue'
import ScorePanel from '@/components/ScorePanel.vue'

export default {
	name: 'ScoreSection',
	components: { ButtonIcon, ButtonText, ScorePanel },
	props: ['score'],
	methods: {
		changeSection(section) {
			this.$emit('onSectionChange', section)
		},
	},
}
</script>
