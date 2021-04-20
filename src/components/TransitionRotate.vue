<template>
	<transition mode="out-in" enter-active-class="transition-all transform" leave-active-class="transition-all transform" enter-class="scale-50 rotate-45 opacity-0" enter-to-class="scale-100 rotate-0 opacity-100" leave-class="scale-100 opacity-100" leave-to-class="scale-50 opacity-0">
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'TransitionTranslate',
}
</script>
