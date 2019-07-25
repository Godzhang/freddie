let urls = [
  "http://localhost:3000/iframe/1.html",
  "http://localhost:3000/iframe/2.html",
  "http://localhost:3000/iframe/3.html",
  "http://localhost:3000/iframe/4.html"
];
let items = document.querySelectorAll(".iframe-item");
let btnContainer = document.querySelector(".button-box");
let control = btnContainer.querySelector(".control-btn");
let btns = btnContainer.querySelectorAll(".btn");
let selectIndex = 0;
let isAlternate = true;
let intervalId = null;
let intervalTime = 2000;

function showIframe(index) {
  let cur = items[index];
  let btn = btns[index];
  let iframe = cur.querySelector("iframe");
  let src = iframe.getAttribute("src");
  if (!src) {
    iframe.setAttribute("src", urls[index]);
  }
  items.forEach(item => (item.style.display = "none"));
  cur.style.display = "block";
  btns.forEach(btn => (btn.style.background = "#ddd"));
  btn.style.background = "#f00";
}

showIframe(selectIndex);

btnContainer.addEventListener("click", e => {
  let cur = e.target;
  if (cur.tagName === "BUTTON") {
    let btnIndex = Number(cur.dataset.index);
    showIframe(btnIndex);
    selectIndex = btnIndex;
    if (isAlternate) {
      resetInterval();
    }
  }
});

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}
function startInterval() {
  intervalId = setInterval(() => {
    selectIndex = selectIndex === urls.length - 1 ? 0 : selectIndex + 1;
    showIframe(selectIndex);
  }, intervalTime);
}
// startInterval();

control.addEventListener("click", () => {
  if (isAlternate) {
    clearInterval(intervalId);
    control.textContent = "暂停";
  } else {
    startInterval();
    control.textContent = "轮换";
  }
  isAlternate = !isAlternate;
});
