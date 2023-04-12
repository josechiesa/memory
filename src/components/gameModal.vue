<template>
	<div class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Felicitaciones {{ formStore.name }}!!</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>
						Haz ganado con <b>{{ gameStore.score[0] }}</b> aciertos y <b>{{ gameStore.score[1] }}</b> errores
					</p>
				</div>
				<div class="modal-footer">
					<MenuButton type="primary" name="Reiniciar" :click="gameStore.resetGame" />
					<MenuButton type="danger" name="Salir" :click="formStore.exitGame" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, watch } from 'vue';
	import { Modal } from 'bootstrap';
	import { useGameStore } from '../stores/gameStore';
	import { useFormStore } from '../stores/formStore';
	import MenuButton from './MenuButton.vue';

	const gameStore = useGameStore();
	const formStore = useFormStore();

	onMounted(() => {
		// create modal instance
		const modalInstance = new Modal(document.getElementById('modal'));

		// check gameOver state to show or hide
		watch(
			() => gameStore.gameOver,
			(value) => {
				value ? modalInstance.show() : modalInstance.hide();
			}
		);

		const modal = document.getElementById('modal');
		modal.addEventListener('hidden.bs.modal', () => (gameStore.gameOver = false));
	});
</script>

<style scoped>
	.modal-title {
		text-align: center;
		text-transform: capitalize;
	}
</style>
