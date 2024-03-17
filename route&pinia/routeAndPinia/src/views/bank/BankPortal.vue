<script setup>
import { RouterLink } from 'vue-router';
import {reactive} from 'vue'

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


</script>

<template>
  <h1>Bank Portal</h1>
  <ul>
    <li v-for="bank in banks">
      <RouterLink :to="`/bank/${bank.bank_id}`">{{bank.name}}</RouterLink>
    </li>
  </ul>
</template>