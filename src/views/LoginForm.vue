<template>
	<div class="d-flex justify-content-center align-items-center vh-100">
		<form @submit.prevent="formStore.submitForm(formStore.name)" class="p-5 rounded shadow-lg">
			<label>Name:</label>
			<input autofocus type="text" id="name" v-model.trim="formStore.name" placeholder="Enter your name" class="form-control" />

			<button type="submit" class="btn btn-primary mt-3">Send</button>
			<div v-if="formStore.showAlert" class="alert alert-danger mt-3" role="alert">Please fill out this field</div>
		</form>
	</div>
</template>

<script setup>
	import { useFormStore } from '@/stores/formStore';

	const formStore = useFormStore();
</script>

<style scoped></style>
