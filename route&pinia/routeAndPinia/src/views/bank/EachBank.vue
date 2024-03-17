<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, computed } from 'vue'
import { useBankStore } from '@/stores/bank.js';
import { storeToRefs } from 'pinia';

const banks = reactive([
  {
    bank_id: "01",
    name: "신한",
  },
  {
    bank_id: "02",
    name: "국민",
  }
])

const bankStore = useBankStore();
const {number, kookminMoney, sinhanMoney} = storeToRefs(bankStore)
const {saveMoney, useMoney} = bankStore;

const router = useRoute();

const bank = computed(() => {
  return banks.find(v => v.bank_id === router.params.id)
})

const totalMoney = computed(() => {
  if(bank.value.bank_id === "01"){
    return sinhanMoney.value;
  }else if(bank.value.bank_id === "02"){
    return kookminMoney.value;
  }
})

</script>

<template>
  <h1>{{ bank.name }}</h1>

  <h2>{{ totalMoney }}</h2>

  <input type="number" v-model="number">

  <button @click="saveMoney(bank.bank_id)">저축</button>
  <button @click="useMoney(bank.bank_id)">사용</button>

</template>