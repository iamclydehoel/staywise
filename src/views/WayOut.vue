<template>
	<div class="h-full">
		<transition mode="out-in" enter-active-class="transition-opacity duration-700" leave-active-class="transition-opacity duration-300" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
			<book-section v-if="section === 'book'" :story="story" :pages="7" :script="script" @onSectionChange="updateSection" />
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
			script: [
				{
					text: 'Ben had a friend round for tea and a sleepover. Ben’s mum is going to work, she asks the boys to take granny some of the food that is made.',
				},
				{
					text: 'The boys visit Ben’s granny. Ben’s granny lives in the flat below. The boys tell her about the visitors they had at school today who talked about testing smoke alarms.',
				},
				{
					text: 'The boys play in Ben’s bedroom. Ben’s dad asks them to help tidy up and get ready for bed. Ben’s sister, Jess, is already fast asleep.',
				},
				{
					text: 'Ben’s sister, Ella, comes home late. Ella works at the cinema and is often hungry when she gets home. She is tired and doesn’t notice she has left the cooker on.',
				},
				{
					text: 'The alarm starts beeping. Ben and Jake know exactly what to do. They shout ‘Fire’ and get everyone to leave the flat.',
				},
				{
					text: 'Everyone must get out and stay out. Ella has her mobile phone to call 999 for the emergency services.',
				},
				{
					text: 'Within minutes, the Fire and Rescue Service arrive. The fire is put out and the boys speak to the firefighter who had visited their school earlier that day.',
				},
			],
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
