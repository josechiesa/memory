import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useGameStore = defineStore('images', () => {
	// ! States
	const imagesCards = ref([]);
	const flippedCards = ref([]);
	const matchedCards = ref([]);
	const gameOver = ref(false);
	const score = ref([0, 0]);

	// ! Actions

	const fetchImages = async () => {
		imagesCards.value = [];

		// get request in axios
		const response = await axios.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=9');
		localStorage.setItem('images', JSON.stringify(response));
		// shuffle cards
		shuffle();
	};

	const shuffle = async () => {
		// shuffle cards
		imagesCards.value = [];
		const images = await JSON.parse(localStorage.getItem('images') || []);
		imagesCards.value = [...images.data.entries, ...images.data.entries].sort(() => Math.random() - 0.5);
	};

	// verify if clicked card exists in matched list
	const flip = (index) => {
		return matchedCards.value.includes(index) || flippedCards.value.includes(index) ? true : false;
	};

	const flipCard = (index) => {
		if (flip(index)) return;

		// each card are pushed to an array
		flippedCards.value.push(index);

		if (flippedCards.value.length === 2) {
			// destructure of flippled cards
			const [firstCardIndex, secondCardIndex] = flippedCards.value;

			// get both cards from main list
			const firstCard = imagesCards.value[firstCardIndex];
			const secondCard = imagesCards.value[secondCardIndex];

			// if both cards uuid are equal, push it to new matched array
			if (firstCard.fields.image.uuid === secondCard.fields.image.uuid) {
				matchedCards.value.push(firstCardIndex, secondCardIndex);
				score.value[0]++;
			} else {
				score.value[1]++;
			}

			// if matched card equals to number of cards, the game will end
			if (matchedCards.value.length === imagesCards.value.length) {
				gameOver.value = true;
			}

			// set a delay before unflip the cards
			setTimeout(() => {
				flippedCards.value = [];
			}, 1000);
		}
	};

	// reset game
	const resetGame = () => {
		imagesCards.value = [];
		flippedCards.value = [];
		matchedCards.value = [];
		score.value = [0, 0];
		gameOver.value = false;
		shuffle();
	};

	return {
		// states
		score,
		gameOver,
		imagesCards,
		flippedCards,
		matchedCards,
		// computed
		// actions
		flip,
		fetchImages,
		flipCard,
		resetGame,
	};
});
