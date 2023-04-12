import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useGameStore } from './gameStore';

export const useFormStore = defineStore('form', () => {
	// import game store
	const gameStore = useGameStore();

	//! Store
	const name = ref(localStorage.getItem('name') || '');
	const submitted = ref(localStorage.getItem('submitted') || false);
	const showAlert = ref(false);

	//! Actions
	const submitForm = (value) => {
		name.value = value;
		if (name.value !== '') {
			localStorage.setItem('name', value);
			localStorage.setItem('submitted', true);
			submitted.value = true;
		} else {
			showAlert.value = true;
		}
	};

	const exitGame = () => {
		localStorage.removeItem('name');
		localStorage.removeItem('submitted');
		localStorage.removeItem('images');
		submitted.value = false;
		name.value = '';

		gameStore.flippedCards = [];
		gameStore.matchedCards = [];
		gameStore.score = [0, 0];
		gameStore.gameOver = false;
	};

	return {
		name,
		submitted,
		showAlert,
		exitGame,
		submitForm,
	};
});
