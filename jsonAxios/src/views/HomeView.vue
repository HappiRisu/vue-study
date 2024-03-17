<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import {ref, onMounted} from 'vue';
import { injectStrict } from '@/utils/injectTyped';
import { AxiosKeys } from '@/libs/symbols';

const http = injectStrict(AxiosKeys)
const data = ref(null)
const router = useRouter();

onMounted(() => {
  getData();
})

const getData = () => {
  http.get("/posts")
    .then((response) => {
      data.value = response.data;
    })
}
const goModify = (id) => {
  router.push("/modify?id=" + id)
}
const deleteItem = (id) => {
  http.delete("/posts/" + id)
    .then((response) => {
      return response
    })
    .then((result) => {
      getData();
    })
    .catch((err) => console.log(err))
}

</script>
<template>
  <h1>Home</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
        <th>VIEWS</th>
        <th>Manage</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.views }}</td>
        <td><button @click="goModify(item.id)">수정</button></td>
        <td><button @click="deleteItem(item.id)">삭제</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table{
  width: 100%;
  border: 1px solid #000;
}

th{
  background-color: #f0f0f0;
  width: 20%;
  height: 25px;
}

td{
  text-align: center;
  height: 25px;
}
</style>