<script setup>
import { ref } from 'vue';
import TodoListInput from '@/components/TodoListInput.vue';
import TodoListItem from '@/components/TodoListItem.vue';

//Done
const listItem = ref([]);

//Done
const listItemPush = (item) => {
  const newItem = {
    id: Math.random(),
    text: item,
    complete: false,
  };
  listItem.value.push(newItem);
};
//Done
const listItemDelete = (item) => {
  listItem.value = listItem.value.filter((v) => v.id !== item.id);
  console.log(listItem.value);
};
//Done
const listItemDone = (item) => {
  listItem.value = listItem.value.map((v) => (v.id === item.id ? { ...v, complete: !v.complete } : v));
};
//
const listItemUpdate = (item) => {
  listItem.value = listItem.value.map((v) => (v.id === item.id ? { ...v, text: item.text } : v));
};
//Done
const listAllClear = () => {
  listItem.value = [];
};
</script>
<template>
  <div class="todo" role="application">
    <TodoListInput @item-push="listItemPush" />
    <div class="todo-list">
      <ul role="list">
        <li
          is="vue:TodoListItem"
          v-for="item in listItem"
          :key="item.id"
          :item="item"
          @list-done="listItemDone"
          @list-delete="listItemDelete"
          @list-update="listItemUpdate"
        ></li>
      </ul>
    </div>
    <div class="todo-actions">
      <span role="button" aria-label="모두 지우기" @click="listAllClear">지우기</span>
    </div>
  </div>
</template>
