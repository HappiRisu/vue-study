<script setup>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'
import { ref, onMounted } from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-type": "application/json;charset=UTF-8",
  },
  // withCredentials: true, //기본값은 false 출처가 서로다른 요청간의 인증을 허락해준다.
});

const title = ref("")
const views = ref(0)
const route = useRoute();
const router = useRouter();

onMounted(() => {
  http.get("http://localhost:3000/posts/" + route.query.id)
  .then((response) => {
    title.value = response.data.title
    views.value = response.data.views
  })
})

// put(변경되어야 할 필드가 빠져있는지 잘 봐야함) 과 patch 

const modify = () => {
  http.put("http://localhost:3000/posts/" + route.query.id, {
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
  <h1>Modify</h1>


  <form @submit.prevent="modify">
    <label for="title">Title</label>
    <input type="text" id="title" v-model="title"/>
    
    <label for="views">Views</label>
    <input type="number" id="views" v-model="views"/>

    <button type="submit">제출</button>
  </form>
</template>