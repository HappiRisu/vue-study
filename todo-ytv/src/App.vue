<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const name = ref('');
const todos = ref([]);

const input_content = ref('');
const input_category = ref(null);

const todos_asc = computed(() => {
  return todos.value.sort((a, b) => b.created_at - a.created_at);
});

const addTodo = () => {
  if (input_content.value === '' || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    created_at: new Date().getTime(),
  });

  input_content.value = '';
  input_category.value = null;
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((v) => v !== todo);
};

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

watch(
  todos,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
  todos.value = JSON.parse(localStorage.getItem('todos')) || [];
});
</script>

<template>
  <main class="app">
    <!-- greeting -->
    <section class="greeting">
      <h2 class="title">
        What's up
        <input type="text" value="name here" v-model="name" />
      </h2>
    </section>
    <!-- todo form -->
    <section class="create-todo">
      <h3>create a todo</h3>

      <form @submit.prevent="addTodo">
        <h4>what's on you todo list?</h4>

        <input type="text" placeholder="e.g make a video" v-model="input_content" />

        <h4>pick a category</h4>

        <div class="options">
          <label>
            <input type="radio" name="category" value="business" v-model="input_category" />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input type="radio" name="category" value="personal" v-model="input_category" />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>
        </div>

        <input type="submit" value="Add Todo" />
      </form>
    </section>
    <!-- todo list -->
    <section class="todo-list">
      <h3>Todo List</h3>

      <div class="list">
        <div :class="`todo-item ${todo.done && 'done'}`" v-for="(todo, index) in todos" :key="index">
          <label>
            <input type="checkbox" v-model="todo.done" />
            <span :class="`bubble ${todo.category}`"></span>
          </label>

          <div class="todo-content">
            <input type="text" v-model="todo.content" />
          </div>

          <div class="actions">
            <!-- edit or delete -->
            <button class="delete" @click="removeTodo(todo)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
