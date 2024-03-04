<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const name = ref('');
const todos = ref([]);

const input_content = ref('');
const input_category = ref(null);

const todos_asc = computed(() => {
  return todos.value.sort((a, b) => b.createdAt - a.createdAt);
});

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  input_content.value = '';
  input_category.value = null;
};

watch(name, (newVal) => localStorage.setItem('name', newVal));
watch(todos, (newVal) => localStorage.setItem('todos', JSON.stringify(newVal)), { deep: true });

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
        <input type="text" value="name here" />
      </h2>
    </section>
    <!-- todo form -->
    <section class="create-todo">
      <h3>create a todo</h3>

      <form>
        <h4>what's on you todo list?</h4>

        <input type="text" placeholder="e.g make a video" />

        <h4>pick a category</h4>

        <div class="options">
          <label>
            <input type="radio" name="category" value="business" />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input type="radio" name="category" value="personal" />
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
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span class="bubble"></span>
          </label>

          <div class="todo-content">
            <input type="text" />
          </div>

          <div class="actions">
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            <span class="bubble"></span>
          </label>

          <div class="todo-content">
            <input type="text" />
          </div>

          <div class="actions">
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
