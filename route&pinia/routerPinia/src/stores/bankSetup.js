import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useBankSetupStore = defineStore('bankSetup', () => {
  const number = ref(0);
  const moneyJP = ref(0);
  const moneyMB = ref(0);

  const moneyJPComma = computed(() => {
    return moneyJP.value.toLocaleString();
  });
  const moneyMBComma = computed(() => {
    return moneyMB.value.toLocaleString();
  });
  const moneyTotalComma = computed(() => {
    return (moneyJP.value + moneyMB.value).toLocaleString();
  });

  const saveMoney = (bank) => {
    if (bank === 'jp') {
      moneyJP.value += number.value;
    } else if (bank === 'mb') {
      moneyMB.value += number.value;
    }
    number.value = 0;
  };

  const useMoney = (bank) => {
    if (bank === 'jp') {
      moneyJP.value -= number.value;
    } else if (bank === 'mb') {
      moneyMB.value -= number.value;
    }
    number.value = 0;
  };

  return {
    number,
    moneyJP,
    moneyMB,
    moneyJPComma,
    moneyMBComma,
    moneyTotalComma,
    saveMoney,
    useMoney,
  };
});
