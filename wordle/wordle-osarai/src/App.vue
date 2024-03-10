<script setup>
import SimpleKeyboard from './SimpleKeyboard.vue';
import SimpleRow from './SimpleRow.vue'

import { reactive, onMounted, computed } from "vue"

const state = reactive({
  solution : "books",
  guesses : ["", "", "", "", "", ""],
  currentGuessIndex : 0,
  guessedLetter : {
    miss : [],
    found : [],
    hint : []
  }
})

const wonGame = computed(() => {
  console.log("state.currentGuessIndex", state.currentGuessIndex)
  return state.guesses[state.currentGuessIndex - 1] === state.solution;
})

const lostGame = computed(() => {
  return !wonGame.value && state.currentGuessIndex >= 6
})
const onKeyPress = (input) => {

  if(wonGame.value && state.currentGuessIndex >= 6) return;

  let currentGuess = state.guesses[state.currentGuessIndex]

  if(input === "{enter}"){
    if(currentGuess.length === 5){
      state.currentGuessIndex++
      // found
      for(let i = 0; i < 5; ++i){
        const c = currentGuess.charAt(i);
        
        if(state.solution.charAt(i) === c){
          state.guessedLetter.found.push(c)
        }
        else if(state.solution.indexOf(c) !== -1){
          state.guessedLetter.hint.push(c)
        }else{
          state.guessedLetter.miss.push(c)
        }
      }
    }
  }else if(input === "{bksp}"){
    // currentGuess.slice(0, currentGuess.length - 1) => currentGuess.slice(0, -1)
    state.guesses[state.currentGuessIndex] = currentGuess.slice(0, -1)
  }else if(currentGuess.length < 5){
    const alphaRegex = /[a-zA-Z]/;

    if(alphaRegex.test(input)){
      state.guesses[state.currentGuessIndex] += input;
    }
  }

}

onMounted(() => {
  window.addEventListener("keyup", (e) => {
    let key = e.code === 'Enter'
      ? "{enter}"
      : e.code === 'Backspace'
      ? "{bksp}"
      : e.key

  onKeyPress(key)
  })
})
</script>

<template>
  <div class="max-w-md h-screen mx-auto flex flex-col justify-evenly">
    <div>
      <SimpleRow 
        v-for="(guess, i) in state.guesses" 
        :key="i" 
        :solution="state.solution" 
        :guess="guess" 
        :submitted="i < state.currentGuessIndex"
      />
      <!-- i : 0 1 2 3 4 -->
      <!-- s : 0 1 2 3 4  -->
    </div>
    <p v-if="wonGame" class="text-center">
      🎉 congrats you solved it
    </p>
    <p v-else-if="lostGame" class="text-center">
      😭 out of tries
    </p>
    <SimpleKeyboard
      @onKeyPress = "onKeyPress"
      :guessedLetter = state.guessedLetter  
    />
  </div>
  
</template>

<style scoped></style>
