<template>
	<div class="relative">
		<div class="relative z-10 px-4 pt-32 pb-6 overflow-hidden border-white sm:pb-8 sm:pt-36 2xl:pt-40 bg-teal border-6 rounded-3xl">
			<slot />
		</div>
		<div class="absolute inset-x-0 bottom-0 transform scale-105 translate-y-1/2">
			<!-- Shadow -->
			<svg class="w-full h-auto text-black text-opacity-25 fill-current" viewBox="0 0 1226 64" xmlns="http://www.w3.org/2000/svg">
				<path d="M50.6569 2.34314C52.1572 0.842849 54.192 0 56.3137 0H1169.69C1171.81 0 1173.84 0.842855 1175.34 2.34315L1223.34 50.3432C1228.38 55.3829 1224.81 64 1217.69 64H8.31374C1.1865 64 -2.38286 55.3829 2.65686 50.3431L50.6569 2.34314Z" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ScorePanel',
}
</script>
