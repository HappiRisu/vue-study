<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AsideLayout from '@/layouts/AsideLayout.vue';

import { ref, computed } from 'vue'

const router = {
  DefaultLayout,
  AsideLayout
}

const route = useRoute();
const layout = computed(() => router[route.meta.layout])
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'community' }">Community</RouterLink>
    <RouterLink to="/layout">Layout</RouterLink>
    <RouterLink to="/layout/about">about</RouterLink>
  </nav>

  <component :is="layout">
    <RouterView />
  </component>

</template>

<style scoped>
nav a {
  margin: 1rem
}
</style>