<template>
	<div class="h-full">
		<transition mode="out-in" enter-active-class="transition-opacity duration-700" leave-active-class="transition-opacity duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
			<book-section v-if="section === 'book'" :story="story" :pages="7" @onSectionChange="updateSection" />
			<quiz-section v-if="section === 'quiz'" :story="story" :questions="questions" @onScoreUpdate="updateScore" @onSectionChange="updateSection" />
			<score-section v-if="section === 'score'" :score="score" @onSectionChange="updateSection" />
		</transition>
	</div>
</template>

<script>
import TransitionOpacity from '@/components/TransitionOpacity.vue'
import BookSection from '@/components/BookSection.vue'
import QuizSection from '@/components/QuizSection.vue'
import ScoreSection from '@/components/ScoreSection.vue'

export default {
	name: 'WayOut',
	components: {
		TransitionOpacity,
		BookSection,
		QuizSection,
		ScoreSection,
	},
	data() {
		return {
			story: 'wayout',
			questions: [
				{
					text: 'What is dangerous about what Ella has done?',
					answers: [
						{ id: 'a', text: 'She is tired' },
						{ id: 'b', text: 'She has left a tea towel next to the cooker' },
						{ id: 'c', text: 'She has left the pot on the cooker' },
					],
					correct: 'b',
				},
				{
					text: 'When you hear the fire alarm, what should you do?',
					answers: [
						{ id: 'a', text: 'Try to put the fire out' },
						{ id: 'b', text: 'Get out, stay out, call the fire service using 999' },
						{ id: 'c', text: 'Run around and scream and shout' },
					],
					correct: 'b',
				},
				{
					text: 'Why did the dad ask the boys to tidy the room?',
					answers: [
						{ id: 'a', text: 'They wouldn’t be able to find their shoes' },
						{ id: 'b', text: 'They might fall over them if the fire alarm is sounded' },
						{ id: 'c', text: 'He likes a tidy house' },
					],
					correct: 'b',
				},
			],
			section: 'book',
			score: null,
		}
	},
	methods: {
		updateSection(section) {
			this.section = section
		},
		updateScore(score) {
			this.score = score
		},
	},
	mounted() {
		this.$emit('onLoad')
	},
}
</script>
