import { defineStore } from 'pinia';

// 옵션 스토어 방식
// stores 디렉토리         bank.js
// 함수명 설정 : : use + {{ 파일명 }} + Store
//                                         <- 여기 인자는 파일 값을 따라간다(고유해야함)
export const useBankStore = defineStore('bank', {
  state: () => ({
    //data
    number: 0,
    moneyJP: 0,
    moneyMB: 0,
  }),
  getters: {
    //compute state의 매개변수가 들어간다. 따라서, state든, asdf든 어떤 이름이어도 상관이 없다
    moneyJPComma: (state) => state.moneyJP.toLocaleString(),
    moneyMBComma: (state) => state.moneyMB.toLocaleString(),
    moneyTotalComma: (state) => (state.moneyJP + state.moneyMB).toLocaleString(),
  },
  actions: {
    //actions
    saveMoney(bank) {
      if (bank === 'jp') {
        this.moneyJP += this.number;
      } else if (bank === 'mb') {
        this.moneyMB += this.number;
      }
      this.number = 0;
    },
    useMoney(bank) {
      if (bank === 'jp') {
        this.moneyJP -= this.number;
      } else if (bank === 'mb') {
        this.moneyMB -= this.number;
      }
      this.number = 0;
    },
  },
});
