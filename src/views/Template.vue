<template>
	<div class="h-full">
		<transition-opacity>
			<book-section v-if="section === 'book'" :story="story" @onSectionChange="updateSection" />
			<quiz-section v-if="section === 'quiz'" :story="story" :questions="questions" @onScoreUpdate="updateScore" @onSectionChange="updateSection" />
			<score-section v-if="section === 'score'" :score="score" @onSectionChange="updateSection" />
		</transition-opacity>
	</div>
</template>

<script>
import TransitionOpacity from '@/components/TransitionOpacity.vue'
import BookSection from '@/components/BookSection.vue'
import QuizSection from '@/components/QuizSection.vue'
import ScoreSection from '@/components/ScoreSection.vue'

export default {
	name: 'Template',
	components: {
		TransitionOpacity,
		BookSection,
		QuizSection,
		ScoreSection,
	},
	data() {
		return {
			story: 'birthday',
			questions: [
				{
					text: 'What should Katy do with the matches?',
					answers: [
						{ id: 'a', text: 'Show an adult' },
						{ id: 'b', text: 'Play with them' },
						{ id: 'c', text: 'Give them to her brother' },
					],
					correct: 'a',
				},
				{
					text: 'Who should use matches?',
					answers: [
						{ id: 'a', text: 'Children' },
						{ id: 'b', text: 'Adults' },
						{ id: 'c', text: 'Cats' },
					],
					correct: 'b',
				},
				{
					text: 'Should young children play with matches?',
					answers: [
						{ id: 'a', text: 'Yes' },
						{ id: 'b', text: 'No' },
						{ id: 'c', text: 'Maybe' },
					],
					correct: 'b',
				},
			],
			section: 'book',
			score: null,
			// section: 'score',
			// score: 3,
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
}
</script>
