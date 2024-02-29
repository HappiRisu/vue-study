<script setup>
import MyTabOne from "@/components/MyTabOne.vue";
import MyTabTwo from "@/components/MyTabTwo.vue";
import MyTabThree from "@/components/MyTabThree.vue";

import { ref, markRaw } from "vue";

const tabName = ref("MyTabOne");

const components = {
  MyTabOne,
  MyTabTwo,
  MyTabThree,
};
const onClickHandler = (tab) => {
  tabName.value = markRaw(tab);
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <nav class="nav">
          <ul class="nav__list">
            <li class="list__item" :class="{ active: tabName === 'MyTabOne' }">
              <a href="#" @click="onClickHandler('MyTabOne')">Home</a>
            </li>
            <li class="list__item" :class="{ active: tabName === 'MyTabTwo' }">
              <a href="#" @click="onClickHandler('MyTabTwo')">About</a>
            </li>
            <li
              class="list__item"
              :class="{ active: tabName === 'MyTabThree' }"
            >
              <a href="#" @click="onClickHandler('MyTabThree')">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <section class="content">
    <div class="container">
      <div class="content-wrap">
        <component :is="components[tabName]" class="active" />
      </div>
    </div>
  </section>
</template>
