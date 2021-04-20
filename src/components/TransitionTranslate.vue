<template>
	<transition mode="out-in" enter-active-class="transition-transform transform" leave-active-class="transition-transform transform" enter-class="translate-x-full" enter-to-class="translate-x-0" leave-class="translate-x-0" leave-to-class="-translate-x-full">
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'TransitionTranslate',
}
</script>
