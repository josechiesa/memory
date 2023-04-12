<template>
	<div class="d-flex justify-content-center align-items-center vh-100">
		<form @submit.prevent="formStore.submitForm(formStore.name)" class="p-5 rounded shadow-lg">
			<label>Nombre:</label>
			<input autofocus type="text" id="name" v-model.trim="formStore.name" placeholder="Ingresa tu nombre" class="form-control" />

			<button type="submit" class="btn btn-primary mt-3">Enviar</button>
			<div v-if="formStore.showAlert" class="alert alert-danger mt-3" role="alert">Porfavor rellena el formulario</div>
		</form>
	</div>
</template>

<script setup>
	import { useFormStore } from '@/stores/formStore';

	const formStore = useFormStore();
</script>

<style scoped></style>
