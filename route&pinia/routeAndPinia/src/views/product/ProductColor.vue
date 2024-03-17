<script setup>

import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

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

const router = useRoute();

const product_item = computed(() => {
  return product.find(v => v.id === +router.params.id) 
}) 

</script>


<template>
  <h1>Item Color</h1>
  <p>{{product_item.color}}</p>
</template>

