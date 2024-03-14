<script setup>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

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

const route = useRoute();
const value = computed(() => {
  console.log(route.params.id);
  return items.find((v) => v.id === +route.params.id);
});
</script>

<template>
  <h1>About</h1>

  <div>{{ value.id }}</div>
  <div>{{ value.name }}</div>
  <div>{{ value.likeFruit }}</div>
  <div>{{ value.likeNumber }}</div>
</template>
