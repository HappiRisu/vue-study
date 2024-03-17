<script setup>

import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const product = reactive([
  {
    id: 1,
    name: "원단_1",
    price: "1000",
    color: "blue",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  {
    id: 2,
    name: "원단_2",
    price: "5000",
    color: "yellow",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  {
    id: 3,
    name: "원단_3",
    price: "10000",
    color: "red",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
])

</script>


<template>
  <h1>Home</h1>
  <ul>
    <li v-for="item in product" :key="item.id">
      <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
      <RouterLink :to="`/product/${item.id}/color`">(아이템 색깔)</RouterLink>
    </li>
  </ul>
</template>
