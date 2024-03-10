<script setup>
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

import { ref, onMounted, watch } from 'vue';

const prop = defineProps({
  guessedLetter : Object
})
const emit = defineEmits("onKeyPress")


const keyboard = ref(null);

const onKeyPress = (input) => {
  emit("onKeyPress", input)
};

onMounted(() => {
  keyboard.value = new Keyboard('simple-keyboard', {
    layout: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "{enter} z x c v b n m {bksp}"
      ],
    },
    onKeyPress: onKeyPress,
  });
});

watch(() => prop.guessedLetter, (val) => {
  keyboard.value.addButtonTheme(val.found.join(" "), "found")
  keyboard.value.addButtonTheme(val.hint.join(" "), "hint")
  keyboard.value.addButtonTheme(val.miss.join(" "), "miss")
}, {deep : true})


</script>

<template>
  <div class="simple-keyboard"></div>
</template>

<style>
div.miss {
  @apply bg-gray-500 !important;
  @apply text-white;
}

div.hint {
  @apply bg-yellow-600 !important;
  @apply text-white;
}

div.found {
  @apply bg-green-500 !important;
  @apply text-white;
}
</style>