import "./c.css";
import "./b.js";
import "./a.js";
import("./async-module").then(a => console.log(a));
import("./async-module-2").then(a => console.log(a));
import("./async-module-3").then(a => console.log(a));

console.log("hello webapck🐸");
