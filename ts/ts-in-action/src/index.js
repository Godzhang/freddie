// let hello: string = "hello Typescript";
// let app: HTMLDivElement | null = document.querySelector(".app");
// if (app) {
//   app.innerHTML = hello;
// }
// T 必须是拥有 length 属性的
function log(value) {
    console.log(value, value.length);
    return value;
}
log("string");
