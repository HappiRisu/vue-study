## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 기록

- copy

  1. document.execCommand() -> deprecated

  - 클릭 후
  - textarea나 input있는 곳에 id or vue 같은 경우 ref 지정해 값 갖고옴
  - JS: document.getElementById("id값") // Vue : const ref값 = ref(null)
  - 갖고온 후 input, textarea -> 포커스: focus() -> select: $event.target.select() , 모바일: setSelectionRange(0, 99999);
  - document.execCommand('copy')

  2. clipboard API 이용 (비동기 함수)

  - await navigator.clipboard.writeText(텍스트 값)

- 글자 세기

  - 0 ~ 127은 1byte로 128이후부터는 2byte로 취급
  - 공백을 없애기 위해 replace(/ /g, "")
  - reduce함수 사용해 다 더해줌

끝.
