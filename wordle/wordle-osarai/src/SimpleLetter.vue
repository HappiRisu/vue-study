<script setup>
const props = defineProps({
  letter: String,
  color : String,
})

</script>
<template>
  <div 
    class="col-span-1 border-2 h-16 flex justify-center items-center uppercase border-gray-200"
    :class="{ 
      found : props.color === 'green',
      hint  : props.color === 'yellow',
      miss  : props.color === 'gray'  
    }"
  >
    {{ letter }}
  </div>
</template>