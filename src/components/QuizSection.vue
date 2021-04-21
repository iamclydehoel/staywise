<template>
	<div class="h-full">
		<div class="absolute z-50 pt-5 pl-5">
			<button-icon icon="home" @clicked="changeSection('book')" />
		</div>

		<div class="absolute flex flex-col items-center w-full min-h-full py-6">
			<div class="w-full max-w-lg px-6 my-auto 2xl:max-w-xl">
				<transition-opacity>
					<div v-for="(question, index) in questions" v-if="index + 1 === current" :key="'question-header-' + index">
						<div class="flex justify-center">
							<span class="flex items-center justify-center w-20 h-20 bg-black border-white rounded-full border-6 2xl:border-8 sm:w-24 sm:h-24 2xl:w-28 2xl:h-28 text-red">
								<span class="text-3xl uppercase select-none sm:text-4xl 2xl:text-5xl font-rounded">Q{{ index + 1 }}</span>
							</span>
						</div>
						<div class="flex items-center justify-center px-6 my-4 text-center sm:h-18 2xl:h-20 sm:my-5 2xl:my-10">
							<p class="text-2xl font-semibold leading-tight sm:text-3xl 2xl:text-4xl">{{ question.text }}</p>
						</div>
					</div>
				</transition-opacity>

				<transition-opacity>
					<div v-for="(question, index) in questions" v-if="index + 1 === current" class="relative z-20 flex justify-center -mb-20 pointer-events-none select-none sm:-mb-32" :key="'question-image-' + index">
						<img :src="require(`@/assets/images/${story}/question-${index + 1}.svg`)" class="w-auto h-40 sm:h-56 2xl:h-64" />
					</div>
				</transition-opacity>

				<quiz-panel>
					<transition-translate>
						<div v-for="(question, index) in questions" v-if="index + 1 === current" class="space-y-6 sm:space-y-5 2xl:space-y-8" :key="'question-' + index">
							<div v-for="answer in question.answers" :key="'answer-' + answer.id">
								<button
									@click="selectAnswer(answer.id, question.correct)"
									class="relative flex items-center w-full px-6 py-3 text-white transition-colors delay-150 border-black border-opacity-25 rounded-full select-none focus:outline-none border-3 sm:border-4 pl-18 h-14 sm:h-18 2xl:h-20 sm:pr-8 sm:pl-26 sm:py-4 group"
									:class="{
										'bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker': !selected,
										'bg-green': answer.id === question.correct && isSelecting,
										'bg-red': selected === answer.id && selected !== question.correct,
										'bg-grey': selected !== answer.id && isSelecting,
										'cursor-default': isSelecting,
									}"
									:disabled="isSelecting"
								>
									<span class="absolute left-0 flex items-center shadow-lg transform -translate-x-1.5 -translate-y-1/2 rounded-full top-1/2">
										<span class="flex items-center justify-center w-16 h-16 text-white transition-colors border-white rounded-full shadow-inner border-6 2xl:border-8 sm:w-20 sm:h-20 2xl:w-22 2xl:h-22">
											<transition-rotate>
												<span v-if="!selected || (selected !== answer.id && answer.id !== question.correct)" class="text-2xl uppercase sm:text-4xl font-rounded text-shadow" key="letter">{{ answer.id }}</span>
												<span v-if="answer.id === question.correct && isSelecting" key="tick">
													<icon-tick />
												</span>
												<span v-if="selected === answer.id && selected !== question.correct" key="cross">
													<icon-cross />
												</span>
											</transition-rotate>
										</span>
									</span>

									<span class="text-lg font-medium leading-none text-left sm:text-xl sm:leading-none 2xl:leading-none 2xl:text-2xl">{{ answer.text }}</span>
								</button>
							</div>
						</div>
					</transition-translate>
				</quiz-panel>
			</div>
		</div>
	</div>
</template>

<script>
import TransitionOpacity from '@/components/TransitionOpacity.vue'
import TransitionTranslate from '@/components/TransitionTranslate.vue'
import TransitionRotate from '@/components/TransitionRotate.vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import IconTick from '@/components/IconTick.vue'
import IconCross from '@/components/IconCross.vue'
import QuizPanel from '@/components/QuizPanel.vue'

export default {
	name: 'QuizSection',
	components: {
		ButtonIcon,
		TransitionOpacity,
		TransitionTranslate,
		TransitionRotate,
		IconTick,
		IconCross,
		QuizPanel,
	},
	props: ['story', 'questions'],
	data() {
		return {
			current: 1,
			score: 0,
			selected: null,
			isSelecting: false,
		}
	},
	methods: {
		selectAnswer(id, correct) {
			this.isSelecting = true
			this.selected = id

			if (id === correct) {
				this.incrementScore()
			}

			setTimeout(() => {
				this.current++

				this.isSelecting = false
				this.selected = null

				if (this.current > this.questions.length) {
					this.updateScore()
					this.changeSection('score')
				}
			}, 2000)
		},
		incrementScore() {
			this.score++
		},
		updateScore() {
			this.$emit('onScoreUpdate', this.score)
		},
		changeSection(section) {
			this.$emit('onSectionChange', section)
		},
	},
}
</script>
