<template>
	<button type="button" :class="`buttons btn btn-${props.type} exit-icon`" @click="props.click">
		{{ props.name }}
	</button>
</template>

<script setup>
	const props = defineProps(['name', 'type', 'click']);
</script>

<style scoped>
	.buttons {
		width: 100px;
		padding: 2px 5px;
	}
</style>
