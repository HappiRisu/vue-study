<script setup>
import { ref, computed } from 'vue';

const text = ref('');
const clone = ref(null);

const lengthWithBlank = computed(() => {
  return text.value.length;
});
const lengthWithoutBlank = computed(() => {
  return text.value.replace(/ /g, '').length;
});
const byteWithBlank = computed(() => {
  return text.value.split('').reduce((a, c) => (c.charCodeAt(0) > 127 ? a + 2 : a + 1), 0);
});

const byteWithoutBlank = computed(() => {
  return text.value
    .replace(/ /g, '')
    .split('')
    .reduce((a, c) => (c.charCodeAt(0) > 127 ? a + 2 : a + 1), 0);
});

const allCopy = async () => {
  // clone.value.focus();
  // document.execCommand('copy');

  await navigator.clipboard
    .writeText(text.value)
    .then(() => {
      alert('복사 완료');
    })
    .catch((err) => {
      alert('복사 실패');
    });
};

const allClear = () => {
  text.value = '';
};
</script>

<template>
  <div class="saramin">
    <h1>글자수세기</h1>
    <div class="box">
      <div class="string-length">
        <textarea
          placeholder="내용을 입력해주세요"
          :value="text"
          @input="text = $event.target.value"
          ref="clone"
          @focus="$event.target.select()"
        ></textarea>
      </div>
      <div class="str-info">
        <p>
          공백 포함 <span>{{ lengthWithBlank }}</span> 자 | <span>{{ byteWithBlank }}</span> byte
        </p>
        <p>
          공백 제외 <span>{{ lengthWithoutBlank }}</span> 자 | <span>{{ byteWithoutBlank }}</span> byte
        </p>
      </div>
      <div class="btn-area">
        <button @click="allCopy()">전체복사</button>
        <button @click="allClear()">초기화</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.saramin {
  width: 564px;
  margin: 100px auto;
}

.saramin .box {
  border-top: 1px solid #676767;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-block: 1px solid #ddd;
}

.saramin h1 {
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 1;
  font-weight: normal;
}

.saramin .string-length {
  padding: 30px;
}

.saramin .string-length textarea {
  width: 100%;
  height: 400px;
  border: none;
  outline: none;
}

.saramin .str-info {
  border-top: 1px solid #ebebeb;
  padding: 0 22px;
  font-size: 14px;
  margin: 0px 8px;
}

.saramin .str-info span {
  font-size: 15px;
  color: #ff662f;
  font-weight: bold;
}

.saramin .btn-area {
  background-color: #fbfbfb;
  padding: 35px 0;
  text-align: center;
}

.saramin .btn-area button {
  background: transparent;
  border: 1px solid #d9d9d9;
  width: 160px;
  height: 40px;
  margin: 0 2px;
  cursor: pointer;
}

.saramin .btn-area button:nth-child(1) {
  background-color: #9c9c9c;
  color: white;
}
</style>
