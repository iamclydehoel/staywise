<template>
	<div class="relative">
		<slot />
		<div class="absolute inset-x-0 bottom-0 transform scale-110 translate-y-1/2">
			<!-- Shadow -->
			<svg class="w-full h-auto text-black text-opacity-25 fill-current" viewBox="0 0 1248 64" xmlns="http://www.w3.org/2000/svg">
				<path d="M64 0H1184L1248 64H0L64 0Z" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BookPanel',
}
</script>
