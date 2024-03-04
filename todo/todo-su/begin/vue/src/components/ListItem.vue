<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps(['todo']);
const emit = defineEmits(['list-done', 'remove-todo', 'list-update']);

const editMode = ref(false);
const copyProps = ref(props.todo);
const inputRef = ref(null);

const listDone = (event) => {
  emit('list-done', props.todo);
};

const editModeChange = () => {
  editMode.value = !editMode.value;
  nextTick(() => {
    inputRef.value.focus();
  });
};
</script>

<template>
  <li v-if="!editMode" :class="{ complete: props.todo.complete }" role="listitem" aria-checked="false">
    <div class="todo-list__left">
      <input type="checkbox" role="checkbox" aria-labelledby="task2" :checked="props.todo.complete" @click="listDone" />
      <span id="task2">{{ props.todo.item }}</span>
    </div>
    <div class="todo-list__right">
      <i class="fa-solid fa-pen-to-square" role="button" aria-label="편집" @click="editModeChange"></i>
      <i class="fa-solid fa-trash" role="button" aria-label="삭제" @click="emit('remove-todo', props.todo)"></i>
    </div>
  </li>
  <li v-else class="edit" role="listitem">
    <div class="todo-list__left">
      <input
        ref="inputRef"
        type="text"
        role="textbox"
        aria-labelledby="task3"
        placeholder="작업을 입력하세요."
        :value="copyProps.item"
        @input="copyProps.item = $event.target.value"
        @keydown.enter="
          emit('list-update', copyProps);
          editMode = !editMode;
        "
      />
    </div>
    <div class="todo-list__right">
      <i
        class="fa-solid fa-plus"
        role="button"
        aria-label="수정"
        @click="
          emit('list-update', copyProps);
          editMode = !editMode;
        "
      ></i>
    </div>
  </li>
</template>
