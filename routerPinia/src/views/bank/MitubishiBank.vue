<script setup>
import { useBankStore } from '@/stores/bank.js';
const bankStore = useBankStore();
</script>

<template>
  <h1>MB</h1>

  <h3>残高</h3>
  <p>{{ bankStore.moneyMBComma }}</p>

  <h3>Input</h3>
  <input type="number" v-model="bankStore.number" />

  <button @click="bankStore.saveMoney('mb')">振込</button>
  <button @click="bankStore.useMoney('mb')">引出</button>
</template>
