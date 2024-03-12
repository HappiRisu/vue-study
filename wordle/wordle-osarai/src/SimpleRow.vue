<script setup>
import SimpleLetter from './SimpleLetter.vue'

import { ref, watch } from 'vue';

const props = defineProps({
  solution: String,
  guess: String,
  submitted: Boolean,
})

const colors = ref(["", "", "", "", "", ""])

watch(
  () => props.submitted,
  async (submitted) => {
    if(submitted){
      const s = props.solution;
      const g = props.guess
      
      let temp = ["gray", "gray", "gray", "gray", "gray"]

      let letterPool = [];

      for(let i = 0; i < 5; ++i){
        if(s.charAt(i) === g.charAt(i)){
          temp[i] = "green"
        }else{
          letterPool.push(s.charAt(i))
        }
      }

      for(let i = 0; i < 5; ++i){
        if(temp[i] === "gray"){
          if(letterPool.indexOf(g.charAt(i)) !== -1){
            letterPool.splice(letterPool.indexOf(g.charAt(i)), 1)
            temp[i] = "yellow"
          }
        }

        colors.value[i] = temp[i];
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }
  }
)



</script>
<template>
  <div class="grid grid-cols-5 gap-1 max-w-xs mb-1 mx-auto">
    <SimpleLetter 
      v-for="i in 5" 
      :key="i" 
      :letter="props.guess[i - 1]"
      :color="colors[i - 1]"
    />
  </div>
</template>