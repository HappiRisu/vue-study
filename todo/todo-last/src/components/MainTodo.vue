<script setup>
import AddTodo from '@/components/AddTodo.vue';
import InputName from '@/components/InputName.vue';
import ListTodo from '@/components/ListTodo.vue';

import { ref, onMounted, watch, computed } from 'vue';

const todos = ref([]);

watch(
  todos,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal));
  },
  { deep: true }
);

const deleteItem = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

const editContent = (todo) => {
  todos.value = todos.value.map((t) => (t.id === todo.id ? { ...t, content: todo.content } : t));
};

const getTodo = (newVal) => {
  todos.value.push(newVal);
};
const todo_asc = computed(() => {
  return [...todos.value].sort((a, b) => b.createdAt - a.createdAt);
});

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos')) || [];
});
</script>

<template>
  <div class="container">
    <!-- header -->
    <InputName />
    <!-- input -->
    <AddTodo @send-todos="getTodo" />
    <!-- list -->
    <section class="list">
      <h2>todo list</h2>
      <div
        is="vue:ListTodo"
        v-for="(todo, index) in todo_asc"
        :key="index"
        :todo="todo"
        @delete-item="deleteItem"
        @edit-content="editContent"
      ></div>
    </section>
  </div>
</template>
