<script setup>
import { ref } from 'vue';

const emit = defineEmits(['send-todos']);

const input_todo = ref('');
const input_category = ref(null);

const addTodo = () => {
  if (input_todo.value.trim() === '' || input_category.value === null) return;

  emit('send-todos', {
    id: Math.random(),
    content: input_todo.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  input_todo.value = '';
  input_category.value = null;
};
</script>
<template>
  <section class="add">
    <form @submit.prevent="addTodo">
      <h2>task for today</h2>
      <input type="text" class="add_todo" v-model="input_todo" />

      <h2>category</h2>

      <div class="options">
        <label>
          <input type="radio" name="category" value="business" v-model="input_category" />
          <span class="bubble business"></span>
          <div>business</div>
        </label>
        <label>
          <input type="radio" name="category" value="personal" v-model="input_category" />
          <span class="bubble personal"></span>
          <div>personal</div>
        </label>
      </div>
      <button type="submit" class="add__btn">add todo</button>
    </form>
  </section>
</template>
