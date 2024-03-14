<script setup>
import { storeToRefs } from 'pinia';
import { useBankSetupStore } from '@/stores/bankSetup.js';
const bankStore = useBankSetupStore();

// destructuring해서 사용하게 되면 반응성이 깨진다
// const { moneyJPComma, number } = bankStore;

// 만약 반응성을 유지하고 싶다면 storeToRefs를 사용하면 된다
const { moneyJPComma, number } = storeToRefs(bankStore);

// 주의 actions는 반응형이 아니기 때문에, storeToRefs를 쓰게되면 에러가 발생
// 따라서, storeToRefs를 사용하지 않아도 됨
const { saveMoney, useMoney } = bankStore;
</script>

<template>
  <h1>JP</h1>

  <h3>残高</h3>
  <p>{{ moneyJPComma }}</p>

  <h3>Input</h3>
  <input type="number" v-model="number" />

  <button @click="saveMoney('jp')">振込</button>
  <button @click="useMoney('jp')">引出</button>
</template>
