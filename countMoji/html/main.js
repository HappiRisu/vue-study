const textEl = document.querySelector("textarea");
textEl.addEventListener("input", (e) => {
  // 글자수 세기
  const inputStrLength = e.target.value.length;
  // 공백 제거 글자수 세기
  const inputStrWithoutEmptyLength = e.target.value.replace(/ /g, "").length;
  // 바이트
  const byte = e.target.value
    .split("")
    .reduce(
      (acc, cur) => (cur.charCodeAt() > 127 ? (acc += 2) : (acc += 1)),
      0
    );
  // 공백 제거 바이트
  const byteWithoutEmpty = e.target.value
    .replace(/ /g, "")
    .split("")
    .reduce(
      (acc, cur) => (cur.charCodeAt() > 127 ? (acc += 2) : (acc += 1)),
      0
    );

  const spanEls = document.querySelectorAll(".str-info span");

  spanEls[0].innerText = inputStrLength;
  spanEls[1].innerText = byte;
  spanEls[2].innerText = inputStrWithoutEmptyLength;
  spanEls[3].innerText = byteWithoutEmpty;
});

async function allCopy() {
  const textareaContent = document.querySelector("textarea").value;
  await navigator.clipboard.writeText(textareaContent);
  alert(
    "입력하신 내용이 복사되었습니다.\n\nCtrl + v 키를 사용하여, 붙여 넣기를 사용하실 수 있습니다."
  );
}

function allClear() {
  document.querySelector("textarea").value = "";
  const spanEls = document.querySelectorAll(".str-info span");

  spanEls[0].innerText = "0";
  spanEls[1].innerText = "0";
  spanEls[2].innerText = "0";
  spanEls[3].innerText = "0";
}
