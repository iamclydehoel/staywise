<template>
	<div class="h-full">
		<backdrop />

		<main class="relative h-full">
			<template v-if="section === 'book'">
				<div class="absolute flex flex-col items-center w-full min-h-full">
					<div class="flex-grow"></div>

					<div class="container flex-grow-0 w-full px-6 pt-16 my-auto sm:px-16 lg:px-24 xl:px-56">
						<div class="relative">
							<img src="https://dummyimage.com/1514x1072" class="relative z-10" alt="" />
							<div class="absolute inset-x-0 bottom-0 -mx-5 transform translate-y-1/2 sm:-mx-7 md:-mx-9 lg:-mx-12">
								<!-- Shadow -->
								<svg
									class="w-full h-auto text-black text-opacity-25 fill-current"
									viewBox="0 0 1248 64"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M64 0H1184L1248 64H0L64 0Z" />
								</svg>
							</div>
						</div>
					</div>

					<div class="flex items-center justify-center flex-grow w-full px-6 pb-16 mt-3 sm:px-16">
						<div
							class="relative top-0 text-3xl transition-all transform rounded-full shadow-lg hover:shadow focus-within:shadow hover:translate-y-1 focus-within:translate-y-1 lg:text-4xl"
						>
							<button
								@click="goTo('quiz')"
								class="px-6 py-3 text-white uppercase transition-colors border-white rounded-full shadow-inner select-none text-shadow lg:px-8 lg:py-4 border-6 font-rounded bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker"
							>
								Start quiz
							</button>
						</div>
					</div>
				</div>
			</template>

			<template v-if="section === 'quiz'">
				<button @click="section = 'book'" class="absolute top-0 z-10">Back to book</button>

				<div class="absolute flex flex-col items-center w-full min-h-full">
					<div class="w-full max-w-xl px-6 my-auto">
						<question
							v-if="question === 1"
							number="1"
							text="What should Katy do with the matches?"
							:options="[
								{ id: 'a', text: 'Show an adult lorem ipsum dolor sit amet' },
								{ id: 'b', text: 'Play with them' },
								{ id: 'c', text: 'Give them to her brother' },
							]"
							correct="a"
							@selection="updateScore"
							key="question-1"
						/>
						<question
							v-if="question === 2"
							number="2"
							text="Who should use matches?"
							:options="[
								{ id: 'a', text: 'Children' },
								{ id: 'b', text: 'Adults' },
								{ id: 'c', text: 'Cats' },
							]"
							correct="b"
							@selection="updateScore"
							key="question-2"
						/>
						<question
							v-if="question === 3"
							number="3"
							text="Should young children play with matches?"
							:options="[
								{ id: 'a', text: 'Yes' },
								{ id: 'b', text: 'No' },
								{ id: 'c', text: 'Maybe' },
							]"
							correct="b"
							@selection="updateScore"
							key="question-3"
						/>
					</div>
				</div>
			</template>

			<template v-if="section === 'score'">
				<div class="absolute flex flex-col items-center w-full min-h-full">
					<div class="w-full max-w-xl px-6 my-auto">
						<div class="flex justify-center">
							<span
								class="flex items-center justify-center w-auto h-20 px-5 text-center bg-black border-white rounded-full border-6 sm:border-8 sm:h-28 text-red"
							>
								<span class="text-2xl leading-none uppercase sm:text-4xl sm:leading-none font-rounded"
									>Quiz<br />complete</span
								></span
							>
						</div>

						<div class="relative z-10 px-4 pb-10 mt-24 border-white bg-teal border-6 rounded-3xl">
							<div class="flex justify-center -mt-24">
								<span
									class="flex flex-col items-center justify-center w-56 h-56 border-white rounded-full bg-orange border-6"
								>
									<span class="text-white text-9xl font-rounded">{{ this.score }}</span>
									<span class="mb-4 text-3xl font-rounded">out of 3</span>
								</span>
							</div>

							<div
								class="p-6 -mt-4 text-white border-4 border-black border-opacity-25 rounded-2xl"
								:class="{ 'bg-green': score >= 2, 'bg-red': score <= 1 }"
							>
								<p>
									<template v-if="score === 0">
										<h3>That's not quite right.</h3>
										<p>Why not listen to the story again and retry the quiz?</p>
									</template>
									<template v-if="score === 1">
										<h3>You're on the right track</h3>
										<p>but not quite there yet. Listen to the story again and retry the quiz.</p>
									</template>
									<template v-if="score === 2">
										<h3>That's a good effort!</h3>
										<p>Why not retry and see if you can get all three next time?</p>
									</template>
									<template v-if="score === 3">
										<h3>Well done!</h3>
										<p>You answered them all correctly.</p>
									</template>
								</p>
							</div>

							<div class="flex items-center justify-center flex-grow w-full px-6 mt-3 sm:px-16">
								<div
									class="relative top-0 text-3xl transition-all transform rounded-full shadow-lg hover:shadow focus-within:shadow hover:translate-y-1 focus-within:translate-y-1 lg:text-4xl"
								>
									<button
										@click="reset"
										class="px-6 py-3 text-white uppercase transition-colors border-white rounded-full shadow-inner select-none text-shadow lg:px-8 lg:py-4 border-6 font-rounded bg-indigo hover:bg-indigo-dark focus:bg-indigo-dark active:bg-indigo-darker"
									>
										Try again
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</main>
	</div>
</template>

<script>
import Backdrop from '@/components/Backdrop.vue'
import Question from '@/components/Question.vue'

export default {
	name: 'Birthday',
	components: {
		Backdrop,
		Question,
	},
	data() {
		return {
			section: 'book',
			question: 1,
			score: 0,
		}
	},
	methods: {
		goTo(section) {
			this.section = section
		},
		updateScore(e) {
			if (e === true) {
				this.score++
			}

			if (this.question === 3) {
				this.section = 'score'
			} else {
				this.question++
			}
		},
		reset() {
			this.section = 'quiz'
			this.question = 1
			this.score = 0
		},
	},
}
</script>
