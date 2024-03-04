<script setup>
import { nextTick, reactive, ref } from "vue";

const editMode = ref(false);
const emit = defineEmits(["list-delete", "list-done", "list-update"]);
const props = defineProps({
  item: {
    type: Object,
  },
});
const copyProps = reactive(props.item);
const inputRef = ref(null);
const editModeChange = () => {
  editMode.value = !editMode.value;
  nextTick(() => {
    inputRef.value.focus();
  });
};
</script>
<template>
  <li
    v-if="!editMode"
    :class="{ complete: props.item.complete }"
    role="listitem"
    aria-checked="false"
  >
    <div class="todo-list__left">
      <input
        type="checkbox"
        role="checkbox"
        aria-labelledby="task2"
        :checked="props.item.complete"
        @click="emit('list-done', props.item)"
      />
      <span id="task2">{{ props.item.text }}</span>
    </div>
    <div class="todo-list__right">
      <i
        class="fa-solid fa-pen-to-square"
        role="button"
        aria-label="편집"
        @click="editModeChange"
      ></i>
      <i
        class="fa-solid fa-trash"
        role="button"
        aria-label="삭제"
        @click="emit('list-delete', props.item)"
      ></i>
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
        :value="copyProps.text"
        @input="copyProps.text = $event.target.value"
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
