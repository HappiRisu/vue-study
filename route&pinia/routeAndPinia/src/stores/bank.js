import { defineStore } from "pinia";
import { ref, computed } from 'vue' 


export const useBankStore = defineStore('bank', () => {
  const number = ref(0);
  const kookminMoney = ref(0);
  const sinhanMoney = ref(0);

  const saveMoney = (bank_id) => {
    if(bank_id === "01"){
      sinhanMoney.value += number.value; 
    }
    else if(bank_id === '02'){
      kookminMoney.value += number.value
    }
    number.value = 0;
  } 
  const useMoney = (bank_id) => {
    if(bank_id === "01"){
      sinhanMoney.value -= number.value; 
    }
    else if(bank_id === '02'){
      kookminMoney.value -= number.value
    }
    number.value = 0;
  } 

  return{
    number, 
    kookminMoney,
    sinhanMoney,
    saveMoney,
    useMoney
  }
})