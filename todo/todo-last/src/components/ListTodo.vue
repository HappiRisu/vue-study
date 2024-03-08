<script setup>
const props = defineProps(['todo']);
const emits = defineEmits(['delete-item', 'edit-content']);

import { ref } from 'vue';

const edited_content = ref(props.todo.content);
const currentEditingId = ref(null);

const editRef = ref(null);
const editComplete = () => {
  emits('edit-content', { ...props.todo, content: edited_content.value });
  currentEditingId.value = null;
};

const editItem = (todoId) => {
  currentEditingId.value = todoId;
  editRef.value.select();
};
</script>
<template>
  <div class="list__item">
    <label>
      <input type="checkbox" name="category" :value="props.todo.category" />
      <span :class="`bubble ${props.todo.category}`"></span>
    </label>

    <input
      type="text"
      class="add_todo"
      :value="props.todo.content"
      @input="edited_content = $event.target.value"
      :readonly="props.todo.id !== currentEditingId"
      :class="{ editInput: props.todo.id === currentEditingId }"
      ref="editRef"
    />
    <div class="button-box">
      <button v-if="props.todo.id !== currentEditingId" type="button" class="edit" @click="editItem(props.todo.id)">
        <span class="material-symbols-outlined">edit</span>
      </button>
      <button v-else type="button" class="edit-complete" @click="editComplete">
        <span class="material-symbols-outlined"> done </span>
      </button>
      <button type="button" class="delete" @click="emits('delete-item', props.todo)">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  </div>
</template>
