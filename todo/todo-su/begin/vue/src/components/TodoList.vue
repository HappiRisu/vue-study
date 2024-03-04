<script setup>
import TodoInput from '@/components/TodoInput.vue';
import ListItem from '@/components/ListItem.vue';

import { ref } from 'vue';

const todos = ref([]);

const addTodo = (value) => {
  todos.value.push({
    id: Math.random(),
    item: value,
    complete: false,
  });
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

const listUpdate = (todo) => {
  todos.value = todos.value.map((v) => (todo.id === v.id ? { ...v, item: todo.item } : v));
};

const listItemDone = (todo) => {
  todos.value = todos.value.map((t) => (t === todo ? { ...t, complete: !t.complete } : t));
};

const deleteAll = () => {
  todos.value = [];
};
</script>

<template>
  <div class="todo" role="application">
    <!-- input -->
    <TodoInput @addTodo="addTodo" />
    <!-- list -->
    <div class="todo-list">
      <ul role="list">
        <!-- list_item -->
        <li
          is="vue:ListItem"
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @list-done="listItemDone"
          @remove-todo="removeTodo"
          @list-update="listUpdate"
        ></li>
      </ul>
    </div>
    <div class="todo-actions">
      <span role="button" aria-label="모두 지우기" @click="deleteAll">지우기</span>
    </div>
  </div>
</template>
