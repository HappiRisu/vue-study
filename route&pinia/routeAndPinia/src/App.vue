<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/" class="nav__item">Home</RouterLink>
        <RouterLink :to="{ name: 'bank'}">Bank</RouterLink>
      </nav>

  <RouterView />
</template>
<style scoped>
.nav__item{
  margin: 0 10px;
}
</style>
