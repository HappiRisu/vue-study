<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios'
import { ref } from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-type": "application/json;charset=UTF-8",
  },
  // withCredentials: true, //기본값은 false 출처가 서로다른 요청간의 인증을 허락해준다.
});

const title = ref("")
const views = ref(0)
const router = useRouter();

const add = () => {
  http.post("/posts", {
      title: title.value,
      views: views.value
    }
  )
  .then((response) => {
    return response
  })
  .then((result) => {
    return router.push("/")
  })
}

</script>
<template>
  <h1>Add</h1>


  <form @submit.prevent="add">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title"/>
    
    <label for="views">Views</label>
    <input type="number" id="views" v-model="views"/>

    <button type="submit">제출</button>
  </form>
</template>