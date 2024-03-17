<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>

  <RouterLink to="/">Home</RouterLink>
  &nbsp;
  <RouterLink to="/add">Add</RouterLink>


  <RouterView />
</template>
