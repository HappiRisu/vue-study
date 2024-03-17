<script setup>
import { useRoute } from "vue-router";
import { reactive, computed, onMounted } from "vue";

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

const content = computed(() => {
  const url = window.location.href;
  const id = url.replace("http://localhost:5173/detail/", "");

  return products.find(v => v.id === +id)
})

const comma = (price) => {
  return price.toLocaleString();
}


const route = useRoute();

onMounted(() => {
  console.log(route.params)
})

</script>


<template>
  <h1>Product Detail</h1>
  <div>{{ content.name }}</div>
  <div>{{ content.desc }}</div>
  <div>{{ comma(content.price) }}</div>

</template>
