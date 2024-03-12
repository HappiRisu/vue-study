<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const community = reactive({
  html: [
    {
      id: 1,
      title: "HTML5의 새로운 태그들 알아보기",
      content: "HTML5에서 소개된 새로운 태그들에 대해 알아봅시다. `article`, `section`, `nav`, `aside`와 같은 태그들의 사용법과 장점을 살펴보겠습니다.",
      author: "JohnDoe",
    },
    {
      id: 2,
      title: "반응형 웹 디자인의 기본",
      content: "여러 가지 디바이스에서 웹사이트가 잘 보이도록 하는 반응형 웹 디자인에 대해 학습합니다. 미디어 쿼리와 그리드 시스템의 기본을 살펴보겠습니다.",
      author: "JaneSmith",
    },
    {
      id: 3,
      title: "HTML에서의 SEO 최적화 팁",
      content: "웹페이지의 검색 엔진 최적화를 위한 HTML 태그와 속성에 대해 알아봅니다. `meta`, `alt`, `title` 속성 등 SEO에 영향을 주는 요소들을 살펴보겠습니다.",
      author: "MikeLee",
    },
  ],
  css: [
    {
      id: 1,
      title: "Flexbox의 기본 이해",
      content: "Flexbox는 현대적인 레이아웃을 위한 강력한 도구입니다. 이 글에서는 flex container와 flex item의 주요 속성들을 다룹니다.",
      author: "ChrisFlex",
    },
    {
      id: 2,
      title: "CSS Grid로 복잡한 레이아웃 디자인하기",
      content: "CSS Grid는 2차원 레이아웃 시스템을 제공하며, 복잡한 디자인도 손쉽게 구현할 수 있습니다. 기본 개념부터 심화 내용까지 다룹니다.",
      author: "GridMaster",
    },
    {
      id: 3,
      title: "애니메이션을 활용한 사용자 경험 향상",
      content: "트랜지션과 애니메이션 속성을 사용하여 웹사이트에 동적 효과를 추가하는 방법을 배워봅시다.",
      author: "AnnaMotion",
    },
  ],
});

const route = useRoute();

const detail = computed(() => {
  console.log(route.meta)
  return community[route.params.language].find(v => v.id === +route.params.id)
})

</script>

<template>
  <div>{{ detail.id }}</div>
  <div>{{ detail.title }}</div>
  <div>{{ detail.content }}</div>
  <div>{{ detail.author }}</div>
</template>