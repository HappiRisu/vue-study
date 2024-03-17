<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useBankStore } from '@/stores/bank';
const bankStore = useBankStore();
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/jp">JP Morgan</RouterLink>
    <RouterLink to="/mb">Mitubisi</RouterLink>
  </nav>

  <p>총 잔액 : {{ bankStore.moneyTotalComma }}</p>
  <RouterView />
</template>
<style scoped>
a {
  margin: 0 1rem;
}
</style>
