<template>
  <div class="simple-keyboard"></div>
</template>

<script setup>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

import { ref, onMounted, watch } from "vue";

const emit = defineEmits(["onKeyPress", "onChange"]);
const props = defineProps({
  guessedLetters: Object
})


const keyboard = ref(null);

onMounted(() => {
  keyboard.value = new Keyboard("simple-keyboard", {
    layout: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "{enter} z x c v b n m {bksp}",
      ],
    },
    onKeyPress: onKeyPress,
    onChange: onChange,
  });
});

const onKeyPress = (button) => {
  emit("onKeyPress", button);
};

const onChange = (input) => {
  emit("onChange", input);
};

watch(
  () => props.guessedLetters,
  (guessedLetters, prevGuessedLetters) => {

    keyboard.value.addButtonTheme(
      guessedLetters.miss.join(" "),
      "miss"
    );
    keyboard.value.addButtonTheme(
      guessedLetters.found.join(" "),
      "found"
    )
    keyboard.value.addButtonTheme(
      guessedLetters.hint.join(" "),
      "hint"
    )

  },
  { deep: true }
)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
