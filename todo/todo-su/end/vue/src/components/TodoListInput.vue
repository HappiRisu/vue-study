<script setup>
import { ref } from "vue";
const inputMessage = ref("");
const emit = defineEmits(["item-push"]);
const itemPush = (e) => {
  if (!e.isComposing) {
    emit("item-push", inputMessage.value);
    inputMessage.value = "";
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
      @keydown.enter="itemPush"
    />
    <i
      class="fa-solid fa-plus"
      role="button"
      aria-label="등록"
      @click="itemPush"
    ></i>
  </div>
</template>
