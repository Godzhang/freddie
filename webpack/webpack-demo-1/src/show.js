function show(content) {
  document.querySelector("#app").innerHTML = "hello " + content;
}

export function hide() {
  console.log("hide");
}

export default show;
