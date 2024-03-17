<script setup>
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute } from 'vue-router';

const products = reactive([
  {
    id: 1,
    name: "歯磨き粉",
    desc: "フッ素入りの歯磨き粉",
    price: 1000,
  },
  {
    id: 2,
    name: "歯ブラシ",
    desc: "歯ブラシの毛が葉を柔らかく磨いてくれます。",
    price: 2000,
  },
  {
    id: 3,
    name: "歯間ブラシ",
    desc: "フロスが歯の間をきれいにしてくれます。",
    price: 3000,
  }
])


</script>

<template>
  <h1>Product List</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      <RouterLink :to="`detail/${product.id}`">{{ product.name }}</RouterLink>
    </li>
  </ul>
</template>
