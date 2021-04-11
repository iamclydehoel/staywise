<template>
	<div>
		<fw-turn :options="turnOptions" class="w-1/2 mx-auto" ref="turn">
			<div class="bg-indigo-600">Cover</div>
			<div class="bg-yellow-600">
				Page 1
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque omnis facilis! Ullam ratione enim
					corporis consectetur laborum. Inventore eaque assumenda accusamus deleniti non. Illum reprehenderit earum illo
					non eum?
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque omnis facilis! Ullam ratione enim
					corporis consectetur laborum. Inventore eaque assumenda accusamus deleniti non. Illum reprehenderit earum illo
					non eum?
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque omnis facilis! Ullam ratione enim
					corporis consectetur laborum. Inventore eaque assumenda accusamus deleniti non. Illum reprehenderit earum illo
					non eum?
				</p>
			</div>
			<div class="bg-green-600">Page 2</div>
			<div class="bg-pink-600">Page 3</div>
		</fw-turn>

		<fw-bookblock :options="bookblockOptions" class="bb-bookblock" ref="bookblock">
			<div class="bb-item">
				<div class="bg-indigo-500 absolute inset-0">
					Cover
				</div>
			</div>
			<div class="bb-item">
				<div class="bg-yellow-500 absolute inset-0">
					Page 1
				</div>
			</div>
			<div class="bb-item">
				<div class="bg-green-500 absolute inset-0">
					Page 2
				</div>
			</div>
			<div class="bb-item">
				<div class="bg-pink-500 absolute inset-0">
					Page 3
				</div>
			</div>
		</fw-bookblock>
		<div>
			<button @click="prevPage">Previous</button>
			<button @click="nextPage">Next</button>
		</div>
	</div>
</template>

<script>
import { FwTurn, FwBookblock } from 'vue-turnjs'

export default {
	name: 'Experimentation',
	components: {
		FwTurn,
		FwBookblock,
	},
	data() {
		return {
			turnOptions: {
				display: 'single',
			},
			bookblockOptions: {
				speed: 800,
				shadowSides: 0.8,
				shadowFlip: 0.7,
				autoplay: false,
				hasCover: false,
				orientation: 'vertical',
				onBeforeFlip: function(page) {
					console.log('onBeforeFlip')
					return false
				},
				onEndFlip: function(old, page, isLimit) {
					console.log('onEndFlip')
					return false
				},
			},
		}
	},
	methods: {
		nextPage() {
			this.$refs.bookblock.next()
		},
		prevPage() {
			this.$refs.bookblock.prev()
		},
	},
}
</script>
