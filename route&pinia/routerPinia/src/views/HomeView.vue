<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive } from 'vue';
const items = reactive([
  {
    id: 1,
    name: 'Lee',
    likeFruit: 'Strawberry',
    likeNumber: '8',
  },
  {
    id: 2,
    name: 'Kim',
    likeFruit: 'Banana',
    likeNumber: '90',
  },
  {
    id: 3,
    name: 'Nam',
    likeFruit: 'Pear',
    likeNumber: '125',
  },
]);
</script>

<template>
  <h1>Home</h1>

  <ul>
    <li v-for="item in items" :key="item.id">
      <RouterLink :to="`/about/${item.id}`">{{ item.name }}</RouterLink>
      <RouterLink :to="`/about/${item.id}/fruit`">(likeFruit)</RouterLink>
      <RouterLink :to="`/about/${item.id}/number`">(likeNumber)</RouterLink>
    </li>
  </ul>
</template>
