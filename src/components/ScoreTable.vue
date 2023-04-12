<template>
	<div class="score-container d-flex gap-2 flex-column justify-content-center align-items-center bg-light p-3">
		<div class="d-flex gap-3">
			<h3 class="correct">
				Aciertos: <span :class="`count badge bg-success`">{{ props.score[0] }}</span>
			</h3>
			<h3 class="incorrect">
				Errores: <span :class="`count badge bg-danger`">{{ props.score[1] }}</span>
			</h3>
		</div>
		<div class="d-flex gap-2">
			<MenuButton type="primary" name="Reiniciar" :click="gameStore.resetGame" />
			<MenuButton type="danger" name="Salir" :click="formStore.exitGame" />
		</div>
	</div>
</template>

<script setup>
	import { useGameStore } from '../stores/gameStore';
	import { useFormStore } from '../stores/formStore';
	import MenuButton from './MenuButton.vue';

	const props = defineProps(['score']);

	const gameStore = useGameStore();
	const formStore = useFormStore();
</script>

<style scoped>
	h3 {
		margin: 0;
		text-align: center;
	}
	.score-container span {
		margin: 0 1rem;
	}

	.score-container .correct {
		color: green;
	}

	.score-container .incorrect {
		color: red;
	}

	.score-container .count {
		font-size: 1.5rem;
		margin-left: 0.5rem;
	}
</style>
