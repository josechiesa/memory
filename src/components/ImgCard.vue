<template>
	<div class="card">
		<div class="card-back">
			<img src="../assets/back-card.jpg" alt="Back card" />
		</div>
		<div class="card-front">
			<img class="img-fluid rounded mx-auto d-block" alt="props.images.fields.image.title" :src="props.images.fields.image.url" />
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(['images']);
</script>

<style scoped>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card {
		position: relative;
		width: 200px;
		height: 300px;
		cursor: pointer;
		border: none !important;
		zoom: 75%;
	}

	@media (max-width: 465px) {
		.card {
			zoom: 80%;
		}
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		transition: transform 0.6s;
	}

	.card-back {
		transform: rotateY(0deg);
	}

	.card-front {
		transform: rotateY(180deg);
	}

	.card.flipped .card-back {
		transform: rotateY(-180deg);
	}

	.card.flipped .card-front {
		transform: rotateY(0deg);
	}
</style>
