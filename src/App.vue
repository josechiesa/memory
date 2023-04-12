<template>
	<gameModal />
	<div class="sticky-top" v-if="formStore.submitted">
		<ScoreTable :score="gameStore.score" />
	</div>
	<div class="container justify-content-center align-content-center">
		<Memory v-if="formStore.submitted" />
		<LoginForm v-else />
	</div>
</template>

<script setup>
	import LoginForm from './views/LoginForm.vue';
	import Memory from './views/MemoryPage.vue';
	import ScoreTable from './components/ScoreTable.vue';
	import gameModal from './components/gameModal.vue';

	import { useFormStore } from './stores/formStore';
	import { useGameStore } from './stores/gameStore';

	const gameStore = useGameStore();
	const formStore = useFormStore();
</script>

<style scoped></style>
