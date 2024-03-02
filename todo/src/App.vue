<script setup>
import { ref, onMounted, watch } from 'vue';

const name = ref('');
const todos = ref([]);

const content = ref('');
const category = ref('');

const addTodo = () => {
  todos.value.push({
    todo: content.value,
    category: category.value,
    createdAt: new Date(),
  });
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => {
    return t !== todo;
  });
};

watch(name, (newValue) => {
  localStorage.setItem('name', newValue);
});

watch(
  todos,
  (newValue) => {
    console.log(newValue);
    localStorage.setItem('todo', newValue);
  },
  { deep: true }
);

onMounted(() => {
  localStorage.setItem('name', '');
});
</script>

<template>
  <div class="container">
    <!-- header -->
    <header class="header">
      <p>What's Up</p>
      <input v-model="name" type="text" />
    </header>
    <!-- todo -->
    <section class="todo">
      <form action="#" class="todo-form">
        <!-- title -->
        <div class="todo__title">
          <h2>Create a Todo</h2>
        </div>

        <div class="todo__input">
          <div class="todo__small--title">
            <p>what's on your todo list?</p>
          </div>
          <div class="todo__input--labelBox">
            <input type="text" placeholder="e.g. make a video" v-model="content" />
          </div>
        </div>

        <!-- category -->
        <div class="todo__category">
          <div class="todo__small--title category__title">
            <p>pick a category</p>
          </div>
          <div class="todo__category--business">
            <div class="todo__category--bg">
              <input type="radio" id="business" value="business" name="category" v-model="category" />
              <label for="business">Business</label>
            </div>
          </div>
          <div class="todo__category--personal">
            <div class="todo__category--bg">
              <input type="radio" id="personal" value="personal" name="category" v-model="category" />
              <label for="personal">Personal</label>
            </div>
          </div>
        </div>

        <!-- button -->
        <div class="todo__add">
          <button type="button" @click="addTodo">Add todo</button>
        </div>
      </form>
    </section>
    <!-- list -->
    <section class="list">
      <h2>todo list</h2>
      <ul>
        <li class="list__item" v-for="(todo, index) in todos" :key="index">
          <div class="list__item--wrap">
            <input class="list__item--el" type="radio" />
            <input class="list__item--text" type="text" :value="todo.todo" />
            <button class="list__item--el" type="button" @click="removeTodo(todo)">Delete</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
