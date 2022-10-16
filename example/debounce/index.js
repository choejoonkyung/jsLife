import debounce from "../../feature/debounce.js";

window.onresize = debounce(() => {
  console.log("Resizing이 끝난 지 1초 지났습니다.");
}, 1000);
