<script setup>
const content = defineModel('content');
const emit = defineEmits(['addTodo']);

import { ref } from 'vue';

let inputMessage = ref('');

const addTodo = (event) => {
  if (!event.isCompsing) {
    emit('addTodo', inputMessage.value);
  }
};
</script>

<template>
  <div class="todo-input">
    <input
      type="text"
      id="taskInput"
      placeholder="할 일을 입력하세요."
      :value="inputMessage"
      @input="inputMessage = $event.target.value"
      @keypress.enter="addTodo($event)"
    />
    <i class="fa-solid fa-plus" role="button" aria-label="등록" @click="addTodo($event)"></i>
  </div>
</template>
