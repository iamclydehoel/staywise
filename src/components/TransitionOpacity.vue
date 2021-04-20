<template>
	<transition mode="out-in" enter-active-class="transition-opacity" leave-active-class="transition-opacity" enter-class="opacity-0" enter-to-class="opacity-100" leave-class="opacity-100" leave-to-class="opacity-0">
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'TransitionOpacity',
}
</script>
