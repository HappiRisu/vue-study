<script setup>
import { ref, onMounted, watch } from 'vue';

const name = ref('');

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
});
</script>
<template>
  <header class="header">
    <h1 class="header__title">Todo List :<input type="text" value="Name Here" v-model="name" /></h1>
  </header>
</template>
