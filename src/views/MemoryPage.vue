<template>
	<div class="row image-container my-5">
		<div class="d-flex justify-content-center gap-3 flex-wrap">
			<ImgCard
				@click="gameStore.flippedCards.length < 2 ? gameStore.flipCard(index) : null"
				:images="img"
				v-for="(img, index) in gameStore.imagesCards"
				:key="img.fields.image.uuid"
				:class="{
					flipped: gameStore.flip(index),
				}" />
		</div>
	</div>
</template>

<script setup>
	import ImgCard from '../components/ImgCard.vue';
	import { useGameStore } from '../stores/gameStore';

	const gameStore = useGameStore();
	gameStore.fetchImages();
</script>

<style scoped>
	.image-container {
		max-width: 1160px;
		margin: 0 auto;
	}
</style>
